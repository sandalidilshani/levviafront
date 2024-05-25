import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00acc1",
    color: "white",
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

export default function Users() {
  const [leaveRequests, setLeaveRequests] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [leaveTypes, setLeaveTypes] = React.useState([]);
  const [userLeaveType, setUserLeaveType] = React.useState(null);
  const [age, setAge] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/leaverequest/status/pending")
      .then((res) => {
        setLeaveRequests(res.data);
      })
      .catch((error) => {
        console.error("Error fetching leave requests:", error);
      })
      .finally(() => {
        setLoading(false);
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
      return typeObj ? typeObj.name : "";
    };
  }, [leaveTypes]);

  const handleLeaveRequestEdit = (event) => {
    // Handle the edit logic here
  };

  return (
    <Box sx={{ flex: 5, display: "flex", flexDirection: "column" }}>
      <Box sx={{ mb: 2, width: "75%", alignItems: "center" }}>
        <TextField label="Search" variant="outlined" fullWidth />
      </Box>
      <Box
        sx={{
          flex: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>User Details</h1>
        <div></div>
      </Box>
      <Box sx={{ flex: 3,  p: 2,  }}>
        {/* Content for Pending Details */}

        <Box sx={{ minWidth: 120, width: '20%', padding: '5px' }}>
  
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    defaultValue="Select Leave status"
  >
    <MenuItem value="Select Leave status" disabled>
      <em>Select Leave status</em>
    </MenuItem>
    <MenuItem value={'pending'}>Pending</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell>leaveId</StyledTableCell>
                <StyledTableCell align="right">leaveStart</StyledTableCell>
                <StyledTableCell align="right">leaveEnd</StyledTableCell>
                <StyledTableCell align="right">leaveReason</StyledTableCell>
                <StyledTableCell align="right">LeaveType</StyledTableCell>
                <StyledTableCell align="right">requestDate</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveRequests.map((request) => (
                <StyledTableRow key={request.leaveId}>
                  <StyledTableCell component="th" scope="row">
                    {request.username}
                  </StyledTableCell>
                  <StyledTableCell>{request.leaveId}</StyledTableCell>
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
                    {leaveTypeMap(request.leaveType.id)}
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
    </Box>
  );
}
