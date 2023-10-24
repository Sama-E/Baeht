import { Box, Stack } from '@mui/material';
import Navbar from './components/Nav/Navbar/Navbar';
import Sidebar from './components/Nav/Sidebar/Sidebar';


function App() {

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
      </Stack>
    </Box>
  )
}

export default App;
