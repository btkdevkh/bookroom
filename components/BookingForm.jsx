"use client";

import { useActionState, useEffect } from "react";
import bookRoom from "@/app/actions/bookRoom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookingForm = ({ roomId }) => {
  const router = useRouter();
  const [state, formAction] = useActionState(bookRoom, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("You have successfully booked a room");
      router.push("/bookings");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="room-id" value={roomId} />

      {/* Check-in Date & Time */}
      <div className="flex gap-4">
        <div className="w-full">
          <label
            htmlFor="check-in"
            className="block text-sm font-medium text-gray-700"
          >
            Check-in Date
          </label>
          <input
            type="date"
            name="check-in"
            id="check-in"
            className="input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="check-in-time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-in Time
          </label>
          <input
            type="time"
            name="check-in-time"
            id="check-in-time"
            className="input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <br />

      {/* Check-out Date & Time */}
      <div className="flex gap-4">
        <div className="w-full">
          <label
            htmlFor="check-out"
            className="block text-sm font-medium text-gray-700"
          >
            Check-out Date
          </label>
          <input
            type="date"
            name="check-out"
            id="check-out"
            className="input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="check-out-time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-out Time
          </label>
          <input
            type="time"
            name="check-out-time"
            id="check-out-time"
            className="input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <br />

      <button className="btn btn-success w-full text-white">Book Room</button>
    </form>
  );
};

export default BookingForm;
