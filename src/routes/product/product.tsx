import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductDetails } from '../../components/product-details/product-details';
import { FilteringKeyWordsEnum } from '../../enum';
import { ProductToDisplayInterface } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { useSelector } from '../../store/redux/useSelector';
import { getQueryParam } from '../../utils';

export const ProductRoute = () => {
  const {id} = useParams();
  const [product, setProduct] = useState<ProductToDisplayInterface | null>(null);
  const language = useSelector(state => state.languageConfig.language);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      return;
    }
    const fetchProduct = async () => {
      const product = await new ProductService().fetchProduct(id, getQueryParam(FilteringKeyWordsEnum.market, language));
      setProduct(product);
    };
    fetchProduct();
  }, [id])

  return product ? <ProductDetails product={product}/> : null;
};
