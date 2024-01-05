import { Box, Grid, Stack, Container } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Nav/Navbar';
import "./App.scss";
import Home from './pages/Home/Home';
import Footer from './components/Nav/Footer';
import HServiceCard from './components/Cards/HServiceCard';
import HServices from './pages/HServices/HServices';
import HService from './pages/HServices/HService';
import Single_Message from './pages/Messages/Single_Message';
import Messages from './pages/Messages/Messages';
import MyHServices from './pages/Pro/MyHServices';
import Orders from './pages/Orders/Orders';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import AddHServices from './pages/Pro/AddHServices';
import WelcomeNav from './components/Nav/WelcomeNav';


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

  const Layout2 = () => {
    return (
      <Container bgcolor={"background.default"} color={"text.primary"}>
        <Stack spacing={2}>
          <WelcomeNav />
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
          path: "/services",
          element: <HServices />,
        },
        {
          path: "/services/:id",
          element: <HService />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/messages/:id",
          element: <Single_Message />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/myServices",
          element: <MyHServices />,
        },
        {
          path: "/addService",
          element: <AddHServices />,
        },
      ],
    },
    {path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
])

  return <RouterProvider router={router} />;
}

export default App;
