import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DrawerService} from "../../services/drawer.service";
import {Item} from "../../models/item";
import {DataService} from "../../services/data.service";
import * as moment from "moment";
import {CATEGORIES} from "../../dicts/Categories";


@Component({
  selector: 'app-add-drawer',
  templateUrl: './add-drawer.component.html',
  styleUrls: ['./add-drawer.component.scss']
})
export class AddDrawerComponent implements OnInit {

  public visible = false;
  public categories = CATEGORIES;
  public selectedValue = null;

  constructor(private service: DrawerService, private dataService: DataService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(res => {
      this.visible = res;
    })
  }

  close(): void {
    this.form.reset();
    this.service.setState(false);
  }

  form = new FormGroup({
    service: new FormControl(''),
    price: new FormControl(''),
    nextPayment: new FormControl(''),
    categories: new FormControl(''),
  });

  public addNewSub() {
    const rawData = this.prependData();

    let rows: Item[] = [];
    this.dataService.getData().subscribe(res => {
      if (res) {
        rows = res;
      } else {
        rows = [];
      }
    })
    rows.push(rawData);
    this.dataService.setData(rows);
    this.close();

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
      return momentDate.format('DD-MM-YYYY');
    }
    return ''
  }

}
