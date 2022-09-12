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

