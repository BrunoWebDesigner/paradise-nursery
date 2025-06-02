import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const count = useSelector(state => state.cart.totalQuantity);

  return (
    <header>
      <Link to="/"><h1>🌿 Paradise Nursery</h1></Link>
      <p>Green your space with love</p>
      <Link to="/cart">🛒 ({count})</Link>
    </header>
  );
}
