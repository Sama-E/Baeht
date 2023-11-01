import { Button, styled } from "@mui/material";

const SmallCustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const SmallCustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: color,
    color: backgroundColor,
    fontWeight: "400",
    fontSize: "11px",
    cursor: "pointer",
    padding: "12px 12px",
    borderRadius: "0px",
    textTransform: "none",
    textUnderline:"none",
    display: "block",
    border: "2px solid #849EB9",
    "&:hover": {
      backgroundColor: backgroundColor,
      color: color,
      borderColor: color,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <SmallCustomButton>{buttonText}</SmallCustomButton>;
};


export default SmallCustomButton;