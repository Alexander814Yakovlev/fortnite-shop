import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartModal from "./components/CartModal";
import React, { useEffect, useState } from "react";

function App() {
  const [order, setOrder] = useState(
    localStorage.fortniteStore ? JSON.parse(localStorage.fortniteStore) : []
  );
  const [showCart, setShowCart] = useState(false);
  const [orderSum, setOrderSum] = useState(0);
  const [alertName, setAlertName] = useState("");

  function addOrder(item) {
    const itemIndex = order.findIndex((el) => el.mainId === item.mainId);
    if (itemIndex < 0) {
      setOrder([
        ...order,
        { ...item, quantity: 1, totalAmount: item.price.finalPrice },
      ]);
    } else {
      const newOrder = order.map((elem, index) => {
        if (index === itemIndex) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
            totalAmount: elem.price.finalPrice * (elem.quantity + 1),
          };
        } else {
          return elem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.title)
  }

  function increaseQuantity(item) {
    const itemIndex = order.findIndex((el) => el.mainId === item.mainId);
    const newOrder = order.map((elem, index) => {
      if (index === itemIndex) {
        return {
          ...elem,
          quantity: elem.quantity + 1,
          totalAmount: elem.price.finalPrice * (elem.quantity + 1),
        };
      } else {
        return elem;
      }
    });
    setOrder(newOrder);
  }

  function decreaseQuantity(item) {
    const itemIndex = order.findIndex((el) => el.mainId === item.mainId);
    const newOrder = order.map((elem, index) => {
      if (index === itemIndex && elem.quantity > 1) {
        return {
          ...elem,
          quantity: elem.quantity - 1,
          totalAmount: elem.price.finalPrice * (elem.quantity - 1),
        };
      } else {
        return elem;
      }
    });
    setOrder(newOrder);
  }

  function removeOrder(item) {
    setOrder(order.filter((elem) => elem.mainId !== item.mainId));
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

  function closeCart() {
    setShowCart(false)
  }

  function closeAlert() {
    setAlertName("");
  }

  useEffect(() => {
    localStorage.fortniteStore = JSON.stringify(order);
    if (order.length) {
      setOrderSum(order.map(el => el.totalAmount).reduce((x, y) => x + y));
    } else {
      setOrderSum(0)
    }
    
  }, [order]);

  
  return (
    <div className="App">
      <Header order={order} toggleCart={toggleCart} showCart={showCart} />
      {showCart ? (
        <CartModal
          order={order}
          removeOrder={removeOrder}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
          orderSum={orderSum}
          closeCart={closeCart}
        />
      ) : null}
      <Shop order={order} addOrder={addOrder} showCart={showCart} closeAlert={closeAlert} alertName={alertName}/>
      <Footer showCart={showCart} />
    </div>
  );
}

export default App;
