import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { plantData } from '../components/plantData';
import './ProductListingPage.css';

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const grouped = {};
  plantData.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  return (
    <div>
      {Object.keys(grouped).map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="card-group-product">
            {grouped[cat].map(p => (
              <div key={p.id} className="cardProduct">
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>${p.price}</p>
                <button
                  onClick={() => dispatch(addToCart(p))}
                  disabled={cart[p.id]}
                >
                  {cart[p.id] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
