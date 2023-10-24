import styled from "@emotion/styled";
import {Button} from "@mui/material";


export const GreenishButton= styled(Button)(({theme}) => ({
    border: theme.palette.secondary.main,
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    margin: 5,
}));