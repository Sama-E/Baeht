import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Typography, styled, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const AddHServices = () => {

  const catgories = [
    {
      value: 'Plumbering',
      label: 'Plumbering',
    },
    {
      value: 'Electrician',
      label: 'Electrician',
    },
    {
      value: 'Roofer',
      label: 'Roofer',
    },
    {
      value: 'Landscaper',
      label: 'Landscaper',
    },
    {
      value: 'Designer',
      label: 'Designer',
    },
    {
      value: 'Painter',
      label: 'Painter',
    },
  ];

  return (
    
    <div>
      <Box sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
      }}>
        <h1>Add New Service</h1>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '40ch' },
        }}
        display= "flex"
        noValidate
        autoComplete="off"
      >
        <Box sx={{ flex: "1" }}>
          <Stack spacing={3}>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Title
              </Typography>
              <TextField
                sx={{ width: '40ch' }}
                variant="standard"
              />
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Category
              </Typography>
              <TextField
                select
                SelectProps={{
                  native: true,
                }}
                helperText="Please select a category"
                variant="standard"
              >
                {catgories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Cover Image
              </Typography>
              <Button component="label" variant="outline" startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Upload Images
              </Typography>
              <Button component="label" variant="outline" startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" multiple />
              </Button>
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Description
              </Typography>
              <TextField
                multiline
                rows={6}
                placeholder="Brief description to introduce your service to customers"
                variant="standard"
              />
            </Box>

          </Stack>
        </Box>
        <Box sx={{ flex: "1", pl: 2 }}>
          <Stack spacing={3}>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Service Title
              </Typography>
              <TextField
                sx={{ width: '40ch' }}
                variant="standard"
              />
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Price
              </Typography>
              <TextField
                sx={{ display: 'block', p: 0.1  }}
                variant="standard"
              />
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Short Description
              </Typography>
              <TextField
                multiline
                rows={6}
                placeholder="Short description of your service."
                variant="standard"
              />
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Delivery Time (e.g. 3 days)
              </Typography>
              <TextField
                sx={{ width: '40ch' }}
                variant="standard"
              />
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Revision Number
              </Typography>
              <TextField
                sx={{ width: '40ch' }}
                variant="standard"
              />
            </Box>

            <Box component="section">
              <Typography variant="subtitle1" gutterBottom>
                Add Features
              </Typography>
              <TextField
                sx={{ display: 'block', p: 1 }}
                variant="standard"
                placeholder="Item 1"
              />
              <TextField
                sx={{ display: 'block', p: 1  }}
                variant="standard"
                placeholder="Item 2"
              />
              <TextField
                sx={{ display: 'block', p: 1  }}
                variant="standard"
                placeholder="Item 3"
              />
            </Box>

          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default AddHServices