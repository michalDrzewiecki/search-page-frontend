import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './reducers/categories';
import { filtersReducer } from './reducers/filters';
import { languageReducer } from './reducers/language';
import { productReducer } from './reducers/product';

const rootReducer = combineReducers({
  languageConfig: languageReducer,
  productData: productReducer,
  filtersData: filtersReducer,
  categoryData: categoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });
