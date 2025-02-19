import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { useCreateGroupMutation } from "@/services/api";

const CreateGroup = () => {
  const [createGroup] = useCreateGroupMutation();
    
  const [group, setGroup] = useState({ name: "", isPrivate: false });

  const handleCreateGroup = async () => {  
    const admin = localStorage.getItem("user_id")
    if (admin === null) {
      console.log("[NO ADMIN]");
      return;
    }
    const result = await createGroup({ name:group.name, isPrivate:group.isPrivate, adminId: admin }).unwrap();
    console.log(result);
  };

  return (
      <div className="h-24 border rounded-lg w-full p-2 space-y-2 shadow-sm">
        <Input
          type="text"
          placeholder="Group Name"
          value={group.name}
          onChange={(e) => setGroup({ ...group, name: e.target.value })}
          className="border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:ring-offset-gray-100 bg-zinc-100  w-full"
        />
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              <Checkbox 
                id="terms"
                checked={group.isPrivate}
                onChange={() => setGroup({ ...group, isPrivate: !group.isPrivate })}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                private
              </label>
            </div>
            <Button size={"sm"} onClick={handleCreateGroup}>Create Group</Button>
          </div>
        </div>
      </div>
  );
};

export default CreateGroup;
