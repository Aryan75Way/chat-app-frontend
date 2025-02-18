import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function RootLayout() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation("/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated)
    return (
  <div 
  style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      width:"100vw",
      
    }}
  > 
      <Box
        height="80vh"
        width="50vw"
        position="relative"
        borderRadius="5px"
      >
        <Outlet />
      </Box>
      </div>
    );
}
