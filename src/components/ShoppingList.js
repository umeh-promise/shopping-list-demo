import { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import ShoppingSelect from './ShoppingSelect';

function ShoppingList({ items, onDeleteItem, onClearItems, onToggleItem }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'purchased')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.purchased) - Number(b.purchased));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      {items.length > 0 && (
        <div style={{ display: 'flex' }}>
          <ShoppingSelect sortBy={sortBy} onSort={setSortBy} />
          <button style={{ borderRadius: '10rem' }} onClick={onClearItems}>
            Clear List
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
