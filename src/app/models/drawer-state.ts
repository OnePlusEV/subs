import {EnumDrawerState} from "./enum-drawer-state";
import {Item} from "./item";

export interface DrawerState {
  state: EnumDrawerState,
  data: Item | null
}

