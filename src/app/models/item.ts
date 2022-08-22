export interface Item {
  id: number;
  service?: string;
  price?: number;
  currency?: string;
  nextPayment?: any;
  idx: number;
  categories?: Array<string>;
  completed?: boolean;
}

export class Item {

  constructor(
    public id: number,
    public idx: number,
    public service?: string,
    public price?: number,
    public currency?: string,
    public nextPayment?: any,
    public categories?: Array<string>,
    public completed?: boolean,
  ) {
  }

}
