import React from "react";

const Cart = props => {
  const style = !props.CartInFood.isInCart
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" ,color: 'blue' };
  return (
    <i
      style={style}
      onClick={() => props.onClick(props.CartInFood)}
      className="fas fa-cart-plus"
    ></i>
  );
};

export default Cart;
