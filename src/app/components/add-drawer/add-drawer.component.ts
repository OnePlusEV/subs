import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {DrawerService} from "../../services/drawer.service";
import {DataService} from "../../services/data.service";

import {DrawerState} from "../../models/drawer-state";
import {CATEGORIES} from "../../dicts/Categories";
import {Item} from "../../models/item";

import * as moment from "moment";


@Component({
  selector: 'app-add-drawer',
  templateUrl: './add-drawer.component.html',
  styleUrls: ['./add-drawer.component.scss']
})
export class AddDrawerComponent implements OnInit {

  public visible = false;
  public state = null;
  public categories = CATEGORIES;
  public selectedValue = null;
  public id: any;

  constructor(private service: DrawerService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(res => {
      this.visible = res.state === DrawerState.create || res.state === DrawerState.edit;
      this.state = res.state;
      if (res.data) {
        this.mapData(res.data);
        this.id = res.data.id;
      }
    })
  }

  closeDrawer(): void {
    this.form.reset();
    this.service.setState({
      state: DrawerState.null,
      data: null,
    });
  }

  form = new FormGroup({
    service: new FormControl(''),
    price: new FormControl(''),
    nextPayment: new FormControl(''),
    categories: new FormControl(''),
  });

  public addNewSub(id?: number) {
    const rawData = this.prependData();

    let rows: Item[] = [];
    this.dataService.getData().subscribe(res => {
      if (res) {
        rows = res;
      } else {
        rows = [];
      }
    })
    if ((id || id == 0) && rows.length) {
      const index = rows.findIndex(item => {
        return item.id === id;
      })
      rows[index] = rawData;
    } else {
      rows.push(rawData);
    }
    this.dataService.setData(rows);
    this.closeDrawer();

  }

  public prependData() {
    return  {
      id: this.dataService.getUniqueId(),
      idx: 1,
      currency: 'RUR',
      service: this.form.get('service')?.value,
      price: this.form.get('price')?.value,
      nextPayment: this.prependDate(this.form.get('nextPayment')?.value),
      categories: this.form.get('categories')?.value,
    }
  }

  private prependDate(value: string) {
    if (value) {
      const momentDate = moment(value);
      return momentDate.format('DD.MM.YYYY');
    }
    return 'error'
  }

  public mapData(value: Item) {
    console.log(value);
    this.form.get('service')?.setValue(value.service);
    this.form.get('price')?.setValue(value.price);

    const date = moment(value.nextPayment, 'DD.MM.YYYY').toDate()
    this.form.get('nextPayment')?.setValue(date);

    const categories = value.categories;
    this.form.get('categories')?.setValue(categories);
  }

}
