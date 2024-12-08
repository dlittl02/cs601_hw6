import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ sku, name, qty, price, category, description, image }) => {
  return (
    <div className="product-detail">
      <Link to="/" className="back-link">Back to Home</Link>
      <h2>{name}</h2>
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p><strong>Category:</strong> {category || "Uncategorized"}</p>
      <p><strong>Description:</strong> {description}</p>
      <img src={image} alt={name} className="product-image" />
    </div>
  );
};

export default ProductDetail;
