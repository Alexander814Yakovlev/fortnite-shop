import React, { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { order, toggleCart } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="cart" onClick={toggleCart}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
