import vBuks from "../img/vBuks.png";
import { ShopContext } from "../context";
import React, { useContext } from "react";

function CartModal() {
  const {
    order,
    removeOrder,
    increaseQuantity,
    decreaseQuantity,
    closeCart,
    showCart,
  } = useContext(ShopContext);

  return (
    <div>
      {showCart ? (
        <div className="cart__modal">
          <h6 className="cart__modal_header">
            Корзина
            <span className="right close-btn">
              <i className="material-icons" onClick={closeCart}>
                close
              </i>
            </span>
          </h6>
          {order.length ? (
            <div>
              <ul>
                {order.map((item, id) => (
                  <li key={id} className="cart__item">
                    <div>{item.title}</div>
                    <div>
                      <button
                        className="quantity-btn"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart__price">
                      <span>{item.totalAmount}</span>
                      <img className="v-bucks" src={vBuks} alt="V" />
                    </div>
                    <button
                      className="remove__order"
                      onClick={() => removeOrder(item)}
                    >
                      <i className="material-icons">delete_forever</i>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart__bottom">
                <button className="btn btn-small left order">
                  Оформить заказ
                </button>
                <div className="right price total">
                  Общая стоимость: {order.reduce((acc, sum) => acc + sum.totalAmount, 0)}
                  <img className="v-bucks" src={vBuks} alt="V" />
                </div>
              </div>
            </div>
          ) : (
            <h3 className="empty-basket">Корзина пуста!</h3>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default CartModal;
