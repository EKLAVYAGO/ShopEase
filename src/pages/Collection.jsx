import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";

const CATEGORIES = ["all", "clothing", "electronics", "footwear", "accessories"];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial values from the URL query string (so the navbar search works)
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [sortOrder, setSortOrder] = useState("default");

  // When URL params change (e.g. user clicks a category link from Home), update state
  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
    setSelectedCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  // Filter then sort
  let filtered = products.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (sortOrder === "low-high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  function handleSearchChange(value) {
    setSearchTerm(value);
    // Keep URL in sync so the user can share/bookmark
    const params = {};
    if (value) params.search = value;
    if (selectedCategory !== "all") params.category = selectedCategory;
    setSearchParams(params);
  }

  function handleCategoryChange(e) {
    const cat = e.target.value;
    setSelectedCategory(cat);
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (cat !== "all") params.category = cat;
    setSearchParams(params);
  }

  return (
    <div className="collection-page">
      <div className="container">
        <div className="collection-header">
          <h1 className="page-title">Our Collection</h1>
          <p className="page-subtitle">
            Browse {products.length} products across {CATEGORIES.length - 1} categories
          </p>
        </div>

        {/* Toolbar: search + category + sort */}
        <div className="collection-toolbar">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />

          <select
            className="toolbar-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <select
            className="toolbar-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <p className="results-count">{filtered.length} product(s) found</p>

        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
