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

  const discordNamesArray = [
    "Captainspazam (Struggles)",
    "CombatWombat (Kyle)",
    "Cwwisch (Chad)",
    "Droopsnout (Grey)",
    "EtheriumSculptor (Jake)",
    "TheDragonsFang (Iris)",
    "Trax (Mateo)",
    "MrMaps (Corey)",
    "DLung7 (David)",
    "Dwarf (Jon)",
    "Strexco (EJ)",
    "Eldritch_Butts (Tyler)",
    "Jondre (Jack)",
    "KingSMH (Shawn)",
    "McDonaldsSprite (Hailey <3)",
    "Meggplant (Egg)",
    "Thesageknight (Nick)"
  ];

  discordNamesArray.sort((a, b) => a.localeCompare(b)); // Sort alphabetically

  return (
    <Box sx={{ minWidth: 800 }}>
      <FormControl sx={{ m: 1, minWidth: 300 }} >
        <InputLabel id="discord-name-select-label">Discord Name</InputLabel>
        <Select
          labelId="discord-name-select-label"
          id="discord-name-select"
          value={discordName}
          label="Discord Name"
          onChange={handleChange}
        >
          {discordNamesArray.map((name, index) => (
            <MenuItem key={index} value={name}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
