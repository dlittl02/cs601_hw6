import React from "react";
import InventoryItem from "./InventoryItem";
import "./InventoryList.css";

const InventoryList = ({ items }) => {
  return (
    <div className="inventory-list">
      {items.map((item) => (
        <InventoryItem
          key={item.sku} 
          sku={item.sku}
          name={item.name}
          qty={item.qty}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default InventoryList;
