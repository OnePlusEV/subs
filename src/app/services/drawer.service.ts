import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DrawerState} from "../models/drawer-state";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private state$: BehaviorSubject<any> = new BehaviorSubject({
    state: DrawerState.null,
    data: null
  });

  constructor() { }

  getState() {
    return this.state$.asObservable();
  }

  setState(value: any){
    this.state$.next(value);
  }
}
