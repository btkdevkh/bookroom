import getMyRooms from "@/app/actions/getMyRooms";
import DeleteRoomButton from "@/components/DeleteRoomButton";
import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getImageUrl from "@/lib/helpers/geImageUrl";
import Image from "next/image";
import Link from "next/link";

const MyRoomPage = async () => {
  const rooms = await getMyRooms();

  return (
    <>
      <Heading title="My Rooms" />

      {rooms.length > 0 ? (
        rooms.map((room) => (
          <RoomCard key={room.$id} room={room}>
            <div className="mb-2 p-2 rounded-sm shadow-xl bg-gray-900 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <Image
                  src={
                    room.image
                      ? `${getImageUrl(room.image)}`
                      : `/images/rooms/no-image.jpg`
                  }
                  alt={room.name}
                  width={50}
                  height={50}
                  priority
                  className="rounded-sm"
                />

                <div>
                  <h3 className="font-bold">{room.name}</h3>
                </div>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/rooms/${room.$id}`}
                  className="btn btn-ghost btn-sm bg-primary rounded-sm text-white"
                >
                  View
                </Link>

                <DeleteRoomButton roomId={room.$id} />
              </div>
            </div>
          </RoomCard>
        ))
      ) : (
        <p>No rooms available</p>
      )}
    </>
  );
};

export default MyRoomPage;
