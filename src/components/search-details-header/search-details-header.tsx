import { useSelector } from '../../store/redux/useSelector';
import { PageSelector } from '../page-selector/page-selector';
import { SortSelector } from './components/sort-selector/sort-selector';
import './search-details-header.scss';

export const SearchDetailsHeader = () => {
  const sortOptions = useSelector(state => state.availableFiltersData.availableSortOptions);

  return <div className={'searchDetailsContainer'}>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'searchDetailsHeader'}>
      <div>
        {/*<GridSelector/>*/}
      </div>
      <div className={'detailsSearchContainer'}>
        <SortSelector sortConfig={sortOptions}/>
        <PageSelector/>
      </div>
    </div>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
  </div>
}
