import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import theme from "../../theme";
import HRLayout from "../../layout/HRLayoute";
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00acc1',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    cursor: "pointer",
  },
}));

export default function Pending() {
  const [leaverequest, setLeaverequest] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const leaveDetails = useNavigate(); 
  React.useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3009/leaverequest/allpendingleaves")
      .then((res) => {
        setLeaverequest(res.data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching leave types:", error);
      });
  }, []);

  return (
    <HRLayout>
      <Box sx={{ bgcolor: theme.palette.primary.light, flex: 5, justifyContent: "space-between" }}>
        <Typography sx={{ justifyContent: 'center', alignContent: "center" }}>Pending Leaves for your attention</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>UserId</StyledTableCell>
                <StyledTableCell>UserName</StyledTableCell>
                <StyledTableCell>leaveId</StyledTableCell>
                <StyledTableCell align="right">leaveStart</StyledTableCell>
                <StyledTableCell align="right">leaveEnd</StyledTableCell>
                <StyledTableCell align="right">leaveReason</StyledTableCell>
                <StyledTableCell align="right">requestDate</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaverequest.map((request) => (
                <StyledTableRow
                  key={request.leaveId}
                  
                  onClick={() => leaveDetails("/leave",{state:request.leaveId})} // Redirect to leave details page on row click
                >
                  <StyledTableCell component="th" scope="row">
                    {request.plazeruserid.userid}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {request.plazeruserid.ufname}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {request.leaveId}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {request.leaveStart}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {request.leaveEnd}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {request.leaveReason}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {request.requestDate}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </HRLayout>
  );
}
