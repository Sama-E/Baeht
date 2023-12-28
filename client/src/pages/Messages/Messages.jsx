import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import { Box } from '@mui/material';
import CustomButton from '../../components/Custom/CustomButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "primary.main",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(title, date) {
  return { title, date};
}

const rows = [
  createData('Electrical Company', "11/28/23"),
  createData('Plumber Jack', "11/28/23"),
  createData('Verizon', "11/28/23"),
  createData('Handman Joe', "11/28/23"),
  createData('HVAC Guys', "11/28/23"),
];

const Messages = () => {

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;


  return (
    <div>
      <Box sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
      }}>
        <h1>Messages</h1>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{currentUser.isSeller ? "Buyer" : "Seller"}</StyledTableCell>
              <StyledTableCell align="left">Last Message</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.title}>
                {/* <StyledTableCell align="right">{row.image}</StyledTableCell> */}
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="left">              
                  <Link to="/message/123" className="link">
                    {message.substring(0, 100)}...
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link to="/home">
                    <CustomButton
                      backgroundColor="#849EB9"
                      color="#fff"
                      buttonText="Mark as Read"
                      heroBtn={true}
                      href ="/home"
                    />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Messages;