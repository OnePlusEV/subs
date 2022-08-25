import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng Zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import { LogoComponent } from './components/logo/logo.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import { AddDrawerComponent } from './components/add-drawer/add-drawer.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    LogoComponent,
    AddDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzAvatarModule,
    NzIconModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
