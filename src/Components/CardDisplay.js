import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './CardDisplay.css';
import axios from 'axios';
import DiscordNameSelector from './DiscordNameSelector';
import TextDisplay from './TextDisplay';

const CardDisplay = () => {
  const [cardData, setCardData] = useState(null);

  //This pulls the card data from the json file rather than the database. This can be used
  //when there are problems with the database.
/*   useEffect(() => {
    import('./card-list.json')
      .then(data => {
        setCardData(data.default);
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  }, []); */


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Starting data fetch...');
        const response = await axios.get('http://localhost:8080/api/cards');
        console.log('Fetched Data:', response.data);
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  if (!cardData) {return <div>Building the best cube ever...one second please!</div>;}
  
  cardData.sort((a, b) => a.name.localeCompare(b.name));

  // Use this handleBackendSend to upload a large swath of card data to the database
 /*  const handleBackendSend = async () => {
    console.log("Sending Card Data...");
    
    try {
      const data = await import('./card-list.json');
      const cardList = data.default;
      
      const filteredCardsPrime = cardList.filter(card => 
        (card.set === "otj" && card.collector_number <= 272) || 
        card.set === "otp" || 
        (card.set === "big" && card.collector_number <= 30)
      );
  
      const promises = filteredCardsPrime.map(card => {
        const cardPayload = {
          name: card.name,
          rarity: card.rarity,
          cardNumber: card.collector_number,
          colors: card.colors,
          manaValue: card.cmc,
          imageUri: card.image_uris.normal,
          setCode: card.set
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
  }; */
  //In addition, when using this code, you can upload it using this button:
  //<Button onClick={handleBackendSend}>Upload All Cards</Button>


  return (
    <div>
      <TextDisplay />
      <DiscordNameSelector />
       <div className="card-container">
      {cardData.map(card => (
        <div key={card.id} className="card">
          <Stack
            spacing={2}
            direction="column"
            alignItems="center"
            className="card-stack"
          >
            <img src={card.imageUri} alt={card.name} className="card-image"/>
            <p className="card-name">{card.name}</p>
            <p className="amount-needed">Amount Needed: {card.numberNeeded}</p>
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
    </div>
  );
};

export default CardDisplay;
