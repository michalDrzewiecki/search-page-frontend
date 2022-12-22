import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './reducers/filters';
import { languageReducer } from './reducers/language';
import { productReducer } from './reducers/product';

const rootReducer = combineReducers({
  languageConfig: languageReducer,
  productData: productReducer,
  filtersData: filtersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });
