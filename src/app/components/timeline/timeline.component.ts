import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {DrawerState} from "../../models/drawer-state";
import {DataService} from "../../services/data.service";
import {DrawerService} from "../../services/drawer.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private dataService: DataService,
              private drawerService: DrawerService) { }

  @Input() data: Item[] = []

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

  editRow(item: Item) {
    this.drawerService.setState({
      state: DrawerState.edit,
      data: item
    });
  }
}
