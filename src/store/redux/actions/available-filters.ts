import { createAction } from '@reduxjs/toolkit';
import { ReduxStoreActionNameEnum } from '../../../enum';
import { ReduxAvailableFiltersInterface } from '../interfaces';

export const changeAvailableFilters = createAction<ReduxAvailableFiltersInterface>(
  ReduxStoreActionNameEnum.availableFiltersChange
)

