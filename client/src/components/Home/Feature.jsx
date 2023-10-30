import DemoPaper from '@mui/material/Paper';
import { Grid, Box } from '@mui/material';

const Feature = () => {
  return (

<>
  <DemoPaper square sx={{borderRadius: 1, borderColor: 'grey.500' }}>
    square corners
    <Box sx={{ 
      border: 3, 
      borderColor: 'primary.main', 
      borderRadius: 1,
      width: '5rem', 
      height: '5rem',
      boxShadow: 3,
      margin: "20px"
      }}
    >
      Box
    </Box>
  </DemoPaper>
</>

  )
}

export default Feature;