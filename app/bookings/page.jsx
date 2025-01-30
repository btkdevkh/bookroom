import RoomCard from "@/components/RoomCard";
import getMyBookings from "../actions/getMyBookings";
import Heading from "@/components/Heading";
import Link from "next/link";
import CancelBookingButton from "@/components/CancelBookingButton";

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  const formatDate = (dateStr) => new Date(dateStr).toLocaleString("fr-FR");

  return (
    <>
      <Heading title="My bookings" />

      {bookings.length === 0 ? (
        <>
          <p className="">You have no bookings</p>
        </>
      ) : (
        <>
          {bookings.map((booking) => (
            <RoomCard key={booking.$id}>
              <div className="mb-2 px-4 py-2 rounded-md shadow-xl bg-gray-100 flex justify-between items-center text-black">
                <div>
                  <h3 className="font-bold text-lg">{booking.room_id.name}</h3>
                  <p>Check In: {formatDate(booking.check_in)}</p>
                  <p>Check Out: {formatDate(booking.check_out)}</p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/rooms/${booking.room_id.$id}`}
                    className="btn btn-primary btn-sm rounded-md text-white"
                  >
                    View
                  </Link>
                  <CancelBookingButton bookingId={booking.$id} />
                </div>
              </div>
            </RoomCard>
          ))}
        </>
      )}
    </>
  );
};

export default BookingsPage;
