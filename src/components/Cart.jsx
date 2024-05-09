function Cart(props) {
    const {quantity = 0, toggleCart} = props
    return (
        <div className="cart" onClick={toggleCart}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart__quantity">{quantity}</span> : null
            }
        </div>
    )
}

export default Cart