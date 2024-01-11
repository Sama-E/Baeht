import React, { useEffect, useRef, useState } from "react";
import HServiceCard from '../../components/Cards/HServiceCard';
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";


import { Grid, Box, Typography, Stack, styled, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  border: 3,
  borderColor: "primary.main"
}));

const HServices = () => {
  const [mini, setMini] = useState("");
  const [maxi, setMaxi] = useState("");
  const [sort, setSort] = useState("sales");

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["hservices"],
    queryFn: () =>
      newRequest
        .get(
          `/hservices?${search}&min=${mini}&max=${maxi}&sort=${sort}`
          )
        .then((res) => {
          return res.data;
        }),
  });

  // console.log(mini)
  // console.log(maxi)
  // console.log(data);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const reSort = (type) => {
    setSort(type);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <Box sx={{ flexGrow: 1}} >
        <h1>Home Services</h1>
        <p>
          Explore the boundaries of home services
        </p>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Budget</Typography>
          <Stack  
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={12}
            m="20px"
          >

            <Grid item xs={12} sm={8} md={3}>
              <TextField 
                id="standard-basic" 
                label="Min" 
                value={mini}
                type="number"
                size="small"
                // sx={{ mt: 3, mb: 3, width:"140px"}}
                onChange={(e)=>{setMini(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <TextField 
                id="standard-basic" 
                label="Max" 
                value={maxi}
                type="number"
                size="small"
                // sx={{ mt: 1, mb: 3, width:"140px"}}
                onChange={(e)=>{setMaxi(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button
                type="submit"
                variant="outlined"
                // sx={{ mb: .1, width:"80px", height: "40px" }}
                onClick={apply}
              >
                Apply
              </Button>
            </Grid>
          


          <Grid item xs={12} sm={8} md={4} sx={{ mt: 3 }}>
            <FormControl sx={{width:"160px"}}>
              <InputLabel id="demo-simple-select-label" >Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort By"
                onChange={handleChange}
                size="small"
              >
                {/* <MenuItem onClick={() => reSort("createdAt")}>Newest</MenuItem>
                <MenuItem onClick={() => reSort("sales")}>Best Selling</MenuItem>
                <MenuItem onClick={() => reSort("sales")}>Popular</MenuItem> */}
                <MenuItem onClick={() => reSort("createdAt")} value={"createdAt"}>Newest</MenuItem>
                <MenuItem onClick={() => reSort("sales")} value={"sales"}>Best Selling</MenuItem>
                {/* <MenuItem onClick={() => reSort("sales")} value={"sales"}>Popular</MenuItem> */}
              </Select>
            </FormControl>

            </Grid>

          
        </Stack>
        </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map(hservice => ( 
              <Grid item xs={12} sm={6} md={4} >    
                <HServiceCard item={hservice} key={hservice._id}/>
              </Grid>
              ))}
      </Grid>
    </Box>
  )
}

export default HServices;