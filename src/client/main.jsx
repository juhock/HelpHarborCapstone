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
import NewCharity from './components/charities/NewCharity.jsx';

import LoginForm from './components/login/LoginForm.jsx';
import Register from './components/login/Register.jsx';
import AccountPage from './components/login/Account.jsx';

import CategoryTemplate from './components/categories/CategoryTemplate.jsx';
import AboutUs from './components/AboutUs.jsx';
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
        path: '/about',
        element: <AboutUs />
      },

      {
        path: '/charities',
        element: <CharityList />
      },
      {
        path: '/charities/:id',
        element: <CharityDetails />
      },
      {
        path: '/charities/create',
        element: <NewCharity />
      },
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/users/me',
        element: <AccountPage />
      },
      {
        path: 'categories/:category',
        element: <CategoryTemplate />
      }
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
