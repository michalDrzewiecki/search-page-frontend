import { SortOptionInterface } from './interfaces';

export const sortConfig: SortOptionInterface[] = [
  {
    name: 'Od najpopularniejszych',
    sortField: 'soldAmount',
    sortValue: -1
  },
  {
    name: 'Cena: od najtańszych',
    sortField: 'price',
    sortValue: 1
  },
  {
    name: 'Cena: od najdroższych',
    sortField: 'price',
    sortValue: -1
  }
];
