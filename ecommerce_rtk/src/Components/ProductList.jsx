import React from 'react';
import './ProductList.css'; 
import {useDispatch, useSelector} from "react-redux"
import {addItemToCart} from "./CartSlice"

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const dispatch = useDispatch()   //used to fetch a function from the store
  const cartItems = useSelector(state => state.cart.cartItems)  //fetching the state from the store
  const handleAddToCart = product => { //creating a function after fetching it from the store
    dispatch(addItemToCart(product))
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {
            products.map((product) => {
                const item = (
                    <li key = {product.id} className = "product-list-item">
                        <span>{product.name} - ${product.price}</span>
                        <button className = {`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled': ''}`}
                        onClick = {() => handleAddToCart(product)}
                        disabled = {cartItems.some(item => item.id === product.id)}
                        >
                            {cartItems.some(item => item.id === product.id) ? 'Added': 'Add To Cart'}
                        </button>
                    </li>
                )
                return item
            })
        }
     
      </ul>
    </div>
  );
};

export default ProductList;
