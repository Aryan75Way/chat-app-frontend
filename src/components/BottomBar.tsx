import { Send } from "@mui/icons-material"
import { Input } from "./ui/input"

const BottomBar = () => {
  return (
    <div className="h-14 flex items-center px-2">
      <Input
      type="text"
      placeholder="Message..."
      className="border-none h-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:ring-offset-gray-100 bg-none p-0"
      />
      <Send/>
    </div>
  )
}

export default BottomBar
