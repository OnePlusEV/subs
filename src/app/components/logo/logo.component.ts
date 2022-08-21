import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  @Input() item: any;
  ngOnInit(): void {
    this.color = this.setCustomColor();
  }

  public color = '#333333';
  public palette = [
    '#77dd77'
    , '#89cff0'
    , '#99c5c4'
    , '#9adedb'
    , '#aa9499'
    , '#aaf0d1'
    , '#b2fba5'
    , '#b39eb5'
    , '#bdb0d0'
    , '#bee7a5'
    , '#befd73'
    , '#c1c6fc'
    , '#cb99c9'
    , '#fdfd96'
    , '#ff6961'
    , '#ff9899'
    , '#ffb7ce'
    , '#ca9bf7'
  ]

  setDefaultLogo(item: any): string {
    const raw = item.service;
    if (raw && raw.length > 0) {
      return raw[0];
    }
    return '?'
  }

  setCustomColor() {
    const palette = this.palette
    if (palette && palette.length > 0) {
      const length = palette.length;
      const index = Math.floor(Math.random() * length);
      return palette[index];
    }
    return '#000000'
  }

}
