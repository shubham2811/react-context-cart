import { useCart } from "./shopContext";
import "./styles.css";
export const Shop = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddtoCart = (item) => {
    addToCart(item);
  };
  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
  };
  return (
    <div className="item" key={item.name}>
      <div className="item_name">Name:{item.name}</div>
      <div className="item_price">Price: {item.price}</div>
      <div className="item_btn" onClick={() => handleAddtoCart(item)}>
        Add to cart
      </div>
      <div className="item_btn" onClick={() => handleRemoveFromCart(item)}>
        Remove from cart
      </div>
    </div>
  );
};
