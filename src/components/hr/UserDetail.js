// UserDetail.js
import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Person3Icon from "@mui/icons-material/Person3";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const location = useLocation();
  const leaveid = location.state;
  console.log("state", leaveid);
  const [userDetails, setuserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3009/leaverequest/usersleavedetails/${leaveid}`)
      .then((response) => {
        console.log(response.data.plazeruser_ulname);

        setuserDetails(response.data);
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
  if (!userDetails) {
    return <div>user details not found.</div>;
  }
  return (
    <Card sx={{ backgroundColor: "white" }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box sx={{ flex: 2 }}>
            <Person3Icon sx={{ width: 120, height: 120 }} />
          </Box>
          <Box sx={{ flex: 5, ml: 2 }}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">
                {userDetails.plazeruser_ufname + " "}
                {userDetails.plazeruser_ulname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userDetails.plazeruser_role
}
              </Typography>
              <Box mt={2}>
                <Typography variant="body2">
                  {userDetails.plazeruser_addressl1}
                </Typography>
                <Typography variant="body2">{userDetails.plazeruser_addressl2}</Typography>
                <Typography variant="body2">
                {userDetails.plazeruser_addressl3}
                </Typography>
              </Box>
              
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
