import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ListItemText from "@mui/material/ListItemText";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; 
import image from "../../components/images/logo.png"

import menuimage from "../images/menu.jpg"
const data = [
 
  { icon: <SendOutlinedIcon />, label: "Pending", link: "/pending" },
  { icon: <Dns />, label: "History", link: "/history" },
  { icon: <AllInboxOutlinedIcon />, label: "user", link: "/users" },
  { icon: <ContactSupportOutlinedIcon />, label: "Leave", link: "/leave" },
];

export const Menubar = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box
      sx={{
        flex:'1',
        display: { xs: "none", md: "block" },
      
        backgroundSize: "cover", 
        bgcolor:'#16407A',
        position: 'relative',
         // 
      }}
    >
      <Box  sx={{
          position: "absolute", 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)", 
          zIndex: 1, // 
        }} >

      
      <Box sx={{height: "36%",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",p:'5%',m:'20',zIndex: 40}}>
      <img src={image} height="90%" style={{ margin: "12px" }} />
      </Box>
      <Divider />

      <Box sx={{height:'55%'}}>
        {open &&
          data.map((item) => (
            <RouterLink to={item.link} style={{ textDecoration: 'none' }} key={item.label}>
              <ListItemButton
                sx={{
                  height: "15%",
                  minWidth: 40,
                  color: "white",
                  "&:hover": {
                    bgcolor: '#00acc1', 
                  },
                  m:2
                  
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: "bold",
                    
                  }}
                />
              </ListItemButton>
            </RouterLink>
          ))}
      </Box>
      </Box>
    </Box>
  );
};
