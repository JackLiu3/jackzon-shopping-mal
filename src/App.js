import "./styles.css";
import { ShoppingProduct, ShoppingList } from "./Shopping.js";

export default function App() {
  return (
    <div className="App">
      <div className="banner">
        <h3 className="title">Jackazon Shopping Mall</h3>
        <div>
          <img className="cart-img" src="images/cart.png" alt="cart" />
        </div>
        <div>1</div>
      </div>
      <div className="menus">
        <div className="menu-item menu-item-active">shopping</div>
        <div className="menu-item">cart</div>
      </div>
      <ShoppingList />
    </div>
  );
}
