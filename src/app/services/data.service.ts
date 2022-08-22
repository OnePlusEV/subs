import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data$: BehaviorSubject<any> = new BehaviorSubject(null);

  getData() {
    return this.data$.asObservable();
  }

  setData(value: any) {
    this.data$.next(value);
  }

  deleteRow(index: number) {
    let data = this.data$.value;
    data.splice(index, 1);
    this.setData(data);
  }


  getUniqueId(): number {
    const dataArray = this.data$.value;
    const length = dataArray?.length;
    if (dataArray && length) {
      if (length > 0) {
        return (dataArray[length-1].id + 1);
      }
      return 0;
    }
    return 0;
  }
}
