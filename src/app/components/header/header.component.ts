import {Component, OnInit} from '@angular/core';

// Services
import {DrawerService} from "../../services/drawer.service";

// Interfaces
import {EnumDrawerState} from "../../models/enum-drawer-state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private drawerService: DrawerService) {
  }

  ngOnInit(): void {
  }

  /**
   * Открыть drawer
   */
  public openDrawer() {
    this.drawerService.setState({
        state: EnumDrawerState.create,
        data: null
      });
  }

}
