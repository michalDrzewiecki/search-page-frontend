interface ResourceDataInterface {
  displayName: string;
  name: string;
}

export interface ReduxCategoriesInterface {
  selectedCategory: ResourceDataInterface;
  selectedSubcategory: ResourceDataInterface;
}
