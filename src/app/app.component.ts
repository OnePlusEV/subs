import { Component } from '@angular/core';
import {Item} from "./models/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subs';

  public headers = ['', 'services', 'price', 'next payment', 'categories', ''];
  public data: Item[] = [
    {id: 1, idx: 1, categories: [], currency: 'RUB', nextPayment: '1', price: 100, service: 'Yandex' }
  ]
}
