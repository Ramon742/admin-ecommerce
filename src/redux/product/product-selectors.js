// we use this to not prevent mapStateToProps beeing called when not necessery
import { createSelector } from 'reselect';


const selectCart = state => state.products;

//select and get the cartItems from state
export const selectProductItems = createSelector(
    [selectCart], //select the array of cart (state.cart)
    (cart) => cart.products //function which returns the cartItems from state.cart
);

//select and get the cartItems from state
export const selectProductItem = createSelector(
    [selectCart], //select the array of cart (state.cart)
    (cart) => cart.product //function which returns the cartItems from state.cart
);