import { Box, Grid, Stack, Container } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Nav/Navbar';
import "./App.scss";
import Home from './pages/Home/Home';
import Footer from './components/Nav/Footer';


function App() {

  const Layout = () => {
    return (
      <Container bgcolor={"background.default"} color={"text.primary"}>
        <Stack spacing={2}>
          <Navbar />
          <Grid rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
            <Outlet />
          </Grid>
          <Footer />
        </Stack>
      </Container>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },

      ]
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
