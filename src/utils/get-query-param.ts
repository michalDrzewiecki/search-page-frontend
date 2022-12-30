import { FilteringKeyWordsEnum } from '../enum';

export const getQueryParam = (param: FilteringKeyWordsEnum, value: string): string => value ? `${param}=${value}&` : '';
