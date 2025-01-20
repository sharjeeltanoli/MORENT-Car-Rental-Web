import Image from "next/image"
import Switch from "/public/Switch.png"
const BookingSection = () => {

  return (
    <main className="flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto px-4 "> 
        <div className="bg-white border rounded-md w-full md:w-1/3 p-4">
<h3>Pickup</h3>
<div className="flex">
  <ul className=" border-r-2 flex-1">
    <li className="font-semibold">Location</li>
    <li>select </li>
  </ul>
  <ul className=" border-r-2 flex-1 pl-2">
    <li className="font-semibold">Date</li>
    <li>select</li>
  </ul>
  <ul className="flex-1 pl-2">
    <li className="font-semibold">Time</li>
    <li>select </li>
  </ul>
  </div>   
    </div>
<span>
<Image src={Switch} alt="Switch up down" />
</span>
<div className="bg-white border rounded-md w-full md:w-1/3 p-4">
<h3>Dropoff</h3>
<div className="flex">
  <ul className=" border-r-2 flex-1">
    <li className="font-semibold">Location</li>
    <li>select </li>
  </ul>
  <ul className=" border-r-2 flex-1 pl-2">
    <li className="font-semibold">Date</li>
    <li>select</li>
  </ul>
  <ul className="flex-1 pl-2">
    <li className="font-semibold">Time</li>
    <li>select </li>
  </ul>
  </div>   
    </div>
 </main>
 
  )
}

export default BookingSection