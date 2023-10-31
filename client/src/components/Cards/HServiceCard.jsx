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


const HServiceCard = ({ item }) => {
  return (
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
        image={item.img}
        alt="Paella dish"
      />
      <CardHeader
        sx={{ backgroundColor: "primary.light" }}
        avatar={
          <Avatar 
            sx={{ bgcolor: red[500] }} 
            alt="Pro"
            src={item.pp}
          />
        }
        title={item.username}
        
      />
      <CardContent sx={{ border: "1px", borderColor: "primary.main"}}>
        <Typography variant="body2" color="text.secondary">
          {item.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ {item.price}<sup> 99</sup>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ backgroundColor: "primary.light" }}>
        <IconButton size="small" color="#E3D026">
          {item.star} 
        <StarIcon fontSize="inherit" color="#E3D026"/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default HServiceCard;