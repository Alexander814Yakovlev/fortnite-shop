import ItemCard from "./ItemCard";
import React, { useContext } from "react";
import { ShopContext } from "../context";

function ItemsList() {
  const { shop, addOrder } = useContext(ShopContext);
  if (!shop.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="items">
      {shop.map((item, id) => (
        <ItemCard
          key={id}
          title={item.displayName}
          image={item.displayAssets[0].full_background}
          description={item.displayDescription}
          price={item.price.regularPrice}
          addOrder={addOrder}
          {...item}
        />
      ))}
    </div>
  );
}

export default ItemsList;
