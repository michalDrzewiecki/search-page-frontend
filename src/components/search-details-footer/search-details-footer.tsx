import { PageSelector } from '../page-selector/page-selector';
import './search-details-footer.scss';

export const SearchDetailsFooter = () => {
  return <div className={'searchDetailsFooterContainer'}>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'searchDetailsFooter'}>
      <PageSelector/>
    </div>
  </div>
}
