import { Injectable } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {Notification} from "../models/notification/notification";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private notification: NzNotificationService) { }

  createNotification(object: Notification): void {
    this.notification.create(
      object.type,
      object.title,
      object.content
    );
  }
}

