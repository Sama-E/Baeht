import Slider from 'infinite-react-carousel';
import { Stack, Box, styled, Typography, Container } from '@mui/material';
import Paper from '@mui/material/Paper';

const ImageSlider = () => {
  return (
    <Box sx={{ p: 3, display: { xs: "none", sm:"none", md: "block" }}}>
    <Slider slidesToShow={1} arrowsScroll={1} centerMode={false} centerPadding={80}>
      <img 
        src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <img 
        src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <img 
        src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
    </Slider>
  </Box>
  )
}

export default ImageSlider;