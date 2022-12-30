import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductInterface } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { changeProductAmount } from '../../store/redux/actions/product';
import { ReduxFiltersDataInterface } from '../../store/redux/interfaces/redux-filters-data.interface';
import { useSelector } from '../../store/redux/useSelector';
import { transformFilterDataToQueryParams } from '../../utils';
import { Product } from '../product/product';
import './product-list.scss';

export const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const dispatch = useDispatch();

  const filterData = useSelector(state => state.filtersData);
  const categoryData = useSelector(state => state.categoryData)

  useEffect(() => {
    const queryParams = transformFilterDataToQueryParams(filterData, categoryData);
    const fetchProducts = async () => {
      const response = await new ProductService().fetchProducts(queryParams);
      setProducts(response.data);
      dispatch(changeProductAmount(response.count));
    }
    fetchProducts();
  }, [filterData, categoryData]);

  return <div className={'productList'}>
    {products.map(product => <Product key={product.id} product={product}/>)}
  </div>
}
