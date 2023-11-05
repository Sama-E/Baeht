import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import HouseIcon from '@mui/icons-material/House';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
	backgroundColor: "white"
});


const Footer = () => {
  return (
    <AppBar position="sticky" style={{backgroundColor: 'black'}}>
      <Box sx={{ 
        border: 2, 
        borderColor: 'dark.main', 
        borderRadius: 1,
        boxShadow: 3,
        margin: "1px"
        }}
      >
        <StyledToolbar>
          <Box>
          .Baeht.
          </Box>
          <Box>
          © .Baeht. International Ltd. 2023
          </Box>
        </StyledToolbar>
      </Box>
    </AppBar>
  );
};

export default Footer;