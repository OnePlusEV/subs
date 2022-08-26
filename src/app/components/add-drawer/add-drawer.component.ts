import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DrawerService} from "../../services/drawer.service";
import {Item} from "../../models/item";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-add-drawer',
  templateUrl: './add-drawer.component.html',
  styleUrls: ['./add-drawer.component.scss']
})
export class AddDrawerComponent implements OnInit {

  public visible = false;

  constructor(private service: DrawerService, private dataService: DataService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(res => {
      this.visible = res;
    })

    this.form.get('service')?.valueChanges.subscribe(res => {
      console.log(res);
    })
  }

  close(): void {
    this.service.setState(false);
  }

  form = new FormGroup({
    service: new FormControl(''),
    price: new FormControl(''),
    nextPayment: new FormControl(''),
  });

  public addNewSub() {
    const rawData = this.prependData();

    let rows: Item[] = [];
    this.dataService.getData().subscribe(res => {
      if (res) {
        rows = res;
      } else {
        rows = [];
      }
    })
    rows.push(rawData);
    this.dataService.setData(rows);
    this.service.setState(false);

  }

  public prependData() {
    return  {
      id: this.dataService.getUniqueId(),
      idx: 1,
      currency: 'RUR',
      service: this.form.get('service')?.value,
      price: this.form.get('price')?.value,
      nextPayment: this.form.get('nextPayment')?.value
    }
  }

}
