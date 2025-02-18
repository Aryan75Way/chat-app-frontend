import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useEffect, useRef, useState } from "react";
import { Chat, People, Person } from "@mui/icons-material";
import MyGroups from "../components/MyGroups";
import Profile from "../components/Profile";
import Chats from "../components/Chats";
import TopBar from "../components/TopBar";

export default function Home() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();
  const [value, setValue] = useState(1);
    const ref = useRef<HTMLDivElement>(null);
  
    const renderTabContent = () => {
      switch (value) {
        case 0:
          return <MyGroups/>
        case 1:
          return <Chats/>
        case 2:
          return <Profile/>
      }
    };
  

  useEffect(() => {
    if (!isAuthenticated) {
      navigation("/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated)
  return (
    <Box sx={{ pb: 7 }} ref={ref}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      overflowY: 'hidden',
    }}
    >
      <CssBaseline />
      <TopBar/>
      <div style={{
        height: '85%',
        width: '100%',
      }}>
        {renderTabContent()}
      </div>
      <Paper elevation={1}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "white",
          height: '13%',
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="My Groups" icon={<People />} />
          <BottomNavigationAction label="Chat" icon={<Chat />} />
          <BottomNavigationAction label="Profile" icon={<Person />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
