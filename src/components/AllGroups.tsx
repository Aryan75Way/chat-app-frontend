import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface GroupType {
  adminId: string;
  createdAt: string;
  id: string;
  isPrivate: boolean;
  name:string;
}
const AllGroups = () => {
  const [data, setData] = useState<GroupType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/groups", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data)
      );
      console.log(data);
      
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((group, index) => (
        <Link to={`/chat/${group.name}`} key={group.id} className="flex flex-col items-center justify-center ">
          <div
            key={index}
            className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl relative"
          >
            {index + 1}
          {group.isPrivate && <Shield className="text-[#00dd00] absolute -bottom-1 -right-1" fill="#00dd00" />}
          </div>
          <p>{group.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default AllGroups;
