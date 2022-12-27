import { FilterOperatorEnum } from '../../../enum';
import { FilterElementTypeEnum } from '../../../enum/filter-element-type.enum';

export const availableOperatorsPerFilterTypeConstant: Record<FilterElementTypeEnum, FilterOperatorEnum[]> = {
  [FilterElementTypeEnum.select]: [FilterOperatorEnum.eq],
  [FilterElementTypeEnum.checkbox]: [FilterOperatorEnum.eq],
  [FilterElementTypeEnum.radio]: [FilterOperatorEnum.eq],
  [FilterElementTypeEnum.range]: [FilterOperatorEnum.gt, FilterOperatorEnum.lt, FilterOperatorEnum.between]
}
