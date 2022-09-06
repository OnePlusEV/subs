import {Component, Injector, Input} from '@angular/core';
import {Item} from "../../models/item";
import {AbstractViewComponent} from "../abstract-view/abstract-view.component";
import * as moment from "moment";

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

  public divider(item: Item) {
    if (item.idx === 0) {
      return true
    }
    const pastItem = this.data[item.idx - 1];

    const pastMonth = moment(pastItem.nextPayment, 'DD.MM.YYYY').month();
    const currentMonth = moment(item.nextPayment, 'DD.MM.YYYY').month();
    return pastMonth !== currentMonth;
  }

  public getMonth(item: Item): string {
    return moment(item.nextPayment, 'DD.MM.YYYY').format('MMMM')
  }
}
