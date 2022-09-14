import {Injectable, Input} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {DataService} from "./data.service";
import {Item} from "../models/item";
import {EnumNotificationType} from "../models/notification/enum-notification-type";
import {Notification} from "../models/notification/notification";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NzModalService,
              private dataService: DataService,
              private toast: ToastService) {}

  @Input() item: any;

  public show(item: any): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this item?',
      nzOkText: 'Delete',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.deleteRow(item);
        const notification: Notification = {
          type: EnumNotificationType.success,
          content: 'Item deleted successfully',
          title: 'Success'
        }
        this.toast.createNotification(notification)
      },
      nzCancelText: 'Cancel',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  public deleteRow(item: Item) {
    this.dataService.deleteRow(item.idx);
  }
}
