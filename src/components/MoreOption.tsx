import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVert } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"

export function MoreOption() {
  const [position, setPosition] = useState("home")

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_id");
    window.location.reload();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVert/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link to="/"><DropdownMenuRadioItem value="home">Home</DropdownMenuRadioItem></Link>
          <Link to="/profile"><DropdownMenuRadioItem value="profile">Profile</DropdownMenuRadioItem></Link>
          <DropdownMenuRadioItem value="logout" onClick={handleLogout}>Logout</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
