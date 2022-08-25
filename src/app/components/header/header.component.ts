import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Item} from "../../models/item";
import {FormControl, FormGroup} from "@angular/forms";
import {DrawerService} from "../../services/drawer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public dataService: DataService, private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  public openDrawer() {
    this.drawerService.setState(true);
  }

  /**
   * Добавить подписку
   */
  public add() {
    let rows: Item[] = [];
    this.dataService.getData().subscribe(res => {
      if (res) {
        rows = res;
      } else {
        rows = [];
      }
    })
    const tempRow: Item = {
      idx: 1,
      currency: 'RUR',
      id: this.dataService.getUniqueId(),
      // nextPayment: moment().add('month', 1),
      nextPayment: '2',
      price: 0,
      categories: [],
      completed: false,
      service: 'Yandex'
    }
    rows.push(tempRow);
    this.dataService.setData(rows);
  }

}
