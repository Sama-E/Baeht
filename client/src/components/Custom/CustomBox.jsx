import { Stack, Box, styled, Typography, Container } from '@mui/material';

const CustomBox = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(6),
    marginTop: theme.spacing(2),
    border: 2,
    borderColor: "primary.main",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  return (
    <CustomBox>CustomBox</CustomBox>
  )
}

export default CustomBox;