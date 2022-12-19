import { CurrencyEnum } from '../../enum';
import { ProductInterface } from '../../interfaces';
import { RecommendedList } from './components/recommended-list/recommended-list';
import { TitleHeader } from './components/title-header/title-header';
import './product-recommended-list.scss';

const mockedProducts: ProductInterface[] = [
  {
    id: '1',
    imgUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_25_12_51_23_154_00.jpg',
    name: 'Gigabyte A5 R7-5800H/16GB/1TB/Win11 RTX3060 240Hz',
    prize: {
      currency: CurrencyEnum.pln,
      current: 5500,
      previous: 6000,
    }
  },
  {
    id: '2',
    imgUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_25_12_51_23_154_00.jpg',
    name: 'Dell 724 R7-5800H/16GB/1TB/Win11 RTX3060 240Hz',
    prize: {
      currency: CurrencyEnum.pln,
      current: 3999,
      previous: 4200,
    }
  },
  {
    id: '3',
    imgUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_25_12_51_23_154_00.jpg',
    name: 'Laptop Samsung R7-5800H/16GB/1TB/Win11 RTX3060 240Hz',
    prize: {
      currency: CurrencyEnum.pln,
      current: 2500,
      previous: 3999,
    }
  },
  {
    id: '4',
    imgUrl: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_25_12_51_23_154_00.jpg',
    name: 'Apple MacBook',
    prize: {
      currency: CurrencyEnum.pln,
      current: 9999,
      previous: 12499,
    }
  }
];

export const ProductRecommendedList = () => {
  return <div className={'productRecommendedList'}>
    <TitleHeader/>
    <RecommendedList products={mockedProducts}/>
  </div>
}
