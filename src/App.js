import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InventoryList from "./components/InventoryList";
import ItemDetail from "./components/ItemDetail";
import inventoryData from "./data/inventory.json";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(inventoryData.map((item) => item.category))];

  const filteredItems = inventoryData.filter((item) => {
    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="inventory-heading">Inventory</h2>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                <InventoryList items={filteredItems} />
              </>
            }
          />
          <Route path="/item/:sku" element={<ItemDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
