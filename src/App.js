import "./styles.css";
import { ShoppingList } from "./Shopping.js";
import { Cart } from "./Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <div className="menus">
          <div className="menu-item">
            <NavLink to="/shopping">Shopping</NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/cart">Cart</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/shopping">
            <ShoppingList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Redirect to="/shopping" />
        </Switch>
      </div>
    </Router>
  );
}

function Banner(props) {
  const cartList = useSelector((state) => state.cart.cartList);
  let inCartItems = 0;
  for (let i = 0; i < cartList.length; i++) {
    inCartItems = inCartItems + cartList[i].qty;
  }
  return (
    <div className="banner">
      <h3 className="title">Jackazon Shopping Mall</h3>
      <div>
        <img className="cart-img" src="images/cart.png" alt="cart" />
      </div>
      <div>{inCartItems}</div>
    </div>
  );
}
