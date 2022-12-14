import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

// Services
import {DrawerService} from "../../services/drawer.service";
import {DataService} from "../../services/data.service";

// Interfaces
import {EnumDrawerState} from "../../models/enum-drawer-state";
import {DrawerState} from "../../models/drawer-state";
import {Item} from "../../models/item";
import {Category} from "../../models/category";

// Constants
import {CATEGORIES} from "../../dicts/Categories";

// Third-party
import * as moment from "moment";
import {ToastService} from "../../services/toast.service";
import {EnumNotificationType} from "../../models/notification/enum-notification-type";


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  public state: EnumDrawerState = EnumDrawerState.null;
  public visible: boolean = false;
  public id: any;
  public categories: Category[] = CATEGORIES;
  public selected: any = []

  public form = new FormGroup({
    service: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('\\d{0,}')]),
    nextPayment: new FormControl('', [Validators.required]),
    categories: new FormControl(''),
  });

  constructor(private service: DrawerService,
              private dataService: DataService,
              private toast: ToastService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(res => {
      this.initialState(res);
    })
  }

  /**
   * Установить состояние компонента
   * и заполнить форму при наличии данных
   * @param res - сосятоние компонента
   */
  private initialState(res: DrawerState) {
    this.visible = res.state === EnumDrawerState.create || res.state === EnumDrawerState.edit;
    this.state = res.state;
    if (res.data) {
      this.mapData(res.data);
      this.id = res.data.id;
    }
  }

  /**
   * Закрыть компонент
   */
  public closeDrawer(): void {
    this.form.reset();
    this.service.setState({
      state: EnumDrawerState.null,
      data: null,
    });
  }

  /**
   * Добавить \ изменить запись
   * @param id? - идентификатор записи
   */
  public addNewSub(id?: number) {
    const rawData = this.prependData();
    let rows: Item[] = this.getData();

    if ((id || id == 0) && rows.length) {
      const index = rows.findIndex(item => item.id === id)
      rows[index] = rawData;
    } else {
      rows.push(rawData);
    }
    this.dataService.setData(rows);
    this.closeDrawer();
    const notification = {
      type: EnumNotificationType.success,
      content: id ? 'Item edited successfully' : 'Item added successfully',
      title: 'Success'
    }
    this.toast.createNotification(notification)

  }

  /**
   * Подготовить данные к публикации
   */
  public prependData(): Item {
    return  {
      id: this.dataService.getUniqueId(),
      idx: 1,
      currency: 'RUR',
      service: this.form.get('service')?.value,
      price: this.form.get('price')?.value,
      nextPayment: DrawerComponent.prependDate(this.form.get('nextPayment')?.value),
      categories: this.form.get('categories')?.value,
    }
  }

  /**
   * Подготовить дату для публикации
   * @param value - дата
   */
  private static prependDate(value: string): string {
    if (value) {
      const momentDate = moment(value);
      return momentDate.format('DD.MM.YYYY');
    }
    return 'error'
  }

  /**
   * Заполинть форму для редактирования
   * @param value - запись
   */
  public mapData(value: Item) {
    this.form.get('service')?.setValue(value.service);
    this.form.get('price')?.setValue(value.price);

    const date = moment(value.nextPayment, 'DD.MM.YYYY').toDate()
    this.form.get('nextPayment')?.setValue(date);

    this.selected = value.categories;
  }

  /**
   * Метод изменяющий категрию
   * @param value - массив категорий
   */
  public changeCategory(value: Category[]) {
    this.form.get('categories')?.setValue(value);
  }

  private getData(): Item[] {
    let rows: any;
    this.dataService.getData().subscribe(res => {
      if (res) {
        rows = res;
      } else {
        rows = [];
      }
    })
    return rows;
  }
}
