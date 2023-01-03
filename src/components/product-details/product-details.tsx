import { Presentation } from './components/presentation/presentation';
import { Specification } from './components/specification/specification';
import { ProductDetailsPropsInterface } from './product-details-props.interface';
import './product-details.scss';

export const ProductDetails = ({product: {imgUrl, ...restParams}}: ProductDetailsPropsInterface) => {

  return <div className={'productDetailsContainer'}>
    <div/>
    <div className={'productDataContainer'}>
      <Presentation imgUrl={imgUrl}/>
      <div/>
      <Specification product={restParams}/>
    </div>
    <div/>
  </div>
}
