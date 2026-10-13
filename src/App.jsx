
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const App = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>
      <div >

        <p>To Do List</p>
        <br />
        <div className='flex  justify-center ite gap-10 bg-red-500'>


          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Age
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
              >
                <MenuItem >All</MenuItem>
                <MenuItem >Online</MenuItem>
                <MenuItem >Ofline</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button variant="outlined">
            + Add
          </Button>
        </div>

      </div>
    </div>
  );
};

export default App;
