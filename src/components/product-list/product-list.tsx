import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductInterface } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { changeProductAmount } from '../../store/redux/actions/product';
import { Product } from '../product/product';
import './product-list.scss';

export const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await new ProductService().fetchProducts();
      setProducts(response.data);
      dispatch(changeProductAmount(response.count));
    }
    fetchProducts();
  }, []);

  return <div className={'productList'}>
    {products.map(product => <Product key={product.id} product={product}/>)}
  </div>
}
