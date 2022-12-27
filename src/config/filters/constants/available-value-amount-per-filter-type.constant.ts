import { FilterElementTypeEnum } from '../../../enum/filter-element-type.enum';

export const availableValueAmountPerFilterTypeConstant: Record<FilterElementTypeEnum,number> = {
  [FilterElementTypeEnum.select]: 1,
  [FilterElementTypeEnum.checkbox]: -1,
  [FilterElementTypeEnum.radio]: 1,
  [FilterElementTypeEnum.range]: 2
}
