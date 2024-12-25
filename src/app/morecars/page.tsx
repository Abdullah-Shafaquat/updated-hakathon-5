"use client"
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Sidebar from "../components/sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdPeopleOutline } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";


function Morecares() {
     const [likedCars, setLikedCars] = useState(
        new Array(12).fill(false)  // Initializing with 12 cars, all unliked
      );
    
      const toggleLike = (index: number) => {
        const updatedLikes = [...likedCars];
        updatedLikes[index] = !updatedLikes[index];
        setLikedCars(updatedLikes);
      };

    const cars = [
        { id : 1,  name: "Koenigsegg", type: "Sport", image: "/car.png" },
        {  id : 2, name: "Nissan GT-R", type: "Sport", image: "/car1.png" },
        {  id : 3, name: "Rolls-Royce", type: "Sedan", image: "/car2.png" },
        {  id : 4, name: "All New Rush", type: "SUV", image: "/car3.png" },
        {  id : 5,  name: "CR-V", type: "SUV", image: "/car4.png" },
        {  id : 6,  name: "All New Terios", type: "SUV", image: "/car5.png" },
        { id : 7,  name: "MG ZX Exclusive", type: "SUV", image: "/car6.png" },
        { id : 8,  name: "New MG ZS", type: "SUV", image: "/car7.png" },
        { id : 9,  name: "Koenigsegg", type: "Sport", image: "/car.png" },
        { id : 10,  name: "Nissan GT-R", type: "Sport", image: "/car1.png" },
        {  id : 11, name: "Rolls-Royce", type: "Sedan", image: "/car2.png" },
        { id : 12,  name: "All New Rush", type: "SUV", image: "/car3.png" },
      ];
   

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="w-[2%] md:w-[200px] sm:w-[2%] h-full bg-white border-r border-gray-300">
  <Sidebar />
</div>


      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8 bg-gray-100">
        <div className="lg:flex items-center sm:grid sm:grid-cols-1 justify-center gap-12">
          {/* Pick-Up Section */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6 w-full lg:w-[40%]">
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
              className="w-14 h-14 bg-blue-500 text-white  rounded-xl shadow-md flex items-center justify-center"
              aria-label="Swap Pick-Up and Drop-Off"
            >
              <GoArrowDown size={20} />
              <GoArrowUp size={20} />
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6 w-full lg:w-[40%]">
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

         

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {cars.map((car, index) => (
          <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                {car.name}
                {likedCars[index] ? (
                  <AiFillHeart
                    className="text-red-500 cursor-pointer"
                    size={20}
                    onClick={() => toggleLike(index)}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-gray-500 cursor-pointer"
                    size={20}
                    onClick={() => toggleLike(index)}
                  />
                )}
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={car.image} alt={car.name} width={220} height={68} />
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon={faGasPump} className="text-gray-400" style={{ width: '20px', height: '20px' }} />
                <span className="text-sm">80L</span>
                <FontAwesomeIcon icon={faGalacticRepublic} className="text-gray-400" style={{ width: '20px', height: '20px' }} />
                <span className="text-sm">Manual</span>
                <MdPeopleOutline size={30} className="text-gray-400" />
                <span className="text-sm flex">2People</span>
              </div>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">
                <a href={`/morecars/${car.id}`}>Rent Now</a>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>



      </div>
    </div>
  );
}

export default Morecares;
