import React, { useRef, useState } from "react";
import HServiceCard from '../../components/Cards/HServiceCard';
import { hservices } from '../../data';
import { Grid, Box, Typography, Stack, styled, Button } from '@mui/material';
import CustomButton from '/src/components/Custom/CustomButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(6),
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  border: 3,
  borderColor: "primary.main"
}));

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
            maxWidth="100%"
            mb="40px"
          >
            <Grid item xs={12} sm={8} md={3}>
              <TextField 
                id="standard-basic" 
                label="Min" 
                ref={minRef} type="number"
                size="small"
                sx={{ mt: 3, mb: 3, width:"140px"}}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <TextField 
                id="standard-basic" 
                label="Max" 
                ref={maxRef} 
                type="number"
                size="small"
                sx={{ mb: 3, width:"140px"}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              {/* <CustomButton 
                onClick={apply}
                backgroundColor="#849EB9"
                color="#fff"
                buttonText="Apply"
              /> */}
              <Button
                type="submit"
                variant="outlined"
                sx={{ mb: 5, width:"80px", height: "40px" }}
                onClick={apply}
              >
                Apply
              </Button>
            </Grid>
          


          <Grid item xs={12} sm={8} md={4} >
            <FormControl sx={{ width:"160px"}}>
              <InputLabel id="demo-simple-select-label" >Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort === "sales" ? "Best Selling" : "Newest"}
                label="Sort By"
                onChange={handleChange}
                size="small"
              >
                <MenuItem onClick={() => reSort("createdAt")}>Newest</MenuItem>
                <MenuItem onClick={() => reSort("sales")}>Best Selling</MenuItem>
                <MenuItem onClick={() => reSort("sales")}>Popular</MenuItem>
              </Select>
            </FormControl>

            </Grid>

          </Grid>
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