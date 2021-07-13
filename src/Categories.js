import React from "react";

const Categories = ({ filteredItems, options }) => {
  const buttons = options.map((o, i) => (
    <button className="filter-btn" onClick={() => filteredItems(o)} key={i}>
      {o}
    </button>
  ));
  return <div className="btn-container">{buttons}</div>;
};

export default Categories;
