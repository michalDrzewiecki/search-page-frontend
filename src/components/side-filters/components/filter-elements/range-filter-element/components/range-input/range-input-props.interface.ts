import React from 'react';

export interface RangeInputPropsInterface {
  value: string;
  unit: string;
  isInvalidInput: boolean;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
