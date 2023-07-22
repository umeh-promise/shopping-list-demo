import { useState } from 'react';
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList';
import Header from './components/Header';
import Footer from './components/Footer';

const initialItems = [
  {
    id: 1,
    description: 'meat',
    purchased: false,
  },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  }

  function handleClearItems() {
    const confirm = window.confirm(
      'Are you sure you want to clear your shopping list'
    );
    if (confirm) setItems([]);
  }

  return (
    <div className='app'>
      <Header />
      <ShoppingInput onAddItem={handleAddItem} />
      <ShoppingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
        onToggleItem={handleToggleItem}
      />

      <Footer items={items} />
    </div>
  );
}

export default App;
