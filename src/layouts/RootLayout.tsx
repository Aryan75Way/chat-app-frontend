import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";
import TopBar from "@/components/TopBar";

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
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-96 w-72 max-sm:h-screen max-sm:w-full border rounded flex flex-col justify-between">
          <TopBar />
          <Outlet />
          
        </div>
      </div>
    );
}
