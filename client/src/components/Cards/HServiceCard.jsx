import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import star from "/src/assets/hservices/star.png";
import StarIcon from '@mui/icons-material/Star';
import {Link} from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import { Stack } from '@mui/material';

const HServiceCard = ({ item }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (

    <Link to={`/hservices/single/${item._id}`} style={{textDecoration: 'none'}} >
    
    <Card sx={{ 
      maxWidth: 300,
      border: 3,
      borderColor: "primary.main",
      boxShadow: 5,
      m:1, 
    }}
    >
      <CardMedia
        component="img"
        height="194"
        image={item.cover}
        alt=""
      />
        {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (

          <CardHeader
            sx={{ backgroundColor: "primary.light" }}
            underline="none"
            avatar={
              <Avatar 
                sx={{ bgcolor: red[500] }} 
                alt="Pro"
                src={data.img || item.pp}
              />
            }
            title={item.title}
            subheader={data.company}  
          />

        )}
      <CardContent sx={{ border: "1px", borderColor: "primary.main"}}>
        <Typography variant="body2" color="text.secondary">
          {item.shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ backgroundColor: "primary.light" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={24}
      >
        <IconButton size="small" color="#E3D026">
          <Typography variant="subtitle1" >
            {!isNaN(item.totalStars / item.starNumber) &&
            Math.round(item.totalStars / item.starNumber)}
          </Typography>
          <StarIcon fontSize="inherit" color="ochre"/>
        </IconButton>

        <Typography variant="body2" color="text.secondary">
        $ {item.price}<sup> 99</sup>
        </Typography>
        </Stack>
      </CardActions>
    </Card>
    </Link>
  )
}

export default HServiceCard;