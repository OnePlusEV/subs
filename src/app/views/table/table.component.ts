import {Component, Injector, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {DataService} from "../../services/data.service";
import {DrawerService} from "../../services/drawer.service";
import {DrawerState} from "../../models/drawer-state";
import {AbstractViewComponent} from "../abstract-view/abstract-view.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractViewComponent {

  @Input() headers: string[] = []

  constructor(protected injector: Injector) {
    super(injector)
  }

  @Input() data: Item[] = []

  ngOnInit(): void {
    super.ngOnInit();
  }

}
