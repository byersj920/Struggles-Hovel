fetch('http://localhost:8080/https://api2.moxfield.com/v3/decks/all/lUbVQLCaMk2I8lsCi9pzLw')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
