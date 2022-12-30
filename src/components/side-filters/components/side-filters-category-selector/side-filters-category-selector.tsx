import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TranslationComponentNameEnum } from '../../../../enum';
import { CategoryInterface, FiltersTranslationData } from '../../../../interfaces';
import { changeSelectedCategories, clearAllSelectedCategories } from '../../../../store/redux/actions/categories';
import { useSelector } from '../../../../store/redux/useSelector';
import { getTranslation } from '../../../../utils';
import { CategoryTitle } from './components/category-title/category-title';
import './side-filters-category-selector.scss';

export const SideFiltersCategorySelector = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const language = useSelector(state => state.languageConfig.language);
  const productAmount = useSelector(state => state.productData.productAmount);
  const categoryData = useSelector(state => state.categoryData);
  const translations = getTranslation(language, TranslationComponentNameEnum.filters) as FiltersTranslationData;
  const dispatch = useDispatch();

  useEffect(() => {
    setCategories(categoryData.categories);
  }, categoryData.categories)

  useEffect(() => {
    if (selectedCategory !== categoryData.selectedCategory.name) {
      setSelectedCategory(categoryData.selectedCategory.name);
    }
    if (selectedSubcategory !== categoryData.selectedSubcategory.name) {
      setSelectedSubcategory(categoryData.selectedSubcategory.name);
    }
  }, [categoryData.selectedCategory.name, categoryData.selectedSubcategory.name])

  const isAllCategoriesActive = (): boolean => !selectedCategory && !selectedSubcategory;
  const isCategoryActive = (name: string): boolean => name === selectedCategory;
  const isSubcategoryActive = (name: string): boolean => name === selectedSubcategory;

  const handleCategoryClick = (displayName: string): void => {
    const foundCategory = categories.find(category => category.displayName === displayName);
    setSelectedCategory(foundCategory?.name || '');
    setSelectedSubcategory('');
    dispatch(changeSelectedCategories({
      selectedCategory: {
        displayName: foundCategory?.displayName || '',
        name: foundCategory?.name || ''
      },
      selectedSubcategory: {
        displayName: '',
        name: ''
      }
    }));
  }

  const handleSubcategoryClick = (displayName: string): void => {
    const foundCategory = categories.find(category => category.subcategories.some(subcategory => subcategory.displayName === displayName));
    if (!foundCategory) {
      setSelectedCategory('');
      setSelectedSubcategory('');
      return;
    }
    const foundSubcategory = foundCategory.subcategories.find(subcategory => subcategory.displayName === displayName);
    setSelectedCategory(foundCategory.name);
    setSelectedSubcategory(foundSubcategory?.name || '')
    dispatch(changeSelectedCategories({
      selectedCategory: {
        displayName: foundCategory.displayName,
        name: foundCategory.name
      },
      selectedSubcategory: {
        displayName: foundSubcategory?.displayName || '',
        name: foundSubcategory?.name || ''
      }
    }));
  }

  const handleAllCategoryClick = (): void => {
    setSelectedSubcategory('');
    setSelectedCategory('');
    dispatch(clearAllSelectedCategories());
  }

  return <div className={'sideFiltersCategorySelector'}>
    <div className={'categoryData'}>
      <CategoryTitle
        displayName={translations.selectAllCategories}
        count={productAmount}
        isActive={isAllCategoriesActive()}
        handleTitleClick={handleAllCategoryClick}
      />
    </div>
    {
      categories.map(category => <div key={category.name} className={'categoryData'}>
        <CategoryTitle
          displayName={category.displayName}
          count={category.count}
          isActive={isCategoryActive(category.name)}
          handleTitleClick={handleCategoryClick}
        />
        {
          category.subcategories.map(subcategory => <div key={subcategory.name} className={'subcategoryData'}>
            <CategoryTitle
              displayName={subcategory.displayName}
              count={subcategory.count}
              isActive={isSubcategoryActive(subcategory.name)}
              handleTitleClick={handleSubcategoryClick}
            />
          </div>)
        }
      </div>)
    }
  </div>
}
