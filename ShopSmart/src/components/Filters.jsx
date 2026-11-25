export default function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="filters-bar">
      <div className="filter-group">
        <label htmlFor="category-select">Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => {
            const val = typeof cat === 'object' ? cat.slug : cat;
            const label = typeof cat === 'object' ? cat.name : cat;
            return (
              <option key={val} value={val}>
                {label}
              </option>
            );
          })}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-select">Sort By:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="rating-asc">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
}