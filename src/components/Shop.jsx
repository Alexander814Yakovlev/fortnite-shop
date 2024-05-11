import { API_KEY, API_URL } from "../config";
import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import ItemsList from "./ItemsList";
import Preloader from "./Preloader";
import Alert from "./Alert";

function Shop() {
  const { order, showCart, alertName, setItems, isLoading } =
    useContext(ShopContext);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    };
    fetch(API_URL, options)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.shop);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.fortniteStore = JSON.stringify(order);
  }, [order]);

  return (
    <main className={`container content ${showCart ? "overlay" : ""}`}>
      <div className="row">{!isLoading ? <ItemsList /> : <Preloader />}</div>
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
