import React from 'react'
import CategoryCards from '../Styles/CategoryCards';
import Slider from 'infinite-react-carousel';
import { catcards } from '../../data';
import { Box } from '@mui/material';

const CategoryCarousel = () => {


  return (
    <>
    <Box sx={{ display: { xs: "none", sm:"none", md: "block" }}}>
      <Slider slidesToShow={3} arrowsScroll={4} centerMode={false} centerPadding={80}>
        {catcards.map(catcard => (
          <CategoryCards item={catcard} key={catcard.id} />
        ))}
      </Slider>
    </Box>
    <Box sx={{ display: { xs: "none", sm: "block", md: "none" }}}>
      <Slider slidesToShow={1} arrowsScroll={2} centerMode={true} centerPadding={60}>
        {catcards.map(catcard => (
          <CategoryCards item={catcard} key={catcard.id} />
        ))}
      </Slider>
    </Box>
    <Box sx={{ display: { xs: "block", sm: "none", md: "none" }}}>
      <Slider slidesToShow={1} arrowsScroll={1} centerMode={true} centerPadding={20}>
        {catcards.map(catcard => (
          <CategoryCards item={catcard} key={catcard.id} />
        ))}
      </Slider>
    </Box>
    </>
  )
}

export default CategoryCarousel;