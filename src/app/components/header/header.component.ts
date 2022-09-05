import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Item} from "../../models/item";
import {DrawerService} from "../../services/drawer.service";
import {DrawerState} from "../../models/drawer-state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataService, private drawerService: DrawerService) {
  }

  ngOnInit(): void {
  }

  public openDrawer() {
    this.drawerService.setState({
        state: DrawerState.create,
        data: null
      });
  }

}
