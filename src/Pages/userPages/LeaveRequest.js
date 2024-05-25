import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  List,
  MenuItem,
  Menu,
  Select,
  Button,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import theme from '../../theme'

export const LeaveRequest = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState("");
  const [leavereason, setLaeveReason] = useState("");
  const [laeaveTypes, setLaeaveTypes] = useState([]);
  const [plazeruserId, setPlazerUser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/leavetype/alltypes")
      .then((res) => {
        setLaeaveTypes(res.data);
      })
      .catch((error) => {
        console.error("Error fetching leave types:", error);
      });
  }, []);

  //handle date range by server side
  /*const handleStartDateChange = (date) => {
  
    setStartDate(date.target.value);
    

  };
  const handleEndDateChange = (date) => {
    date = new Date(date).toISOString().split("T")[0];
    setEndDate(date.value.target)
     
    }
  */

  //handle Leave type
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleuseridChange = (event) => {
    const userId = parseInt(event.target.value); // Convert the string to a number
  setPlazerUser(userId);
  };

  const handleReasonChange = (event) => {
    setLaeveReason(event.target.value);
  };

  const handleLeaveRequestSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      leaveStart: startDate.toISOString().split("T")[0],
      leaveEnd: endDate.toISOString().split("T")[0],
      leaveType: selectedType,
      leaveReason: leavereason,
      requestDate: new Date().toISOString().split("T")[0],
      plazeruserid: parseInt(plazeruserId),
    };
    try {
      console.log("Leave request submitted:", requestData); // Log the submitted data

      const response = await axios.post(
        "http://localhost:3001/leaverequest/addleave",
        requestData
      );

      console.log("created", response.data);
    } catch (error) {
      setError("Error creating post:" + error.message);
    }
  };

  return (
   
      //Leave RequestForm
      <Box sx={{   justifyContent: "center", alignContent:"center" , display:'flex', flexDirection:'column'}}>

        <FormControl sx={{ m: 2, width: "90%" }} variant="outlined">
          <FormLabel htmlFor="card-number" required sx={{ color: "black" }}>
            plazeruser id
          </FormLabel>
          <input
            type="number"
            id="plazeruserId"
            value={plazeruserId}
            placeholder="plazeruser Id"
            sx={{
              width: "100%",
              border: `2px solid ${theme.palette.secondary.main}`,
              borderRadius: '2px',
              padding: '8px',
              boxSizing: 'border-box',
              // additional styles as needed
            }}
                      onChange={handleuseridChange}
          />
        </FormControl>

        {/* date range */}
        <FormControl sx={{ m: 1 }} variant="outlined">
          <FormLabel htmlFor="card-number" required sx={{ color: "black" }}>
            Leave Date Range:
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DemoItem label="Start Date">
                <DatePicker 
                onChange={(date) => setStartDate(date)} slotProps={{
                  layout: {
                    sx: {
                      color:  theme.palette.secondary.main,
                      backgroundColor:  theme.palette.secondary.light,
                    }
                  }
                }} />
              </DemoItem>

              <DemoItem label="End Date">
                <DatePicker
                  minDate={startDate}
                  maxDate={dayjs("2026-04-17")}
                  onChange={(date) => setEndDate(date)}
                  startdate={startDate}
                  slotProps={{
                    layout: {
                      sx: {
                        color:  theme.palette.secondary.main,
                        backgroundColor:  theme.palette.secondary.light,
                      }
                    }
                  }}
                  
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </FormControl>

        {/* Leave reason */}
        <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
          <FormLabel htmlFor="card-number" required sx={{ color: "black" }}>
            Leave Reason
          </FormLabel>
          <TextField
            id="outlined-textarea"
            type="text"
            value={leavereason}
            placeholder="enter your reason with brief details"
            rows={3}
            multiline
            sx={{ width: "100%", color: 'red', border: `2px solid ${theme.palette.secondary.main}`, borderRadius: '10px' }}
            borderColor='red'
            onChange={handleReasonChange}
          />
        </FormControl>

        {/* Leave type */}
        <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
          <FormLabel htmlFor="card-number" required sx={{ color: "black" }}>
            Leave Type
          </FormLabel>
          <Select
            id="type-select"
            value={selectedType}
            onChange={handleTypeChange}
            sx={{ width: "100%", color: 'red', border: `2px solid ${theme.palette.secondary.main}`, borderRadius: '10px' }}

          >
            {laeaveTypes.map((leaveType) => (
              <MenuItem
                key={leaveType.leaveTypeid}
                value={leaveType.leaveTypeid}
              >
                {leaveType.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: "90%", pb: 2}} variant="outlined">
          <FormLabel htmlFor="card-number" required sx={{ color: "black" }}>
            Other things:
          </FormLabel>
          <TextField
            id="outlined-textarea"
            placeholder="anything 
            you have to say"
            multiline
            sx={{ width: "100%", color: 'red', border: `2px solid ${theme.palette.secondary.main}`, borderRadius: '10px' }}
            />
        </FormControl>
        <Button
          variant="outlined"
          onClick={handleLeaveRequestSubmit}
          sx={{
            width: "100%",
            color: "black",
            fontSize: "16px",
            backgroundColor: theme.palette.secondary.main,
            borderColor:theme.palette.secondary.main,
            color:'white',
            border:'4px solid',
            borderRadius: '10px',
            "&:hover": {
              Color: "darkred",
              backgroundColor: theme.palette.secondary.light,
              borderColor:theme.palette.secondary.light,
            },
          }}
        >
          Submit Leave
        </Button>
      </Box>
   
  );
};
export default LeaveRequest;
