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

  const filteredCards = cardData.filter(card => (card.set === "otj" && card.collector_number <= 272) || card.set === "otp" || card.set === "big");
  
  // Sort alphabetically by card name
  filteredCards.sort((a, b) => a.name.localeCompare(b.name));

  // Use this handleBackendSend to upload a large swath of card data to the database
  const handleBackendSend = async () => {
    try {
      const promises = filteredCards.map(card => {
        const cardPayload = {
          name: card.name,
          rarity: card.rarity,
          cardNumber: card.collector_number,
          imageUri: card.image_uris.normal
        };

        return axios.post('http://localhost:8080/api/cards', cardPayload);
      });

      const responses = await Promise.all(promises);
      responses.forEach(response => {
        console.log('Response:', response.data);
      });
    } catch (error) {
      console.error('There was an error making the POST requests!', error);
    } 
  };

  return (
    <div className="card-container">
      <Button onClick={handleBackendSend}>Upload All Cards</Button>
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
              <Button variant="contained" size="small" className="card-button">Add Card</Button>
              <Button variant="outlined" size="small" className="card-button">Remove Card</Button>
            </Stack>
          </Stack>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
