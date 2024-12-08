import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="Store Logo" className="store-logo" />
      <h1 className="store-name">Deasia's Local Grocery Store</h1>
    </header>
  );
};

export default Header;