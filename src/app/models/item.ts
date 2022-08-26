export interface Item {
  id: number;
  service: string;
  price: number;
  idx: number;
  nextPayment: any;
  currency?: string;
  categories?: Array<string>;
  completed?: boolean;
}

export class Item {

  constructor(
    public id: number,
    public service: string,
    public price: number,
    public idx: number,
    public nextPayment: any,
    public currency?: string,
    public categories?: Array<string>,
    public completed?: boolean,
  ) {
    this.idx = 1;
  }

}
