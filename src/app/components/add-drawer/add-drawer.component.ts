import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DrawerService} from "../../services/drawer.service";

@Component({
  selector: 'app-add-drawer',
  templateUrl: './add-drawer.component.html',
  styleUrls: ['./add-drawer.component.scss']
})
export class AddDrawerComponent implements OnInit {

  public visible = false;

  constructor(private service: DrawerService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(res => {
      this.visible = res;
    })
  }

  close(): void {
    this.service.setState(false);
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

}
