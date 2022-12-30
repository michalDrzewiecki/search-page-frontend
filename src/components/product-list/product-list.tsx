import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductInterface } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { changeSelectedCategories } from '../../store/redux/actions/categories';
import { changeProductAmount } from '../../store/redux/actions/product';
import { useSelector } from '../../store/redux/useSelector';
import { getCategoryResourceName, transformFilterDataToQueryParams } from '../../utils';
import { Product } from '../product/product';
import './product-list.scss';

export const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const detectedCategoryRef = useRef<string>('');
  const detectedSubcategoryRef = useRef<string>('');
  const filtersDataRef = useRef<string>('');
  const dispatch = useDispatch();

  const filterData = useSelector(state => state.filtersData);
  const categoryData = useSelector(state => state.categoryData);

  const handleDetectedCategoryData = (detectedCategory = '', detectedSubcategory = ''): void => {
    if (
      detectedCategory && detectedCategoryRef.current === detectedCategory ||
      detectedSubcategory && detectedSubcategory !== detectedSubcategoryRef.current
    ) {
      detectedSubcategoryRef.current = detectedSubcategory;
      detectedCategoryRef.current = detectedCategory;
      dispatch(changeSelectedCategories({
        selectedCategory: {
          name: detectedCategory,
          displayName: getCategoryResourceName(categoryData.categories, detectedCategory)
        },
        selectedSubcategory: {
          name: detectedSubcategory,
          displayName: getCategoryResourceName(categoryData.categories, detectedSubcategory)
        }
      }));
    } else {
      detectedCategoryRef.current = categoryData.selectedCategory.name
      detectedSubcategoryRef.current = categoryData.selectedSubcategory.name;
    }
  };

  useEffect(() => {
    if (
      detectedCategoryRef.current === categoryData.selectedCategory.name &&
      detectedSubcategoryRef.current === categoryData.selectedSubcategory.name &&
      JSON.stringify(filterData) === filtersDataRef.current
    ) {
      return;
    }
    const queryParams = transformFilterDataToQueryParams(filterData, categoryData);
    const fetchProducts = async () => {
      filtersDataRef.current = JSON.stringify(filterData);
      const response = await new ProductService().fetchProducts(queryParams);
      setProducts(response.data);
      dispatch(changeProductAmount(response.count));
      handleDetectedCategoryData(response.detectedCategory, response.detectedSubcategory);
    }
    fetchProducts();
  }, [filterData, categoryData.selectedCategory.name, categoryData.selectedSubcategory.name]);

  return <div className={'productList'}>
    {products.map(product => <Product key={product.id} product={product}/>)}
  </div>
}
