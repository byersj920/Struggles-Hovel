import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DiscordNameSelector() {
  const [discordName, setDiscordName] = React.useState('');

  const handleChange = (event) => {
    setDiscordName(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 800 }}>
      <FormControl sx={{ m: 1, minWidth: 300 }} >
        <InputLabel id="discord-name-select-label">Discord Name</InputLabel>
        <Select
          labelId="discord-name-select-label"
          id="discord-name-select"
          value={discordName}
          label="DiscordName"
          onChange={handleChange}
        >
          <MenuItem value={10}>Captainspazam (Struggles)</MenuItem>
          <MenuItem value={20}>McDonaldsSprite (Hailey)</MenuItem>
          <MenuItem value={30}>Freakbro5 (Christan)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}