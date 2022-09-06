import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

// Interfaces
import {EnumDrawerState} from "../models/enum-drawer-state";
import {DrawerState} from "../models/drawer-state";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private state$: BehaviorSubject<any> = new BehaviorSubject({
    state: EnumDrawerState.null,
    data: null
  });

  constructor() { }

  getState() {
    return this.state$.asObservable();
  }

  setState(value: DrawerState){
    this.state$.next(value);
  }
}
