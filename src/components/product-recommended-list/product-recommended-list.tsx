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
  const filtersData = useSelector(state => state.filtersData);

  useEffect(() => {
    const {selectedCategory} = filtersData;
    if (!selectedCategory) {
      setRecommendedProducts([]);
      return;
    }
    const fetchRecommendedProducts = async () => {
      const fetchedProducts = await new ProductService()
        .fetchRecommendedProducts(`${FilteringKeyWordsEnum.category}=${selectedCategory}`);
      setRecommendedProducts(fetchedProducts);
    };
    fetchRecommendedProducts();
  }, [filtersData.selectedCategory]);

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
