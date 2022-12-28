import { SortOptionInterface } from '../../../../../../config/sort/interfaces';

export interface SortSelectPropsInterface {
  onValueChange: (value: string) => void;
  options: SortOptionInterface[];
}
