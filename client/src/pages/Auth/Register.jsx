import React, { useState } from "react";
// import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    img: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    isSeller: false,
    company: "",
    desc: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        // img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 3,
        borderRadius: 2,
      px: 4,
      py: 6,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="username"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              autoComplete="given-firstName"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-lastName"
              name="lastName"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload Profile Picture
              <VisuallyHiddenInput type="file" />
              {/* <VisuallyHiddenInput type="file" onChange={(e) => setFile(e.target.files[0])}/> */}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
              autoComplete="address"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} s={6}>
            <TextField
              required
              fullWidth
              name="city"
              label="City"
              type="text"
              id="city"
              autoComplete="new-city"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2} s={2}>
            <TextField
              required
              fullWidth
              name="state"
              label="State"
              type="text"
              id="state"
              autoComplete="new-state"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4} s={4}>
            <TextField
              required
              fullWidth
              name="zipcode"
              label="Zipcode"
              type="text"
              id="zipcode"
              autoComplete="new-zipcode"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} pt={3}>
          <Accordion p={2}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              I am a Home Service Professional.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" onChange={handleSeller} />}
              label="Activate Seller Account"
              />
            </Typography>
            <Grid item xs={10} pt={3}>
              <TextField
                required
                fullWidth
                name="company"
                label="Business Name"
                type="text"
                id="company"
                autoComplete="new-company"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={10} pt={3}>
              <TextField
                required
                fullWidth
                name="desc"
                label="Description"
                type="text"
                id="desc"
                autoComplete="new-desc"
                multiline
                rows={4}
                onChange={handleChange}
              />
            </Grid>
          </AccordionDetails>
        </Accordion>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ p: 2 }}>
        <Typography component="h6" color="red">
          {error && error}
        </Typography>
      </Box> */}
    </Box>
  </Container>
  )
}

export default Register;