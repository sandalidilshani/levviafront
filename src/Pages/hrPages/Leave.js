// Leave.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HRLayout from "../../layout/HRLayoute";
import UserDetails from "../../components/hr/UserDetail";
import { Box, Divider, Typography } from "@mui/material";

export default function Leave(props) {
  const location = useLocation();
  const leaveid = location.state;
  console.log("state", leaveid);

  const [leaveDetails, setLeaveDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3009/leaverequest/${leaveid}`)
      .then((response) => {
        console.log(response.data);
        

        setLeaveDetails(response.data); // Access the first element directly
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [leaveid]);
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (!leaveDetails) {
    return <div>Leave details not found.</div>;
  }
  return (
    <HRLayout>
      <Box
        sx={{
          height: "100vh",
          flex: 3,
          display: "flex",
          flexDirection: "row",
          p: 2, // Added padding for better spacing
          gap: 2, // Added gap between the boxes
        }}
      >
        <Box
          sx={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            p: 2, // Added padding for better spacing
            gap: 1, // Added gap between the elements
          }}
        >
          <Typography variant="h5" color="initial">
            Leave Details
          </Typography>
          <Divider />
          <Typography variant="body1">Leave Id: {leaveid}</Typography>
          <Typography variant="body1">
            Start Date: {leaveDetails.leaveStart}
          </Typography>
          <Typography variant="body1">
            End Date: {leaveDetails.leaveEnd}
          </Typography>
          <Typography variant="body1">
            Reason: {leaveDetails.leaveReason}
          </Typography>
          <Typography variant="body1">
            Type: {leaveDetails.leaveType.type}
          </Typography>
          
          <Typography variant="body1">
            Request Date: {leaveDetails.requestDate}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            p: 0,
            flexDirection: "column",
            
           
          }}
        >
          <UserDetails />
        </Box>
      </Box>
    </HRLayout>
  );
}
