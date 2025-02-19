import { Chat } from "@mui/icons-material";
import { MoreOption } from "./MoreOption";

function TopBar() {

  return (
    <div className="border-b h-12 flex items-center justify-between px-2">
      <Chat/>
      <MoreOption/>
    </div>
    
  );
}
export default TopBar;
