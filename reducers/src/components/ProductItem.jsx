import React from "react";

export const ProductItem = ({ data, addToCart }) => {
  let { id, name, precio } = data;
  return (
    <div className="productos">
      <h4>{name}</h4>
      <h5>{precio}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
