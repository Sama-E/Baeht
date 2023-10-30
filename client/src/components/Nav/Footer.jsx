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
	backgroundColor: "#FAFCFD"
});


const Footer = () => {
  return (
    <AppBar position="sticky">
      <Box sx={{ 
        border: 3, 
        borderColor: 'primary.main', 
        borderRadius: 1,
        boxShadow: 3,
        margin: "1px"
        }}
      >
        <StyledToolbar>
          Footer
        </StyledToolbar>
      </Box>
    </AppBar>
  );
};

export default Footer;