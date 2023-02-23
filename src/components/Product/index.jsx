import { connect } from 'react-redux'
import Product from './product'
// import {
//   addCartItemAction,
//   deleteCartItemAction,
//   updateCartItemAction,
// } from '../../actions/cartActions'

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isLoading: loading.some(x => x.loadingId === product.id),
});

const mapDispatchToProps = dispatch => ({
  // addToCart: data => addCartItemAction(data)(dispatch),
  // updateCartItem: data => updateCartItemAction(data)(dispatch),
  // deleteCartItem: data => deleteCartItemAction(data)(dispatch),
  addToCart: data =>
  dispatch({
    type: 'ADD_CART_REQUEST',
    payload: {
      url: '660/cart',
      method: 'post',
      data,
    },
    meta: {
      loadingId: data.productId,
    },
  }),

  updateCartItem: data =>
    dispatch({
      type: 'UPDATE_CART_REQUEST',
      payload: {
        url: `660/cart/${data.id}`,
        method: 'put',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),

  deleteCartItem: data =>
    dispatch({
      type: 'DELETE_CART_REQUEST',
      payload: {
        url: `660/cart/${data.id}`,
        method: 'delete',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
