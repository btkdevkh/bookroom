function RoomCard({ children, room }) {
  return (
    <div className="mb-2 p-4 rounded-md shadow-xl bg-gray-900 flex justify-between items-center">
      {children}
    </div>
  );
}

export default RoomCard;
