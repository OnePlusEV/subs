import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  // Global props
  @Input() type: string = 'input';
  @Input() control: any = new FormControl();
  @Input() label: string = 'labelName';
  @Input() placeholder: string = 'placeholderName';

  // Select props
  @Input() selectedValue: any = null;
  @Input() selectedType: string = 'default';
  @Input() options: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
