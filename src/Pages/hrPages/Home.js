import React, { useState } from "react";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Dns from "@mui/icons-material/Dns";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import image from "../../components/images/logo.png";

const data = [
  { icon: <DashboardCustomizeOutlinedIcon />, label: "DashBoard", link: "/" },
  { icon: <SendOutlinedIcon />, label: "Pending", link: "/pending" },
  { icon: <Dns />, label: "History", link: "/history" },
  { icon: <AllInboxOutlinedIcon />, label: "User", link: "/users" },
  { icon: <ContactSupportOutlinedIcon />, label: "Leave", link: "/leave" },
];

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ display: "flex", width: "80%", height: "80vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {open &&
            data.map((item) => (
              <RouterLink
                to={item.link}
                style={{ textDecoration: "none" }}
                key={item.label}
              >
                <ListItemButton
                  sx={{
                    height: "100%",
                    width: "100%",
                    color: "black",
                    m: 2,
                    "&:hover": {
                      bgcolor: "#16407a",
                      width:'100%',
                      color:"white"

                    
                    },
                   
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              </RouterLink>
            ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            backgroundColor: "rgb(22, 64, 122)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "120%" }}
            image={image}
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Box>
  );
}
