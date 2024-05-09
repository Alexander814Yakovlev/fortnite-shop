import { API_KEY, API_URL } from "../config";
import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import Preloader from "./Preloader";
import Alert from "./Alert";

function Shop(props) {
  const { order, addOrder, showCart, closeAlert, alertName } = props;
  const [shop, setShop] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function getItems() {
    const options = {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    };
    fetch(API_URL, options)
      .then((response) => response.json())
      .then((data) => {
        setShop(data.shop);
        setLoading(false);
      });
  }

  useEffect(() => getItems(), []);

  return (
    <main className={`container content ${showCart ? "overlay" : ""}`}>
      <div className="row">
        {!isLoading ? (
          <ItemsList
            items={shop}
            order={order}
            addOrder={addOrder}
            alertName={alertName}
            closeAlert={closeAlert}
          />
        ) : (
          <Preloader />
        )}
      </div>
      {alertName && <Alert title={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
