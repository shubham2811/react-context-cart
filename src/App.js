import "./styles.css";
import { Shop } from "./shop";
import { useCart } from "./shopContext";
const inventory = [
  {
    id: 1,
    name: "mouse",
    price: 100,
  },
  {
    id: 2,
    name: "keyboard",
    price: 300,
  },
  {
    id: 3,
    name: "monitor",
    price: 800,
  },
];
export default function App() {
  const { total, cartItems } = useCart();
  return (
    <>
      <div className="items">
        {inventory.map((item) => {
          return <Shop item={item} key={item.id} />;
        })}
      </div>
      Total:{total}
      Cart Items:
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            Name:{item.name},Qty:{item.qty}
          </div>
        );
      })}
    </>
  );
}
