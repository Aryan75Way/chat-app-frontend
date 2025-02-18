import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";

function AuthLayout() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigation("/");
    }
  }, [isAuthenticated]);
  
  return <Outlet />;
}

export default AuthLayout;
