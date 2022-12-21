import { SortOptionInterface } from './interfaces';

export const sortConfig: SortOptionInterface[] = [
  {
    name: 'Od najpopularniejszych',
    sortField: 'popularity',
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
  },
  {
    name: 'Oceny: od najlepszych',
    sortField: 'rating',
    sortValue: -1
  }
];
