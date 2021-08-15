import { ShoppingList } from "./Shopping";
export function Products(props) {
  return (
    <div className="products-page">
      <div className="editor">Product</div>
      <div className="products">
        <div className="descriptions">
          <div className="item-name">Description of goods</div>
          <div className="item-price">Price($)</div>
          <div className="item-actions">Actions</div>
        </div>
        <div className="product-listv2">
          <div className="item-name">product1</div>
          <div className="item-price">$420.69</div>
          <div className="descriptions">
            <button className="action-button">Edit</button>
            <button className="action-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
