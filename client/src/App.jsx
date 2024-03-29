import { Box, Grid, Stack, Container } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


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
import Welcome from './pages/Welcome/Welcome';


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <Container bgcolor={"background.default"} color={"text.primary"}>
        <QueryClientProvider client={queryClient}>
          <Stack spacing={2}>
            <Navbar />
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
              <Outlet />
            </Grid>
            <Footer />
          </Stack>
        </QueryClientProvider>
      </Container>
    )
  }

  const LayoutLoginRegister = () => {
    return (
      <Container bgcolor={"background.default"} color={"text.primary"}>
        <Stack spacing={2}>
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
          path: "/",
          element: <HServices />,
        },
        {
          path: "/hservices/single/:id",
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
    element: <LayoutLoginRegister />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
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
