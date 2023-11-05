import { Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
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
	backgroundColor: "#FAFCFD",
});

const Search = styled("div")(({ theme }) => ({
  // backgroundColor: "#FAFCFD",
  padding: "0 10px",
  width: "30%",
	underline: "always",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const currentUser ={
  id: 1,
  username: "John",
  img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  isSeller: false,
}


const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          .Baeht.
        </Typography>
        <HouseIcon  sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder="search for a service ..." />
        </Search>
        <Search sx={{ display: { xs: "block", sm: "none" } }}>
          <InputBase placeholder="search ..." />
        </Search> */}
        <Icons>
          {/* <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge> */}
          {!currentUser?.isSeller && <span>Become a Pro</span>}
          {!currentUser && 
          <>
            <span>Explore</span>
            <span>Sign In</span>
            <Button variant="outlined">Join</Button>
          </>
          }
          {currentUser && (
            <Avatar
              sx={{ width: 40, height: 40 }}
              src= {currentUser?.img}
              onClick={(e) => setOpen(true)}
            />
          )}
        </Icons>

        {currentUser && (
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={currentUser?.img}
            />
            <Typography variant="span">{currentUser?.username}</Typography>
          </UserBox>
        )}
      {/* </StyledToolbar> */}
      
      {/* Current User is not Seller Menu */}
      {currentUser && (
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
        {currentUser.isSeller && (
            <>
              <MenuItem>My Services</MenuItem>
              <MenuItem>Add New Service</MenuItem>
            </>
        )}
          <MenuItem>My Orders</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      )}

      {/* Current User is Seller Menu */}
      {/* {currentUser?.isSeller  && (
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My Services</MenuItem>
          <MenuItem>Add Service</MenuItem>
          <MenuItem>My Orders</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      )} */}

      </Box>
    </AppBar>
  );
};

export default Navbar;