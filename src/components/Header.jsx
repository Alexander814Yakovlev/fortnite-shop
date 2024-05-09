import logo from "../img/Fortnite_logo.png";
import Cart from "./Cart";

function Header(props) {
  const {order=[], toggleCart} = props 
  return (
    <nav className="main__color-theme fixed-nav">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img src={logo} alt="F" className="logo" />
          <div className="title">Магазин Fortnite</div>
        </a>
        <ul className="right">
          <li>
            <Cart quantity={order.length} toggleCart={toggleCart}/>
          </li>
          <li>
            <a href="https://github.com/Alexander814Yakovlev/fortnite-shop" target="blank_">
              <i className="material-icons">code</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
