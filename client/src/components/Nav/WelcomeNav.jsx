import {
  AppBar,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React from "react";
import HouseIcon from '@mui/icons-material/House';

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const WelcomeNav = () => {
  return (
<AppBar 
      position="sticky"
    >
      <Box sx={{  
        border: 3,  
        boxShadow: 3,
        margin: "1px",
        display: "flex",
        justifyContent : "space-between",
        alignItems: "center",
        height:"55px",
        backgroundColor: "#FAFCFD",
        padding: "7px 18px"
        }}
      >
      {/* <StyledToolbar> */}
      <Box>
        <Typography variant="h5" sx={{ display: { xs: "block", sm: "block" } }}>
          .Baeht.
        </Typography>
        {/* <HouseIcon  sx={{ display: { xs: "block", sm: "none" } }} /> */}
      </Box>
      <Box>
        <Icons sx={{ display: { xs: "block", sm: "block" } }}>
            <Button variant="outlined" color="dark" size="small" >Sign In</Button>
            <Button variant="outlined" color="dark" size="small" sx={{ marginLeft: '20px' }} >Join</Button>
        </Icons>
      </Box>
      </Box>
    </AppBar>
  )
}

export default WelcomeNav;