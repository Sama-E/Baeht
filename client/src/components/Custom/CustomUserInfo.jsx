import {Box, styled, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import star from "/src/assets/hservices/star.png";


const CustomUserInfo = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    border: 3,
    borderColor: "primary.main"
  }));

  return (
    <Item>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} spacing={{ xs: 1, sm: 2 }}>
        <Avatar 
          sx={{ height: '45px', width: '45px', mr:2}} 
          alt="Pro"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <Box sx={{justifyContent: 'flex-start' }}>  
          <Typography sx={{ fontSize: 12 }}>John Green</Typography>
          <img src={star} width="10" height="10" />
          <img src={star} width="10" height="10" />
          <img src={star} width="10" height="10" />
          <img src={star} width="10" height="10" />
          <img src={star} width="10" height="10" />
        </Box>
      </Box>
    </Item>
  )
}

export default CustomUserInfo