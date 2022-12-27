import './search-details-header.scss';
import { sortConfig } from '../../config/sort/sort-config';
import { GridSelector } from './components/grid-selector/grid-selector';
import { PageSelector } from '../page-selector/page-selector';
import { SortSelector } from './components/sort-selector/sort-selector';

export const SearchDetailsHeader = () => {
  return <div className={'searchDetailsContainer'}>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'searchDetailsHeader'}>
      <div>
        {/*<GridSelector/>*/}
      </div>
      <div className={'detailsContainer'}>
        <SortSelector sortConfig={sortConfig}/>
        <PageSelector/>
      </div>
    </div>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
  </div>
}
