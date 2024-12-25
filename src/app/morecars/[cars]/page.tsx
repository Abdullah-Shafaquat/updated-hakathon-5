import Morecars from "@/app/components/car";
import Reviews from "@/app/components/reviews";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";
import { IoMdStarHalf } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";


  async function Car({
    params,
  }: {
    params: Promise<{ cars: string }>
  })  {
    const cars = (await params).cars
    const selectedcar = Cars.find((p) => p.id === parseInt(cars, 10));
  
    
    return (
        <div>
        <div className="flex"> 

            <Sidebar/>
<div className="max-w-4xl mx-auto  bg-cover bg-center rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mt-10 ">


  {/* Left Section: Car Details */}
  <div className="md:w-1/2  ">
  <div className="bg-[url('/bg3.png')] p-6 text-white  ">
    <h2 className="text-xl md:text-2xl font-bold mb-4">
      Sports car with the best design and acceleration
    </h2>
    <p className=" mb-6">
      Safety and comfort while driving a futuristic and elegant sports car.
    </p>
    <img 
      src={selectedcar?.image || '/placeholder.png'} 
      alt={selectedcar?.name} 
      className="w-full rounded-lg object-cover"
    /></div>
    {/* Thumbnails */}
    
  </div>

  {/* Right Section: Car Information */}
  <div className="md:w-1/2 p-6">
    {/* Car Name */}
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedcar?.name || "Car Name"}</h2>
    {/* Reviews */}
    <div className="flex items-center mb-4">
      <div  className="flex space-x-1 text-yellow-500">
      <MdOutlineStar size={20}/>
      <MdOutlineStar size={20}/>
      <MdOutlineStar size={20}/>
      <MdOutlineStar size={20}/>
      <IoMdStarHalf size={20}/>


      </div>
      <span className="text-gray-600 text-sm ml-2">440+ Reviews</span>
    </div>
    {/* Description */}
    <p className="text-gray-600 mb-4">
      {selectedcar?.description || "Car description goes here."}
    </p>
    {/* Car Specifications */}
    <div className="flex flex-wrap gap-4 text-gray-700 mb-6">
      <p><strong>Type Car:</strong> {selectedcar?.type || "Type"}</p>
      <p><strong>Capacity:</strong> {selectedcar?.capacity}</p>
      <p><strong>Steering:</strong> {selectedcar?.steering}</p>
      <p><strong>Gasoline:</strong> {selectedcar?.gasoline}</p>
    </div>
    {/* Pricing */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-lg font-bold text-blue-900">{selectedcar?.price} <span className="text-sm text-gray-500">/ day $100.00</span></p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
        <Link href={`/morecars/cars/${selectedcar?.id}`}>
        Rent Now</Link>
      </button>
      
    </div>
  
   
  </div> 
  
</div>


</div>
<Reviews/>
< Morecars/>
 
</div>


     );
}

export default Car;
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
