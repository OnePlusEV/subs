import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string = 'input';
  @Input() control: any;
  @Input() label: string = 'labelName';
  @Input() placeholder: string = 'placeholderName';

  @Input() selectedValue: any = null;
  @Input() selectedType: string = 'default';
  @Input() options: any = [];

  constructor() { }

  ngOnInit(): void {

  }

}
