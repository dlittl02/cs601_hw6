import React from "react";
import { useParams, Link } from "react-router-dom";
import inventoryData from "../data/inventory.json";
import ProductDetail from "./ProductDetail";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { sku } = useParams(); 
  const item = inventoryData.find((item) => item.sku === sku); 

  if (!item) {
    return (
      <div className="item-detail">
        <h2>Item Not Found</h2>
        <Link to="/">Back to Inventory</Link>
      </div>
    );
  }

  return (
    <ProductDetail
      sku={item.sku}
      name={item.name}
      qty={item.qty}
      price={item.price}
      category={item.category}
      description={item.description}
      image={item.image}
    />
  );
};

export default ItemDetail;
