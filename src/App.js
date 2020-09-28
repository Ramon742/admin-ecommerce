import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import PrivateRoute from './PrivateRoute';

import HomePage from './pages/home/homepage.component';
import InserctProductPage from './pages/insert-product/insert-product.component';
import ListProductsPage from './pages/list-products/list-products.component';
import LoginPage from './pages/login/login.component';
import RegisterPage from './pages/register/register.component';
import EditProduct from './pages/edit-product/edit-product.component';

import store from './redux/store';
import { loadUser } from './redux/user/user-actions';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <div className='flex-container'>
      <Switch>
      <Route exact path='/' component={LoginPage} />
        <Route exact path='/registrar' component={RegisterPage} />
        <PrivateRoute exact path='/produtos' component={HomePage} />
        <PrivateRoute exact path='/cadastrar-produto' component={InserctProductPage} />
        <PrivateRoute exact path='/listar-produtos' component={ListProductsPage} />
        <PrivateRoute exact path='/editar/:id' component={EditProduct} />
      </Switch>
    </div>
  );
}

export default App;
