import Heading from "./Heading";

const BookingForm = () => {
  return (
    <form>
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
