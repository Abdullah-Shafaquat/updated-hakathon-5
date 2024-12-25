"use client"
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdPeopleOutline } from 'react-icons/md';
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react";
import BookingForm from "./pick&drops";

export default function Hero() {
  const [likedCars, setLikedCars] = useState(
    new Array(12).fill(false)  // Initializing with 12 cars, all unliked
  );

  const toggleLike = (index: number) => {
    const updatedLikes = [...likedCars];
    updatedLikes[index] = !updatedLikes[index];
    setLikedCars(updatedLikes);
  };

  const cars = [
    { id : 1,name: "Koenigsegg", type: "Sport", image: "/car.png" },
    { id : 2,name: "Nissan GT-R", type: "Sport", image: "/car1.png" },
    { id : 3,name: "Rolls-Royce", type: "Sedan", image: "/car2.png" },
    { id : 4,name: "All New Rush", type: "SUV", image: "/car3.png" },
    { id : 5,name: "CR-V", type: "SUV", image: "/car4.png" },
    { id : 6,name: "All New Terios", type: "SUV", image: "/car5.png" },
    { id : 7,name: "MG ZX Exclusive", type: "SUV", image: "/car6.png" },
    { id : 8,name: "New MG ZS", type: "SUV", image: "/car7.png" },
    { id : 9,name: "Koenigsegg", type: "Sport", image: "/car.png" },
    { id : 11,name: "Nissan GT-R", type: "Sport", image: "/car1.png" },
    { id : 11,name: "Rolls-Royce", type: "Sedan", image: "/car2.png" },
    { id : 12,name: "All New Rush", type: "SUV", image: "/car3.png" },
  ];

  return (
    <div className="bg-[#f6f7f9]  p-4 sm:p-6 lg:p-20 flex flex-col gap-10  font-[family-name:var(--font-geist-sans)] mt-[-0.5cm]">
<section className="w-full flex flex-wrap sm:flex-nowrap gap-4 justify-center items-center">
  <img
    src="/bg2.png"
    alt="Background 1"
    className="w-full sm:w-1/2 h-auto object-cover"
  />
  <img
    src="/bg1.png"
    alt="Background 2"
    className="w-full sm:w-1/2 h-auto object-cover"
  />
</section>

<section className=" px-4 sm:px-8 lg:px-16  ">
  <BookingForm />
</section>


  
    <section className="popular w-full flex flex-col gap-4">
      <div className="first w-full flex items-center justify-between">
        <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>
        <Link href={"/categories"}>
          <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
            View All
          </h1>
        </Link>
      </div>
  
      <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div className="flex items-center space-x-2">
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
    </section>
  
    <section className="button w-full text-center">
      <Link href={"/morecars"}>
        <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
          Show More Cars
        </button>
      </Link>
    </section>
  </div>
  
  );
}

