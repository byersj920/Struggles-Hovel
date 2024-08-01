import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './CardDisplay.css';
import axios from 'axios';

const CardDisplay = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    import('./card-list.json')
      .then(data => {
        setCardData(data.default);
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  }, []);

  if (!cardData) {
    return <div>Building the best cube ever...one second please!</div>;
  }

  const filteredCards = cardData.filter(card => card.set === "otj");
  filteredCards.sort((a, b) => a.collector_number - b.collector_number);

  const handleBackendSend = async () => {
    const cardTest = {
      name: "Canyon Crab",
      rarity: "common",
      cardNumber: 27,
      usernames: "Struggles"
    };

    try {
      const response = await axios.post('http://localhost:8080/api/cards', cardTest);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('There was an error making the POST request!', error);
    }
  };

  return (
    <div className="card-container">
      <Button onClick={handleBackendSend}>Click Me!</Button>
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
