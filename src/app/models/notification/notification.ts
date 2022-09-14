import {EnumNotificationType} from "./enum-notification-type";

export interface Notification {
  type: EnumNotificationType
  title: string,
  content: string,
}

