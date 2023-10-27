import React from 'react'
import CategoryCards from '../Styles/CategoryCards';
import Slider from 'infinite-react-carousel';
import { catcards } from '../../data';
import { Box } from '@mui/material';

const CategoryCarousel = () => {


  return (
    <>
    <Box sx={{ display: { xs: "none", sm:"none", md: "block" }}}>
      <Slider slidesToShow={3} arrowsScroll={4} centerPadding={40}>
        {catcards.map(catcard => (
          <CategoryCards item={catcard} key={catcard.id} />
        ))}
      </Slider>
    </Box>
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" }}}>
      <Slider slidesToShow={1} centerMode={true} centerPadding={60}>
        {catcards.map(catcard => (
          <CategoryCards item={catcard} key={catcard.id} />
        ))}
      </Slider>
    </Box>
    </>
  )
}

export default CategoryCarousel;