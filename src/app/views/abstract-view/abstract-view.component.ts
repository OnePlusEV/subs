import {Component, Injector, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {DrawerService} from "../../services/drawer.service";
import {Item} from "../../models/item";
import {DrawerState} from "../../models/drawer-state";

@Component({
  selector: 'app-abstract-view',
  template: '',
  styleUrls: ['./abstract-view.component.scss']
})
export class AbstractViewComponent implements OnInit {

  protected dataService: DataService;
  protected drawerService: DrawerService;

  constructor(protected injector: Injector) {
    this.dataService = this.injector.get(DataService);
    this.drawerService = this.injector.get(DrawerService);
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
