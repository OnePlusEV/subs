import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headers: string[] = []
  @Input() data: Item[] = []

  constructor(private dataService: DataService) { }


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
      })
      this.data = res;
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

}
