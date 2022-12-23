import { SortValuesEnum } from '../../enum';
import { SortOptionInterface } from './interfaces';

export const sortConfig: SortOptionInterface[] = [
  {
    name: 'Od najpopularniejszych',
    sortField: 'soldAmount',
    sortValue: SortValuesEnum.descending
  },
  {
    name: 'Cena: od najtańszych',
    sortField: 'price.current',
    sortValue: SortValuesEnum.ascending
  },
  {
    name: 'Cena: od najdroższych',
    sortField: 'price.current',
    sortValue: SortValuesEnum.descending
  }
];
