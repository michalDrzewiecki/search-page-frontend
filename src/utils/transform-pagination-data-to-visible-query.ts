import { FilteringKeyWordsEnum } from '../enum';
import { calculatePageBasedOnOffset } from './calculate-page-based-on-offset';

export const transformPaginationDataToVisibleQuery = (queryParams: string): string => {
  const parsedQueryParams = new URLSearchParams(queryParams);
  parsedQueryParams.delete(FilteringKeyWordsEnum.limit);
  const offsetValue = parsedQueryParams.get(FilteringKeyWordsEnum.offset);
  parsedQueryParams.delete(FilteringKeyWordsEnum.offset);
  if (offsetValue && +offsetValue > 1) {
    parsedQueryParams.append(FilteringKeyWordsEnum.page, calculatePageBasedOnOffset(+offsetValue).toString());
  }
  return parsedQueryParams.toString();
};
