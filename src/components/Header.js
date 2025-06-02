// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const count = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <Link to="/"><h1>🌿 Paradise Nursery</h1></Link>
      <p style={{ alignSelf: 'center' }}>Green your space with love</p>
      <Link to="/cart" style={{ alignSelf: 'center' }}>🛒 ({count})</Link>
    </header>
  );
}
