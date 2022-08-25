import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private state$: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() { }

  getState() {
    return this.state$.asObservable();
  }

  setState(value: any){
    this.state$.next(value);
  }
}
