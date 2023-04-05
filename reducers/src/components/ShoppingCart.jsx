import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { ProductItem } from "./ProductItem";

import "../style.css";
import { CartItem } from "./CartItem";
import { types } from "../actions/shoppingAction";

export const ShoppingCart = () => {
  //no haremos uso del parametro numero 3
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { productos, cart } = state;

  const addToCart = (id) => {
    console.log(id);

    dispatch({ type: types.add_to_cart, payload: id });
  };
  const deleteFromCart = (id,all=false) => {
    if(all){
        dispatch({type:types.remove_all_from_cart,payload:id})
    }else{
        dispatch({type:types.remove_one_from_cart,payload:id})
    }
  };
  const clearCart = () => {
    dispatch({type:types.clear_cart})
  };

  return (
    <div className="cont_arts">
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {productos.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box grid-responsive">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
        <button onClick={clearCart}>Limpiar Carrito</button>
      </article>
    </div>
  );
};
