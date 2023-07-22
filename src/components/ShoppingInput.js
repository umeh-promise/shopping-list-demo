import { useState } from 'react';

function ShoppingInput({ onAddItem }) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { id: crypto.randomUUID(), description, purchased: false };

    onAddItem(newItem);
    setDescription('');
  }

  return (
    <div className='add-form'>
      <h3>Items to buy</h3>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add new items...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ShoppingInput;
