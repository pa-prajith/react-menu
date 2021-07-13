import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const allCategories = ["all", ...new Set(items.map((i) => i.category))];
  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const filteredValues = items.filter((item) => item.category === category);
    setMenuItems(filteredValues);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filteredItems={filteredItems} options={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
