import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() item: any;
  public colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'blue',
    'geekblue',
    'purple'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
