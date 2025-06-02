import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const totalCost = useSelector(state => state.cart.totalCost);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h2>Your Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      {Object.values(cart).map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}
