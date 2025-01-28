import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";
import Link from "next/link";
import Image from "next/image";
import getRooms from "./actions/getRooms";

const HomePage = async () => {
  const rooms = await getRooms();

  return (
    <>
      <Heading title="Available Rooms" />

      {rooms.length > 0 ? (
        rooms.map((room) => (
          <RoomCard key={room.$id} room={room}>
            <div className="flex gap-4">
              <Image
                src={`/images/rooms/${room.image}`}
                alt={room.name}
                width={100}
                height={100}
                priority
                className="rounded-md"
              />

              <div>
                <h3 className="font-bold">{room.name}</h3>
                <p>Address: {room.address}</p>
                <p>Availability: {room.availability}</p>
                <p>Price: ${room.price_per_hour}/hour</p>
              </div>
            </div>

            <Link
              href={`/rooms/${room.$id}`}
              className="btn btn-ghost bg-slate-800 text-white"
            >
              View
            </Link>
          </RoomCard>
        ))
      ) : (
        <p>No rooms available</p>
      )}
    </>
  );
};

export default HomePage;
