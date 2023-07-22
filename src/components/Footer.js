function Footer({ items }) {
  if (!items.length) {
    return (
      <p className='stats'>
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  }

  const totalItems = items.length;
  const numPurchased = items.filter((item) => item.purchased).length;
  const percentage = Math.round((numPurchased / totalItems) * 100);

  return (
    <div className='stats'>
      {!(percentage === 100) ? (
        <em>
          💼 You have {totalItems} items added to your shopping list and <br />
          you bought {numPurchased} items on your shopping list ({percentage}%)
        </em>
      ) : (
        <em>You've bought everything in your list! Ready to go home 🏠</em>
      )}
    </div>
  );
}

export default Footer;
