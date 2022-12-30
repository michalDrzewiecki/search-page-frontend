import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilteringKeyWordsEnum } from '../../enum';
import { CategoryService } from '../../services/category.service';
import { changeCategories } from '../../store/redux/actions/categories';
import { useSelector } from '../../store/redux/useSelector';
import { getQueryParam } from '../../utils';
import { CategoriesContainerPropsInterface } from './categories-container-props.interface';

export const CategoriesContainer = ({children}: CategoriesContainerPropsInterface) => {
  const [areCategoriesFetched, setAreCategoriesFetched] = useState<boolean>(false);
  const language = useSelector(state => state.languageConfig.language);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await new CategoryService().fetchCategories(getQueryParam(FilteringKeyWordsEnum.market, language));
      dispatch(changeCategories({
        categories: fetchedCategories
      }))
      setAreCategoriesFetched(true);
    };
    fetchCategories();
  }, [language]);

  return <>{areCategoriesFetched ? children : null}</>;
};
