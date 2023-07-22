function ShoppingItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className=''>
      <input
        type='checkbox'
        value={item.purchased}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={{
          textTransform: 'capitalize',
          textDecoration: item.purchased && 'line-through',
        }}
      >
        Buy {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default ShoppingItem;
