import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { languageReducer } from './reducers/language';

const rootReducer = combineReducers({
  languageConfig: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });
