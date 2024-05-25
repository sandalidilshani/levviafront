import {
  Box,
  Typography,
  CardContent,
  Card,
  Divider,
} from "@mui/material";
import React from "react";
import theme from "../../theme";
import PersonIcon from "@mui/icons-material/Person";

const LeaveCard = ({ title, count }) => (
  <Card variant="outlined" sx={{ m: 2, height: "50%",borderRadius:3 }}>
    <CardContent sx={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
      <Box sx={{ flexGrow: 1, justifyContent:'center',p:1 }}>
        <Typography variant="h7"  sx={{color:theme.palette.secondary.main}}>
          {title}
        </Typography>
        </Box>
      
        <Box sx={{ flexGrow: 1, justifyContent:'center',p:1 }}>
        <Typography variant="h4" color="text.secondary">
          {count}
        </Typography>
        </Box>
      
    </CardContent>
  </Card>
);

export const Sidebar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        flex: '2',
        bgcolor:'#00acc1' ,
        borderRadius: 1,
      }}
    >
      <Box
     
        sx={{
          height: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5%",
          margin: "20px",
        }}
      >
        <Typography variant="h5" color="text.primary" gutterBottom>
          Hi Sandali
        </Typography>
        <PersonIcon sx={{ fontSize: 64, mb: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          Here you can provide a brief overview of the key features of the
          product.
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          height: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <LeaveCard title="Pending Leaves" count={220} />
        <LeaveCard title="Approved Leaves" count={180} />
        <LeaveCard title="Rejected Leaves" count={40} />
        <LeaveCard title="Total Leaves" count={440} />
      </Box>
    </Box>
  );
};
