import {Component, Input, OnInit} from '@angular/core';
import {PALETTE} from "../../dicts/Palette";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public color = '#333333';
  public palette = PALETTE;

  @Input() item: any;
  ngOnInit(): void {
    this.color = this.setCustomColor();
  }

  /**
   * Метод устанавливающий литеру в логотип
   * @param item - объект подписки
   */
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
