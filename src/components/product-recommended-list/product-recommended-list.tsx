import { useEffect, useState } from 'react';
import { FilteringKeyWordsEnum } from '../../enum';
import { ProductInterface } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { useSelector } from '../../store/redux/useSelector';
import { RecommendedList } from './components/recommended-list/recommended-list';
import { TitleHeader } from './components/title-header/title-header';
import './product-recommended-list.scss';

export const ProductRecommendedList = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductInterface[]>([]);
  const categoryData = useSelector(state => state.categoryData);

  useEffect(() => {
    const {selectedCategory: {name}} = categoryData;
    if (!name) {
      setRecommendedProducts([]);
      return;
    }
    const fetchRecommendedProducts = async () => {
      const fetchedProducts = await new ProductService()
        .fetchRecommendedProducts(`${FilteringKeyWordsEnum.category}=${name}`);
      setRecommendedProducts(fetchedProducts);
    };
    fetchRecommendedProducts();
  }, [categoryData.selectedCategory.name]);

  return <div>
    {
      recommendedProducts.length ?
        <div className={'productRecommendedList'}>
          <TitleHeader/>
          <RecommendedList products={recommendedProducts}/>
        </div> :
        null
    }
  </div>

}
