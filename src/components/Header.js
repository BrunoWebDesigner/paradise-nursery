import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const count = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <Link to="/"><h1>🌿 Paradise Nursery</h1></Link>
      <p>Green your space with love</p>
      <Link to="/cart" className="cart-link">🛒 ({count})</Link>
    </header>
  );
}
