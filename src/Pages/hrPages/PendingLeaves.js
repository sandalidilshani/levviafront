import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import axios from "axios";
import theme from "../../theme";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  leaveId,
  leaveStart,
  leaveEnd,
  leaveReason,
  requestDate,
  leaveType
) {
  return { leaveId, leaveStart, leaveEnd, leaveReason, requestDate, leaveType };
}



export default function Pending() {
  const [leaverequest, setLeaverequest] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [leaveTypes, setLeaveTypes] = React.useState([]);
  const [userleavetype,setUserLeaveType]=React.useState(null)

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/leaverequest/status/pending")
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

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/leavetype/alltypes")
      .then((res) => {
        setLeaveTypes(res.data);
      })
      .catch((error) => {
        console.error("Error fetching leave types:", error);
      });
  }, []);
  const leaveTypeMap = React.useMemo(() => {
    return (leaveTypeId) => {
      const typeObj = leaveTypes.find((type) => type.id === leaveTypeId);
      return typeObj ? typeObj.name : '';
     

    };
  }, [leaveTypes]);

  const handleLeaveRequestEdit = (event) => {
    
  };


  return (
    <Box sx={{ bgcolor:theme.palette.primary.light, flex: 5, justifyContent: "space-between" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>User </StyledTableCell>
              <StyledTableCell>leaveId </StyledTableCell>
              <StyledTableCell align="right">leaveStart</StyledTableCell>
              <StyledTableCell align="right">leaveEnd</StyledTableCell>
              <StyledTableCell align="right">leaveReason</StyledTableCell>
              <StyledTableCell align="right">LaeaveType</StyledTableCell>
              <StyledTableCell align="right">requestDate</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {leaverequest.map((request) => (
                
              <StyledTableRow key={request.leaveId}>
                <StyledTableCell component="th" scope="row">
                  {request.username}
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
                  {request.leaveType.type}
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
  );
 
}
