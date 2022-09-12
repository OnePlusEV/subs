import {Category} from "./category";

export interface Item {
  id: number;
  service: string;
  price: number;
  idx: number;
  nextPayment: string;
  currency?: string;
  categories?: Category[];
  fullCategories?: Category[];
  completed?: boolean;
}

export class Item {

  constructor(
    public id: number,
    public service: string,
    public price: number,
    public idx: number,
    public nextPayment: string,
    public currency?: string,
    public categories?: Category[],
    public fullCategories?: Category[],
    public completed?: boolean,
  ) {
    this.idx = 1;
  }

}
