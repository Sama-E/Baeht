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
      border: 2,
      borderColor: "primary.main",
      boxShadow: 3,
      p:1.5, 
      m:1, 
      maxWidth: 240
      }}
    >
      <Link to="/services?cat=design">
        <CardMedia
          sx={{ height: 200 }}
          image={item.img}
          title={item.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Link>
    </Card>
  )
}

export default CategoryCards;