import getRoom from "@/app/actions/getRoom";
import Back from "@/components/Back";
import BookingForm from "@/components/BookingForm";
import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getImageUrl from "@/lib/helpers/geImageUrl";
import Image from "next/image";

const RoomPage = async ({ params }) => {
  const { id } = await params;

  const room = await getRoom(id);

  return (
    <>
      <Heading title={room.name} />
      <Back title="Back to Rooms" />

      <RoomCard>
        <div className="mb-2 p-4 rounded-md shadow-xl bg-gray-900 flex justify-between items-center">
          <div className="flex gap-4">
            <Image
              src={
                room.image
                  ? `${getImageUrl(room.image)}`
                  : `/images/rooms/no-image.jpg`
              }
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
        </div>
      </RoomCard>
      <br />

      <h2 className="text-lg font-bold">Book this Room</h2>
      <br />

      <BookingForm roomId={room.$id} />
    </>
  );
};

export default RoomPage;
