import {Component, OnInit} from '@angular/core';
import {Item} from "./models/item";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'subs';

  constructor(private dataService: DataService) {
  }

  public data: Item[] = []

  ngOnInit() {
    const rawData = localStorage.getItem('items');
    if (rawData) {
      const data = JSON.parse(rawData);
      this.dataService.setData(data);
    }
  }
}
