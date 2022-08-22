import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public dataService: DataService) { }

  ngOnInit(): void {
  }

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
    console.log(rows);
  }

}
