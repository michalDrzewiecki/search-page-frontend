import { CategoryInterface } from '../../../interfaces';

interface ResourceDataInterface {
  displayName: string;
  name: string;
}

export interface ReduxSelectedCategoriesInterface {
  selectedCategory: ResourceDataInterface;
  selectedSubcategory: ResourceDataInterface;
}

export interface ReduxCategoriesInterface {
  categories: CategoryInterface[];
}

export interface ReduxCategoriesDataInterface extends ReduxSelectedCategoriesInterface, ReduxCategoriesInterface {
}
