"use client";

import deleteRoom from "@/app/actions/deleteRoom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteRoomButton = ({ roomId }) => {
  const router = useRouter();

  const handleDeleteRoom = async () => {
    try {
      await deleteRoom(roomId);
      toast.success("Room deleted");
      router.push("/rooms/my");
    } catch (error) {
      console.log("Error :", error);
      toast.error(response.error);
      router.push("/rooms/my");
    }
  };

  return (
    <button
      className="btn btn-error btn-sm rounded-sm text-white"
      onClick={handleDeleteRoom}
    >
      Delete
    </button>
  );
};

export default DeleteRoomButton;
