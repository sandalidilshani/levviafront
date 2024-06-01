import React from "react";
import { Menubar } from "../components/user/Menubar/Menubar";
import { Box, Stack } from "@mui/material";
import Feed from "../components/user/Feed";
import{Sidebar}from "../components/user/Sidebar"
import Pending from "../Pages/userPages/Pending";

export default function Layoute({ children }) {
  return (
    <div className="layoute">
      <Stack direction="row" justifyContent="space-between" height='100vh'>
   
        <Menubar />
        <Box sx={{ flex: 5 ,justifyContent:"center",p:2, m:2, display:'flex'}}>
         <Pending></Pending>
        </Box>
        <Sidebar />
  
      </Stack>
    </div>
  );
}
