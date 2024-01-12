import newRequest from '../../utils/newRequest';
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Stack, Box, styled, Typography, Container, Grid } from '@mui/material';
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
import CustomBreadcrumbs from './../../components/Custom/CustomBreadcrumbs';
import CustomUserInfo from '../../components/Custom/CustomUserInfo';
import SmallCustomButton from '../../components/Custom/CustomSmallButton';


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

const HService = () => {

  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["hservice"],
    queryFn: () =>
      newRequest.get(`/hservices/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  // console.log(dataUser)
  // console.log(data)

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "80vh" }}>
      <Container>
        
        <CustomBreadcrumbs />
        <CustomBox>
        <Box sx={{ flex: "1" }}>
            <Item>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {/* {data.title} */}
                </Typography>
                {/* $ {data.price}.99 */}
              </Box>
              {/* <Box> {data.shortDesc} </Box> */}
              <Box>
                {/* <Box> {data.deliveryDate} </Box>
                <List sx={{ width:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {data.features.map((feature) => (
                  <ListItem key={feature}>
                    {feature}
                  </ListItem>
                  ))}
                </List> */}
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
          
          <Box sx={{ flex: "2" }}>
            <Stack spacing={2}>
              <Item>
                <Typography variant="h5" gutterBottom>
                  {/* {data.title} */}
                </Typography>
              </Item>
              <CustomUserInfo data = {dataUser}/>
                {/* <CustomUserInfo /> */}
              <Item>
                <ImageSlider />
              </Item>
              <Item>
                <Typography variant="h6" gutterBottom>About Service</Typography>
                {/* <p>{data.desc}</p> */}
              </Item>
              <Item>
                <Stack>
                  <Item> 
                    <Typography variant="h6" gutterBottom>About Seller</Typography>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <CustomUserInfo data = {dataUser}/>
                    {/* <CustomUserInfo /> */}
                    <SmallCustomButton
                      backgroundColor="#849EB9"
                      color="#fff"
                      buttonText="Contact Me"
                    />
                    </Stack>
                    <Grid container spacing={2} mt={2}>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" gutterBottom>Average Response Time</Typography>
                        <Typography variant="body2" gutterBottom>4 Hours</Typography>
                        <Typography variant="subtitle2" gutterBottom>Language</Typography>
                        <Typography variant="body2" gutterBottom>English, Spanish</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" gutterBottom>Member since</Typography>
                        <Typography variant="body2" gutterBottom>Aug 2022</Typography>
                        <Typography variant="subtitle2" gutterBottom>Certified</Typography>
                        {/* <Typography variant="body2" gutterBottom>{dataUser.city}, {dataUser.state}</Typography> */}
                      </Grid>
                    </Grid>
                  </Item>
                </Stack>
              </Item>
              <Item>
                <Stack>
                    <Typography>Reviews</Typography>
                  <Item>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} spacing={{ xs: 1, sm: 2 }}>
                    <Avatar 
                      sx={{ height: '45px', width: '45px', mr:2}} 
                      alt="Pro"
                      src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    />
                    <Typography sx={{ fontSize: 12 }}>John Green</Typography>
                  </Box>
                  <Box sx={{justifyContent: 'flex-start' }} m={1}>  
                    <img src={star} width="15" height="15" />
                    <img src={star} width="15" height="15" />
                    <img src={star} width="15" height="15" />
                    <img src={star} width="15" height="15" />
                    <img src={star} width="15" height="15" />
                  </Box>
                    <Item>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores aut officia ea, sunt excepturi pariatur commodi nostrum, consectetur ratione maxime nulla vel ducimus ipsum, asperiores atque sequi quos quas.
                    </Item>
                  </Item>
                </Stack>
              </Item>
            </Stack>
          </Box>
        </CustomBox>
      </Container>

    </Box>
  )
}

export default HService;