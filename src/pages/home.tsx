import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";
import CreateGroup from "@/components/CreateGroup";
import AllGroups from "@/components/AllGroups";

export default function Home() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();
  

  useEffect(() => {
    if (!isAuthenticated) {
      navigation("/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated)
  return (
    <div className="h-full p-2 overflow-y-auto">
    <CreateGroup/>
    <AllGroups/>
    </div>
  );
}
