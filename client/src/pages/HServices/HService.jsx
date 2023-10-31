import { Stack, Box, styled, Typography, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import star from "/src/assets/hservices/star.png";
import ImageSlider from '../../components/HServices/ImageSlider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CustomButton from "/src/components/Custom/CustomButton";

const HService = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(6),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    border: 3,
    borderColor: "primary.main"
  }));

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "2" }}>
            <Stack spacing={2}>
              <Item>
                <Typography variant="h4" gutterBottom>
                  Title
                </Typography>
              </Item>
              <Item>
                <Avatar 
                  sx={{ bgcolor: "red" }} 
                  alt="Pro"
                  src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                John Green
                <IconButton size="small" color="#E3D026">
                  <img src={star} width="15" height="15" />
                  <img src={star} width="15" height="15" />
                  <img src={star} width="15" height="15" />
                  <img src={star} width="15" height="15" />
                  <img src={star} width="15" height="15" />
                </IconButton>
              </Item>
              <Item>
                <ImageSlider />
              </Item>
              <Item>
                <Typography variant="h6" gutterBottom>About Service</Typography>
                <p>Something</p>
              </Item>
              <Item>
                <Stack>
                  <Item> 
                    <Typography variant="h6" gutterBottom>About Seller</Typography>
                    <Item>Avatar Profile</Item>
                    <Item>
                      Service Profile
                    </Item>
                  </Item>
                </Stack>
              </Item>
              <Item>
                <Stack>
                    <Typography>Reviews</Typography>
                  <Item>
                    <Item>Avatar Profile</Item>
                    <Item>Stars</Item>
                    <Item>
                      Review 1
                    </Item>
                  </Item>
                </Stack>
              </Item>
            </Stack>
          </Box>


          <Box sx={{ flex: "1" }}>
            <Item>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Title
                </Typography>
                Price
              </Box>
              <Box> Desc </Box>
              <Box>
                <Box> 2 days to delivery</Box>
                <List sx={{ width:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem>
                    Photo
                  </ListItem>
                  <ListItem>
                    Photo
                  </ListItem>
                  <ListItem>
                    Photo
                  </ListItem>
                </List>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <CustomButton
                    backgroundColor="#849EB9"
                    color="#fff"
                    buttonText="Continue"
                  />
                </Box>
              </Box>
            </Item>
          </Box>
        </CustomBox>
      </Container>

    </Box>
  )
}

export default HService;