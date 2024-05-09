import ItemCard from "./ItemCard";

function ItemsList(props) {
  const { items, addOrder } = props;
  if (!items.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="items">
      {items.map((item, id) => (
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
