import React, {useContext, useState} from 'react';
import {userContext} from '../context';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const names = [
  { label: 'Jili Jiang'},
  { label: 'Anthony Duong'},
  { label: 'Dakota Berry' },
  { label: 'Kyle Butler' },
  { label: 'Really Fungii' },
  { label: 'Frank Wang' },
  { label: 'Alex Yoshi' },
  { label: 'Lucas' },
  { label: 'IntocableBrr' },
  { label: 'Christopher' },
];

export default function Lesson2() {

    const {value} = useContext(userContext);
    const [name, setName] = useState('')

  return (
    <div style={{color: value}}>
    <h2 style={{color: value}}>Lesson2</h2>
    <h4 style={{color: value}} >Using REACT Material-UI library's autocomplete component</h4>
    
    <Autocomplete className="input"
      disablePortal 
      id="combo-box-demo" 
      options={names}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="name" />}
      onInputChange = {e => setName(e.currentTarget.innerHTML)} 
      disableClearable={true}
    />
     

    <h4 style={{color: value}}>Hello, my name is</h4>
    <h2 style={{color: value}}>{name}</h2>

    </div>
  )
}
