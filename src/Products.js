import { useState } from "react";
import { additProduct, deleteProduct } from "./productSlice";
export function Products(props) {
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  return (
    <div className="products-page">
      <div className="editor">
        <div className="product-editor-inside">
          <div className="product-editor-really-inside">
            Description of goods:{" "}
          </div>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <div className="product-editor-inside">
          <div className="product-editor-really-inside">Price: </div>
          <input
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
        </div>
        <button className="action-button" onClick={additProduct}>
          Save
        </button>
      </div>
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
            <button
              className="action-button"
              onClick={deleteProduct}
              name={"product1"}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
