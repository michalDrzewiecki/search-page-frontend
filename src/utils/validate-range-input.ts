import { RangeFilterValidationInterface } from '../config/filters/interfaces';

export const validateRangeInput = (value: string, validation: RangeFilterValidationInterface): boolean => {
  const {maxValue, minValue, isInteger} = validation;
  if (!value || typeof value !== 'string') {
    return false;
  }
  const numericValue = +value;
  const isANumber = !isNaN(numericValue);
  if (!isANumber) {
    return false;
  }
  const fillIsIntegerRequirement = isInteger ? Number.isInteger(numericValue) : true;
  const fillMinValueRequirement = minValue?.toString() ? numericValue >= minValue : true;
  const fillMaxValueRequirement = maxValue?.toString() ? numericValue <= maxValue : true;
  return fillIsIntegerRequirement && fillMinValueRequirement && fillMaxValueRequirement;
};
