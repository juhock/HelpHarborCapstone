import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../client/components/layout/App.jsx';
import './index.css';
import CharityList from '../client/components/charities/CharityList.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../client/components/Homepage.jsx';
import { Provider } from 'react-redux';
import store from './store/index.js';
import CharityDetails from './components/charities/CharityDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      
      {
        path: '/charities',
        element: <CharityList/>
      },
      {
        path: '/charities/:id',
        element: <CharityDetails/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
