import './search-details-header.scss';
import { sortConfig } from '../../config/sort/sort-config';
import { useSelector } from '../../store/redux/useSelector';
import { GridSelector } from './components/grid-selector/grid-selector';
import { PageSelector } from '../page-selector/page-selector';
import { SortSelector } from './components/sort-selector/sort-selector';

export const SearchDetailsHeader = () => {
  const language = useSelector(state => state.languageConfig.language);

  return <div className={'searchDetailsContainer'}>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
    <div className={'searchDetailsHeader'}>
      <div>
        {/*<GridSelector/>*/}
      </div>
      <div className={'detailsSearchContainer'}>
        <SortSelector sortConfig={sortConfig(language)}/>
        <PageSelector/>
      </div>
    </div>
    <div className={'lineContainer'}>
      <hr className={'line'}/>
    </div>
  </div>
}
