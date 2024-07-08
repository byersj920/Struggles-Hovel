import React, { useState, useEffect } from 'react';

const CardTesting = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    import('../card-list.json')
      .then(data => {
        setCardData(data.default);
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  }, []);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  let cardCount = 0;
  function countCards () {
    cardCount++;
    return cardCount;
  }

  const filteredCards = cardData.filter(card => card.set === "otj");

  return (
    <div>
      {filteredCards.map(card => (
        <div key={card.id}>
          <h3>{String(countCards())} {card.name}</h3>
          <img src={card.image_uris.small} alt={card.name}></img>
        </div>
      ))}
    </div>
  );
};

export default CardTesting;
