import { FilterElementInterface } from './filter-element.interface';

export interface RangeFilterValidationInterface {
  minValue?: number;
  maxValue?: number;
  isInteger: boolean;
}

export interface RangeFilterElementInterface extends FilterElementInterface {
  firstUnit: string;
  secondUnit: string;
  firstText: string;
  secondText: string;
  validation: RangeFilterValidationInterface;
}
