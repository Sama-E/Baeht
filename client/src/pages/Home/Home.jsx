import Guide from "../../components/Home/Guide";
import Hero from "../../components/Home/Hero";
import CategoryCarousel from "../../components/Home/CategoryCarousel";

import { Stack } from '@mui/material';
import Banner from "../../components/Home/Banner";

const Home = () => {
  return (
    <Stack spacing={5}>
      <Hero />
      <Guide />
      <Banner />
      <CategoryCarousel />
    </Stack>
  )
}

export default Home;