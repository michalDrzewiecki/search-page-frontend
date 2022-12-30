import { CategoryInterface } from '../interfaces';

export const getCategoryResourceName = (categories: CategoryInterface[], name: string): string => {
  const subcategories = categories.map(category => category.subcategories).flat();
  return [...categories, ...subcategories].find(resource => resource.name === name)?.displayName ?? '';
}
