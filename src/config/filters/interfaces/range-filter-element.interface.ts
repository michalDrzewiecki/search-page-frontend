import { FilterElementInterface } from './filter-element.interface';

export interface RangeFilterElementInterface extends FilterElementInterface {
  firstUnit: string;
  secondUnit: string;
  firstText: string;
  secondText: string;
  validation: (input: string) => boolean;
}
