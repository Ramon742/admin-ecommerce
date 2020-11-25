import api from '../../utils/api';

import {
    GET_PRODUCTS,
    PRODUCT_ERROR,
    DELETE_PRODUCT,
    ADD_PRODUCT,
    GET_PRODUCT,
    UPDATE_PRODUCT
  } from './product-types';

// Get posts
export const getProducts = () => async dispatch => {
  try {
    const res = await api.get('/items');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'Algo deu errado, tente novamente mais tarde!', status: '404' }
    });
  }
};


// Delete product
export const deleteProduct = (id) => async dispatch => {
  try {
    await api.delete(`/items/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'Não foi possível deletar no momento', status: '400' }
    });
  }
};

// Add post
export const addProduct = formData => async dispatch => {
  try {
    console.log('got here 1');
    const res = await api.post('/items', formData);
    console.log(res);
    console.log('got here 2');
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
    console.log('got here 3');

  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'Não foi possível adicionar o produto', status: '400' }
    });
  }
};

// get by category
export const getByCategory = value => async dispatch => {
  try {
    const formData = {
      category: value
    }

    const res = await api.post('/items/category', formData);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'Não foi possível adicionar o produto', status: '400' }
    });
  }
};

export const getProduct = id => async dispatch => {
  try {
    const res = await api.get(`/items/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'Nao foi possível retornar o produto', status: '401' }
    });
  }
};

export const editProduct = (formData, id) => async dispatch => {
  try {
    const res = await api.put(`/items/${id}`, formData);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'Nao foi possível retornar o produto', status: '401' }
    });
  }
};