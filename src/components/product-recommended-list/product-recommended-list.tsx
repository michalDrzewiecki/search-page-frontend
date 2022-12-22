import { useEffect, useState } from 'react';
import { ProductInterface } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { RecommendedList } from './components/recommended-list/recommended-list';
import { TitleHeader } from './components/title-header/title-header';
import './product-recommended-list.scss';

export const ProductRecommendedList = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      const fetchedProducts = await new ProductService().fetchRecommendedProducts();
      setRecommendedProducts(fetchedProducts);
    };
    fetchRecommendedProducts();
  }, []);

  return <div className={'productRecommendedList'}>
    <TitleHeader/>
    <RecommendedList products={recommendedProducts}/>
  </div>
}
