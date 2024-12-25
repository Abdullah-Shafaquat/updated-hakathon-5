// import React from "react";
// import { GoArrowDown } from "react-icons/go";
// import { GoArrowUp } from "react-icons/go";


// const BookingForm: React.FC = () => {
//   return (
//     <div className="lg:flex sm:flex-col items-center justify-center gap-12 p-8 bg-gray-100">
//       {/* Pick-Up Section */}
//       <div className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-6 w-full lg:w-[45%] sm:w-full sm:px-4">
//         <div className="flex items-center gap-2">
//           <input
//             type="radio"
//             id="pickup"
//             name="bookingType"
//             className="text-blue-500"
//             defaultChecked
//           />
//           <label htmlFor="pickup" className="font-medium text-gray-700">
//             Pick - Up
//           </label>
//         </div>
//         <div className="flex gap-2 sm:flex-col sm:gap-6">
//           <div className="flex flex-col w-1/3 sm:w-full sm:px-2">
//             <label className="font-medium text-gray-600">Locations</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
//               <option>Select your city</option>
//             </select>
//           </div> 
//           <div className="flex flex-col w-1/3 sm:w-full sm:px-2">
//             <label className="font-medium text-gray-600">Date</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
//               <option>Select your date</option>
//             </select>
//           </div>
//           <div className="flex flex-col w-[100px] sm:w-full sm:px-2">
//             <label className="font-medium text-gray-600">Time</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
//               <option>Select your Time</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Swap Button */}
//       <div className="flex items-center justify-center my-6 sm:my-4">
//         <button
//           className="w-14 h-14 bg-blue-500 text-white z-10 rounded-xl shadow-md flex items-center justify-center"
//           aria-label="Swap Pick-Up and Drop-Off"
//         >
//           <GoArrowDown size={24} />
//           <GoArrowUp size={24} />
//         </button>
//       </div>

//       {/* Drop-Off Section */}
//       <div className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-6 w-full lg:w-[45%] sm:w-full sm:px-4">
//         <div className="flex items-center gap-2">
//           <input
//             type="radio"
//             id="dropoff"
//             name="bookingType"
//             className="text-blue-500"
//           />
//           <label htmlFor="dropoff" className="font-medium text-gray-700">
//             Drop - Off
//           </label>
//         </div>
//         <div className="flex gap-4 sm:flex-col sm:gap-6">
//           <div className="flex flex-col w-1/3 sm:w-full sm:px-2">
//             <label className="font-medium text-gray-600">Locations</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
//               <option>Select your city</option>
//             </select>
//           </div>
//           <div className="flex flex-col w-1/3 sm:w-full sm:px-2">
//             <label className="font-medium text-gray-600">Date</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
//               <option>Select your date</option>
//             </select>
//           </div>
//           <div className="flex flex-col w-[100px] sm:w-full sm:px-2">
//             <label className="font-medium text-gray-600">Time</label>
//             <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
//               <option>Select your Time</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;





// import React from "react";
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";

const BookingForm: React.FC = () => {
  return (
    <div className="lg:flex items-center sm:grid sm:grid-cols-1 justify-center gap-12 p-8 bg-gray-100">
      {/* Pick-Up Section */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6 w-full lg:w-[45%]">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="pickup"
            name="bookingType"
            className="text-blue-500"
            defaultChecked
          />
          <label htmlFor="pickup" className="font-medium text-gray-700">
            Pick - Up
          </label>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/3">
            <label className="font-medium text-gray-600">Locations</label>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option>Select your city</option>
            </select>
          </div>
          <div className="flex flex-col w-1/3">
            <label className="font-medium text-gray-600">Date</label>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option>Select your date</option>
            </select>
          </div>
          <div className="flex flex-col lg:w-[100px] w-1/3">
                <label className="font-medium text-gray-600">Time</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
                  <option>Select your Time</option>
                </select>
              </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex items-center justify-center">
        <button
          className="w-14 h-14 bg-blue-500 text-white z-10 rounded-xl shadow-md flex items-center justify-center"
          aria-label="Swap Pick-Up and Drop-Off"
        >
          <GoArrowDown size={24} />
          <GoArrowUp size={24} />
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6 w-full lg:w-[45%]">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="dropoff"
            name="bookingType"
            className="text-blue-500"
          />
          <label htmlFor="dropoff" className="font-medium text-gray-700">
            Drop - Off
          </label>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/3">
            <label className="font-medium text-gray-600">Locations</label>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option>Select your city</option>
            </select>
          </div>
          <div className="flex flex-col w-1/3">
            <label className="font-medium text-gray-600">Date</label>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option>Select your date</option>
            </select>
          </div>
          <div className="flex flex-col lg:w-[100px] w-1/3">
                <label className="font-medium text-gray-600">Time</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
                  <option>Select your Time</option>
                </select>
              </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

