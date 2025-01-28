"use client";

import createRoom from "@/app/actions/createRoom";
import Heading from "@/components/Heading";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const AddRoomPage = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(createRoom, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room created");
      router.push("/");
    }
  }, [state]);

  return (
    <>
      <Heading title="Add a Room" />

      <form className="flex flex-col gap-4" action={formAction}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Room Name"
            name="room-name"
          />
        </label>

        <label className="flex items-center gap-2">
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            name="description"
          ></textarea>
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="square-feet"
            placeholder="Square Feet"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="capacity"
            placeholder="Capacity"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="price-per-hour"
            placeholder="Price/Hour"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="address"
            placeholder="Address"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="location"
            placeholder="Location"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="availability"
            placeholder="Availability"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="amenities"
            placeholder="Amenities"
          />
        </label>
        <label className="form-control">
          <span className="ml-1 mb-2 text-1lg">Pick an image</span>
          <input
            type="file"
            className="file-input file-input-bordered grow"
            name="image"
          />
        </label>

        <button className="btn btn-primary text-white">Add Room</button>
      </form>
    </>
  );
};

export default AddRoomPage;
