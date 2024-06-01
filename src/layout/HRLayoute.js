import React from "react";
import { Menubar } from "../components/hr/Menubar";
import { Box, Stack } from "@mui/material";
import Home from "../Pages/hrPages/Home";
import { Outlet } from "react-router-dom";

export default function HRLayout({ children }) {
  return (
    <div className="layout">
      <Stack
        direction="row"
        height="100vh "
        width="100%"
        
      >
        <Menubar />
        <Box
          sx={{
            flex: 5,
            m: 1,
            display: "flex",
          }}
        >
          {children}
        </Box>
      </Stack>
    </div>
  );
}
