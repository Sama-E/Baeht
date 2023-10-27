import CategoryCarousel from "../../components/Home/CategoryCarousel";
import Feature from "../../components/Home/Feature";
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack spacing={2}>
      <Feature />
      <CategoryCarousel />
    </Stack>
  )
}

export default Home;