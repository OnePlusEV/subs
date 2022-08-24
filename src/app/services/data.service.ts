import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data$: BehaviorSubject<any> = new BehaviorSubject(null);

  /**
   * Метод возвращающий данные
   */
  getData() {
    return this.data$.asObservable();
  }

  /**
   * Метод установки данных
   * @param value - массив подписок
   */
  setData(value: any) {
    this.data$.next(value);
  }

  /**
   * Метод удаляющий подписку
   * @param index - порядковый номер подписки
   */
  deleteRow(index: number) {
    let data = this.data$.value;
    data.splice(index, 1);
    if (data.length == 0) {
      data = null
    }
    this.setData(data);
  }


  /**
   * Метод генерирующий уникальный
   * идентификатор для подписки
   */
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
