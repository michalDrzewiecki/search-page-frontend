import { FilterElementTypeEnum } from '../../../enum/filter-element-type.enum';

export interface FilterElementInterface {
  type: FilterElementTypeEnum;
  title: string;
  filterElementName: string;
  details?: string;
  isHidden: boolean;
}
