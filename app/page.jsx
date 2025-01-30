import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";
import Link from "next/link";
import Image from "next/image";
import getRooms from "./actions/getRooms";
import getImageUrl from "@/lib/helpers/geImageUrl";

const HomePage = async ({ searchParams }) => {
  const rooms = await getRooms();
  const query = searchParams.query;

  const filterSearchedRooms = rooms?.filter((room) =>
    query && query !== ""
      ? room.name?.toLowerCase()?.includes(query?.toLowerCase())
      : !room.name?.toLowerCase()?.includes(query?.toLowerCase())
  );

  return (
    <>
      <Heading title="Available Rooms" />

      {filterSearchedRooms.length > 0 ? (
        filterSearchedRooms.map((room) => (
          <RoomCard key={room.$id} room={room}>
            <div className="mb-2 p-4 rounded-md shadow-xl bg-gray-900 flex justify-between items-center">
              <div className="flex gap-4">
                <Image
                  src={
                    room.image
                      ? `${getImageUrl(room.image)}`
                      : `/images/rooms/no-image.jpg`
                  }
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
            </div>
          </RoomCard>
        ))
      ) : (
        <p>No rooms available</p>
      )}
    </>
  );
};

export default HomePage;
