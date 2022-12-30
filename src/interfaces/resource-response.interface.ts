export interface ResourceResponseInterface<T> {
  data: T[];
  count: number;
  detectedCategory?: string;
  detectedSubcategory?: string;
}
