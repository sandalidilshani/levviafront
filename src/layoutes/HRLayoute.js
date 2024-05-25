import React from "react";
import { Menubar } from "../components/hr/Menubar";
import { Box, Stack } from "@mui/material";

export default function Layoute({ children }) {
  return (
    <div className="layoute">
      <Stack direction="row" justifyContent="space-between" height='100vh ' width='100%'>
   
        <Menubar />
        <Box sx={{ flex: 5 ,justifyContent:"center",p:2, m:2, display:'flex'}}>
          {children}
        </Box>
      
  
      </Stack>
    </div>
  );
}
