import {Component, Injector, Input} from '@angular/core';
import {Item} from "../../models/item";
import {AbstractViewComponent} from "../abstract-view/abstract-view.component";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent extends AbstractViewComponent {

  constructor(protected injector: Injector) {
    super(injector)
  }

  @Input() data: Item[] = []

  ngOnInit(): void {
    super.ngOnInit();
  }
}
