"use client";

import cancelBooking from "@/app/actions/cancelBooking";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CancelBookingButton = ({ bookingId }) => {
  const router = useRouter();

  const handleCancelBooking = async () => {
    try {
      await cancelBooking(bookingId);
      toast.success("Booking canceled");

      router.push("/bookings");
    } catch (error) {
      console.log("Error :", error);

      toast.error(response.error);
      router.push("/bookings");
    }
  };

  return (
    <button
      className="btn btn-error btn-sm rounded-md text-white"
      onClick={handleCancelBooking}
    >
      Cancel
    </button>
  );
};

export default CancelBookingButton;
