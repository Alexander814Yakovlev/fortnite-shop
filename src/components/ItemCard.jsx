import "./ItemCard.css";
import vBuks from "../img/vBuks.png";

function ItemCard(props) {
  const {
    title,
    image,
    description,
    price,
    addOrder,
  } = props;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() => {
              addOrder(props);
            }}
          >
            {price ? "Купить" : "Получить"}
          </button>
          <div className="right price">
            {price.finalPrice}
            <img className="v-bucks" src={vBuks} alt="V" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
