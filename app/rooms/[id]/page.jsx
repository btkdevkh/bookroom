import getRoom from "@/app/actions/getRoom";
import Back from "@/components/Back";
import BookingForm from "@/components/BookingForm";
import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import Image from "next/image";

const RoomPage = async ({ params }) => {
  const { id } = await params;

  const room = await getRoom(id);

  return (
    <>
      <Heading title={room.name} />
      <Back title="Back to Rooms" />

      <RoomCard room={room}>
        <div className="flex gap-4">
          <Image
            src={`/images/rooms/${room.image}`}
            alt={room.name}
            width={200}
            height={100}
            priority
            className="rounded-md"
          />

          <div>
            <h3 className="font-bold">{room.name}</h3>
            <p>Address: {room.address}</p>
            <p>Availability: {room.availability}</p>
            <p>Price: ${room.price_per_hour}/hour</p>

            <br />
            <p>{room.description}</p>
          </div>
        </div>
      </RoomCard>
      <br />

      <h2 className="text-lg font-bold">Book this Room</h2>
      <br />

      <BookingForm />
    </>
  );
};

export default RoomPage;
