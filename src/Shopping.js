import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./cartSlice";

function ShoppingProduct(props) {
  const dispatch = useDispatch();
  let product = props.product;
  const handleAdd = () => {
    dispatch(addProduct({ name: product.name, qty: 1, price: product.price }));
  };
  return (
    <div className="product">
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price}</div>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  );
}

function ShoppingList(props) {
  const shoppingList = [
    {
      name: "Product 1",
      price: 34.99
    },

    { name: "Product 2", price: 66.99 }
  ];
  return (
    <div className="product-list">
      {shoppingList.map((item, index) => {
        return <ShoppingProduct product={item} />;
      })}
    </div>
  );
}

export { ShoppingList, ShoppingProduct };
