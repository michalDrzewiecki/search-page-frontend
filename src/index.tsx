import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AppRoutesEnum } from './enum';
import reportWebVitals from './reportWebVitals';
import { ErrorNotFoundRoute } from './routes/error-not-found/error-not-found-route';
import { ProductRoute } from './routes/product/product';
import { RootRoute } from './routes/root/root-route';
import { SearchRoute } from './routes/search/search-route';
import { createStore } from './store/redux/configureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute/>,
    errorElement: <ErrorNotFoundRoute/>,
    children: [
      {
        path: AppRoutesEnum.search,
        element: <SearchRoute/>
      },
      {
        path: `${AppRoutesEnum.product}/:id`,
        element: <ProductRoute/>
      }
    ]
  },
]);

const reduxStore = createStore();

root.render(
  // <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
