import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Chat from "./pages/chat";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
