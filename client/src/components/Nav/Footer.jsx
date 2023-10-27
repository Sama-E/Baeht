import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Button,
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
      <StyledToolbar>
        Footer
      </StyledToolbar>
    </AppBar>
  );
};

export default Footer;