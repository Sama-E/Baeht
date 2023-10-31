import React, { useRef, useState } from "react";
import HServiceCard from '../../components/Cards/HServiceCard';
import { hservices } from '../../data';
import { Grid, Box, Typography, Stack } from '@mui/material';
import CustomButton from '/src/components/Custom/CustomButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HServices = () => {

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <Box sx={{ flexGrow: 1}} >
      <Stack spacing={4} p={2}>
        <h1>Home Services</h1>
        <p>
          Explore the boundaries of home services
        </p>

        <Box sx={{ flexGrow: 1 }}>
          <Typography>Budget</Typography>
          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            maxWidth="80%"
            mb="40px"
          >
            <Grid item xs={12} sm={8} md={3} m={1}>
              <TextField id="standard-basic" label="Min" variant="standard" ref={minRef} type="number" />
            </Grid>
            <Grid item xs={12} sm={8} md={3} m={1}>
              <TextField id="standard-basic" label="Max" variant="standard" ref={maxRef} type="number" />
            </Grid>
            <Grid item xs={12} sm={8} md={3} m={1}>
              <CustomButton 
                onClick={apply}
                backgroundColor="#849EB9"
                color="#fff"
                buttonText="Apply"
              />
            </Grid>
          </Grid>

          <Box sx={{ maxWidth: 200 }} m={1}>
            
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort === "sales" ? "Best Selling" : "Newest"}
                label="Sort By"
                onChange={handleChange}
              >
                <MenuItem onClick={() => reSort("createdAt")}>Newest</MenuItem>
                <MenuItem onClick={() => reSort("sales")}>Best Selling</MenuItem>
                <MenuItem onClick={() => reSort("sales")}>Popular</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Stack>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {hservices.map(hservice => ( 
          <Grid item xs={12} sm={6} md={4} >    
            <HServiceCard item={hservice} key={hservice.id}/>
          </Grid>
          ))}
      </Grid>
    </Box>
  )
}

export default HServices;