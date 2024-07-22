import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './CardDisplay.css';

const CardDisplay = () => {
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



  const filteredCards = cardData.filter(card => card.set === "otj");

  return (
    <div className="card-container">
      {filteredCards.map(card => (
        <div key={card.id} className="card">
          <Stack
            spacing={2}
            direction="column"
            alignItems="center"
            className="card-stack"
          >
            <img src={card.image_uris.normal} alt={card.name} className="card-image"/>
            <p className="card-name">{card.name}</p>
            <p className="amount-needed">Amount Needed: 5</p>
            <Stack
              direction="row"
              spacing={2}
              className="button-stack"
            >
              <Button variant="contained" size="small" className="card-button">Add to Cube</Button>
              <Button variant="outlined" size="small" className="card-button">Remove From Cube</Button>
            </Stack>
          </Stack>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
