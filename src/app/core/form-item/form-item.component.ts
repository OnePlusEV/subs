import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

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
  @Input() options: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
