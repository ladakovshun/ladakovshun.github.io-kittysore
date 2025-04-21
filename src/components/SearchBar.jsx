import React, { useState } from "react";
import { InputBase, IconButton } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/CategoriesPage.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", borderRadius: 4, padding: "0 8px", width: "300px" }}>
      <InputBase
        placeholder="Пошук за назвою або категорією…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ flex: 1 }}
      />
      <IconButton onClick={handleSearch} style={{ color: "#e91e63" }}>
        <FaSearch />
      </IconButton>
    </div>
  );
};

export default SearchBar;
