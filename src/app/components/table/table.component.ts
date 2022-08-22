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

  public counter: number = 0;

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.refreshTableData(res);
      this.counter = 0;
    })
  }

  refreshTableData(res: Array<Item>) {
    if (res && res.length > 0) {
      res.forEach(item => {
        item.idx = this.counter;
        // this.setFormatPayment(item);
        this.counter++;
      })
      this.data = res;
    }
  }

  deleteRow(item: Item) {
    this.dataService.deleteRow(item.idx);
  }

}
