import { SortOptionInterface } from '../../../../../../config/sort/interfaces';

export interface DetailsHeaderSelectPropsInterface {
  onValueChange: (value: string) => void;
  options: SortOptionInterface[];
}
