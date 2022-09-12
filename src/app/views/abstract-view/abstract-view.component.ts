import {Component, Injector, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {DrawerService} from "../../services/drawer.service";
import {Item} from "../../models/item";
import {EnumDrawerState} from "../../models/enum-drawer-state";

// Third-party
import * as moment from "moment";
import {ModalService} from "../../services/modal.service";
import {CATEGORIES} from "../../dicts/Categories";
import {Category} from "../../models/category";

@Component({
  selector: 'app-abstract-view',
  template: '',
  styleUrls: ['./abstract-view.component.scss']
})
export class AbstractViewComponent implements OnInit {

  protected dataService: DataService;
  protected drawerService: DrawerService;
  protected modalService: ModalService;

  constructor(protected injector: Injector) {
    this.dataService = this.injector.get(DataService);
    this.drawerService = this.injector.get(DrawerService);
    this.modalService = this.injector.get(ModalService);
  }

  public data: any;

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.refreshTableData(res);
    })
  }

  /**
   * Метод обновляющий таблицу
   * @param res - данные таблицы
   */
  refreshTableData(res: Array<Item>) {
    let counter = 0;
    if (res && res.length > 0) {
      res.forEach(item => {
        item.idx = counter;
        counter++;
        this.setTag(item);
      })
      this.data = this.sortItems(res);
    } else {
      this.data = [];
    }
  }

  /**
   * Метод удаляющий подписку
   * @param item - подписка
   */
  deleteRow(item: Item) {
    this.dataService.deleteRow(item.idx);
  }

  confirmModal(item: Item) {
    this.modalService.show(item);
  }

  /**
   * Метод изменяющий данные подписки
   * @param item - подписка
   */
  editRow(item: Item) {
    this.drawerService.setState({
      state: EnumDrawerState.edit,
      data: item
    });
  }

  sortItems(array: Item[]): Item[] {
    return array.sort(function(a,b){
      let dateA = moment(a.nextPayment, 'DD.MM.YYYY').toDate(), dateB = moment(b.nextPayment, 'DD.MM.YYYY').toDate();
      return (dateA.getTime() - dateB.getTime());
    })
  }

  setTag(item: any) {
    item.fullCategories = [];
    item.categories?.forEach((cat: any) => {
      item.fullCategories?.push(this.resolveTag(cat));
    })
  }

  resolveTag(id: any): Category {
    console.log('resolver')
    return  (CATEGORIES.find(item => item.value === id) || CATEGORIES[0])
  }

}
