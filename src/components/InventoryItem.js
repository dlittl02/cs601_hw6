import React from "react";
import { Link } from "react-router-dom";
import "./InventoryItem.css";

const InventoryItem = ({ sku, name, qty, price, description, image }) => {
  return (
    <div className="inventory-item">
      <Link to={`/item/${sku}`} className="item-link">
        <h3 className="item-name">{name}</h3>
      </Link>
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p><strong>Description:</strong> {description}</p>
      <img src={image} alt={name} className="item-image" />
    </div>
  );
};

export default InventoryItem;
