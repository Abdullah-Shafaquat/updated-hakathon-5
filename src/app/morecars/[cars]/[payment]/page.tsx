import React from "react";
import { IoMdStarHalf } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";



async function BookingForm({
  params,
}: {
  params: Promise<{ payment: string }>
})  {
  const payment = (await params).payment
    console.log(payment);
  
    const selectedCar = Cars.find((p) => p.id === parseInt(payment, 10));
  return (
    <div>
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Billing Info Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Billing Info</h2>
          <span className="text-gray-500 text-sm">Step 1 of 4</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">Please enter your billing info</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Address"
            className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your City"
            className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Rental Info Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Rental Info</h2>
          <span className="text-gray-500 text-sm">Step 2 of 4</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">Please select your rental date</p>

        {/* Pick-Up Section */}
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rental"
              className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
              defaultChecked
            />
            <span className="text-sm">Pick-Up</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Your City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
            <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Your Date</option>
              <option>Date 1</option>
              <option>Date 2</option>
            </select>
            <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Your Time</option>
              <option>Time 1</option>
              <option>Time 2</option>
            </select>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rental"
              className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm">Drop-Off</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Your City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
            <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Your Date</option>
              <option>Date 1</option>
              <option>Date 2</option>
            </select>
            <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Your Time</option>
              <option>Time 1</option>
              <option>Time 2</option>
            </select>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-gray-50 min-h-screen p-6 lg:mt-[-4cm]">
      {/* Billing Info Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <div className=" justify-between items-center mb-4">
        {/* Step 3 of 4: Payment Method */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
          <p className="text-sm text-gray-500 mb-4">Please enter your payment method</p>

          <div className="space-y-4">
            <label className=" border rounded-lg p-4 flex items-center cursor-pointer">
              <input type="radio" name="payment" className="mr-3" defaultChecked />
              <span className="flex-1">
                <div className="flex justify-between">
                  <span>Credit Card</span>
                  <span className="flex space-x-1">
                    <img src="/visa.jpg" alt="Visa" className="h-5" />
                    <img src="/Mastercard.svg" alt="MasterCard" className="h-5" />
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="bordertext-sm w-full p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Expiration Date (MM/YY)"
                    className="border rounded p-2 w-full text-sm "
                  />
                  <input
                    type="text"
                    placeholder="Card holder"
                    className="border rounded p-2 w-full text-sm"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border rounded p-2 w-full text-sm"
                  />
                </div>
              </span>
            </label>

            <label className=" border rounded-lg p-4 flex items-center cursor-pointer">
                <input type="radio" name="payment" className="mr-3" />
                <span className="flex-1">PayPal</span>
                <div className="ml-auto">
                  <img src="/PayPal.png" alt="PayPal" className="h-5" />
                </div>
              </label>


              <label className=" border rounded-lg p-4 flex items-center cursor-pointer">
  <input type="radio" name="payment" className="mr-3" />
  <span className="flex-1">Bitcoin</span>
  <div className="ml-auto">
    <img src="/bitcoin.png" alt="Bitcoin" className="h-8 w-20" />
  </div>
</label>

          </div>
        </div>

        {/* Step 4 of 4: Confirmation */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Confirmation</h2>
          <p className="text-sm text-gray-500 mb-4">
            We are getting to the end. Just a few clicks and your rental is ready.
          </p>

          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-sm">I agree with sending marketing and newsletter emails. No spam, promised!</span>
            </label>

            <label className="flex items-center space-x-3">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-sm">
                I agree with our terms and conditions and privacy policy.
              </span>
            </label>
          </div>
        </div>

        <button className=" bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Rent Now
        </button>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>All your data are safe</p>
        </div>
      </div>
    </div>
    </div>














    <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 lg:mt-[-5cm]">
  <div className="max-w-3xl mx-auto bg-white p-6">
    <h2 className="text-2xl font-semibold mb-2">Rental Summary</h2>
    <p className="text-sm text-gray-500 mb-4">
      Prices may change depending on the length of the rental and the price of your rental car.
    </p>

    <div className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
      <img
        src={selectedCar?.image}
        alt="Nissan GT-R"
        className="w-full sm:w-1/3 h-auto object-cover rounded-md"
      />
      <div className="sm:w-2/3">
        <h3 className="text-lg font-semibold">{selectedCar?.name}</h3>
        <div className="text-sm text-gray-500 flex items-center">
          <div className="text-yellow-500 mr-1">
            <div className="flex space-x-1 text-yellow-500">
              <MdOutlineStar size={20} />
              <MdOutlineStar size={20} />
              <MdOutlineStar size={20} />
              <MdOutlineStar size={20} />
              <IoMdStarHalf size={20} />
            </div>
          </div>
          440+ Reviews
        </div>
      </div>
    </div>

    <hr className="my-4" />

    <div className="flex justify-between text-sm mb-2">
      <span>Subtotal</span>
      <span>{selectedCar?.price}</span>
    </div>
    <div className="flex justify-between text-sm mb-4">
      <span>Tax</span>
      <span>$0</span>
    </div>

    <div className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Apply promo code"
        className="border rounded-l px-4 py-2 w-full sm:w-2/3 text-sm"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-r text-sm hover:bg-blue-700 w-full sm:w-auto">
        Apply now
      </button>
    </div>

    <div className="flex justify-between items-center font-semibold text-lg mb-4">
      <span>Total Rental Price</span>
      <span className="text-blue-600">{selectedCar?.price}</span>
    </div>
    <p className="text-sm text-gray-500">
      Overall price and includes rental discount
    </p>
  </div>
</div>



   
    </div>
  );
};

export default BookingForm;


interface Car {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
  price: string;
  capacity: string;
  steering: string;
  gasoline: string;
}



const Cars:Car[] = [
    { 
      id: 1, 
      name: "Koenigsegg", 
      type: "Sport", 
      image: "/car.png", 
      description: "The Koenigsegg is a high-performance sports car, known for its incredible speed and cutting-edge design.",
      price: "$2,500,000",
      capacity: "2 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 2, 
      name: "Nissan GT-R", 
      type: "Sport", 
      image: "/car1.png", 
      description: "The Nissan GT-R is a legendary Japanese sports car, famous for its powerful engine and advanced technology.",
      price: "$115,000",
      capacity: "4 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 3, 
      name: "Rolls-Royce", 
      type: "Sedan", 
      image: "/car2.png", 
      description: "Rolls-Royce is the epitome of luxury and comfort, offering a premium experience with world-class craftsmanship.",
      price: "$450,000",
      capacity: "5 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 4, 
      name: "All New Rush", 
      type: "SUV", 
      image: "/car3.png", 
      description: "The All New Rush is a stylish SUV that combines robust performance with sleek design for family adventures.",
      price: "$30,000",
      capacity: "7 persons",
      steering: "Power Steering",
      gasoline: "Regular"
    },
    { 
      id: 5, 
      name: "CR-V", 
      type: "SUV", 
      image: "/car4.png", 
      description: "Honda CR-V is a reliable, family-friendly SUV that offers a spacious interior and great fuel efficiency.",
      price: "$35,000",
      capacity: "5 persons",
      steering: "Power Steering",
      gasoline: "Regular"
    },
    { 
      id: 6, 
      name: "All New Terios", 
      type: "SUV", 
      image: "/car5.png", 
      description: "The All New Terios is a compact SUV that combines versatility with off-road capabilities, perfect for adventurous journeys.",
      price: "$22,000",
      capacity: "5 persons",
      steering: "Power Steering",
      gasoline: "Regular"
    },
    { 
      id: 7, 
      name: "MG ZX Exclusive", 
      type: "SUV", 
      image: "/car6.png", 
      description: "MG ZX Exclusive is a premium SUV known for its modern technology, safety features, and stylish looks.",
      price: "$28,000",
      capacity: "5 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 8, 
      name: "New MG ZS", 
      type: "SUV", 
      image: "/car7.png", 
      description: "The New MG ZS is an affordable compact SUV with great value, offering advanced tech features and a comfortable ride.",
      price: "$18,000",
      capacity: "5 persons",
      steering: "Power Steering",
      gasoline: "Regular"
    },
    { 
      id: 9, 
      name: "Koenigsegg", 
      type: "Sport", 
      image: "/car.png", 
      description: "The Koenigsegg is a high-performance sports car, known for its incredible speed and cutting-edge design.",
      price: "$2,500,000",
      capacity: "2 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 10, 
      name: "Nissan GT-R", 
      type: "Sport", 
      image: "/car1.png", 
      description: "The Nissan GT-R is a legendary Japanese sports car, famous for its powerful engine and advanced technology.",
      price: "$115,000",
      capacity: "4 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 11, 
      name: "Rolls-Royce", 
      type: "Sedan", 
      image: "/car2.png", 
      description: "Rolls-Royce is the epitome of luxury and comfort, offering a premium experience with world-class craftsmanship.",
      price: "$450,000",
      capacity: "5 persons",
      steering: "Power Steering",
      gasoline: "Premium"
    },
    { 
      id: 12, 
      name: "All New Rush", 
      type: "SUV", 
      image: "/car3.png", 
      description: "The All New Rush is a stylish SUV that combines robust performance with sleek design for family adventures.",
      price: "$30,000",
      capacity: "7 persons",
      steering: "Power Steering",
      gasoline: "Regular"
    },
];