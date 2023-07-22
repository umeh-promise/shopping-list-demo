function ShoppingSelect({ sortBy, onSort }) {
  return (
    <select value={sortBy} onChange={(e) => onSort(e.target.value)}>
      <option value='input'>Sort by input order </option>
      <option value='description'>Sort by description </option>
      <option value='purchased'>Sort by purchased </option>
    </select>
  );
}

export default ShoppingSelect;
