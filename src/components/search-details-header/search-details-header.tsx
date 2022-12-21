import './search-details-header.scss';
import { GridSelector } from './components/grid-selector/grid-selector';
import { PageSelector } from './components/page-selector/page-selector';
import { SortSelector } from './components/sort-selector/sort-selector';

export const SearchDetailsHeader = () => {
  return <div className={'searchDetailsContainer'}>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'searchDetailsHeader'}>
      <GridSelector/>
      <div className={'detailsContainer'}>
        <SortSelector/>
        <PageSelector/>
      </div>
    </div>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
  </div>
}
