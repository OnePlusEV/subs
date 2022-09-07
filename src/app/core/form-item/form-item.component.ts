import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Category} from "../../models/category";

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  // Global props
  @Input() type: string = 'input';
  @Input() control: any = new FormControl();
  @Input() label: string = 'labelName';
  @Input() placeholder: string = 'placeholderName';

  // Select props
  @Input() selectedType: string = 'default';
  @Input() options: Category[] = [];
  @Input() selected: any;
  @Output() newItemEvent = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit(): void {
  }

  public outputSelectedItems(value: any) {
    this.newItemEvent.emit(value);
  }
}
