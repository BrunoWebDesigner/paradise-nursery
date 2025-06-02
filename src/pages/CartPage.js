import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './CartPage.css';

export default function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const totalCost = useSelector(state => state.cart.totalCost) || 0;
  const totalQuantity = useSelector(state => state.cart.totalQuantity) || 0;
  const dispatch = useDispatch();

  // Check if cart is empty
  const isCartEmpty = totalQuantity === 0 || Object.keys(cart).length === 0;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {isCartEmpty ? (
        <p>Your cart is empty. <Link to="/products">Start shopping!</Link></p>
      ) : (
        <>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>

          <div className="cart-grid">
            {Object.values(cart).map(item => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity <= 1}  // Disable when quantity is 1 or less
                  >
                    -
                  </button>
                </div>
                <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>
                  Delete
                </button>
              </div>
            ))}

          </div>

          <button
            className="checkout-button"
            onClick={() => alert('Coming Soon')}
          >
            Checkout
          </button>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <button className="continue-button">Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}
