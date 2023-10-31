import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const CategoryCards = ({item}) => {
  return (
    <Card sx={{ 
      border: 3,
      borderColor: "primary.main",
      boxShadow: 5,
      m:1, 
      maxWidth: 240
      }}
    >
      <Link to="/services?cat=design">
        <div style={{ position: "relative" }}>
          <CardMedia
            sx={{ height: 300 }}
            image={item.img}
            title={item.title}
          />

          <CardContent 
            style={{
              position: "absolute", 
              color: "white", 
              top: 203, 
              left: "33%", 
              transform: "translateX(-50%)",}}
          >
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Button size="small">Learn More</Button>
          </CardContent>
        </div>
      </Link>
    </Card>
  )
}

export default CategoryCards;