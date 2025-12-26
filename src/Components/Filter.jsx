import React from "react";
import { useGlobalContext } from "../Services/api";
import "./Filter.css";
import filter from "../assets/filter.png";

const Filter = () => {
  const { type, setType, setPage } = useGlobalContext();

  const handleFilterChange = (e) => {
    setType(e.target.value);
    setPage(1);
  };

  return (
    <div className="filter-container">
      <img src={filter} alt="filter" className="filter-icon" />

      <select value={type} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
};

export default Filter;
