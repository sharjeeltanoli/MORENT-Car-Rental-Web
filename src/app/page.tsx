
import { client } from "../sanity/lib/client";
import CarList from "./components/CarList";
import BookingSection from "./components/BookingSection"
import ButtonC from "./components/Button"
import HeroSection from "./components/HeroSection"

interface Vehicle {
  _id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: string; 
  transmission: string;
  seatingCapacity: number; 
  pricePerDay: string; 
  originalPrice?: string; 
  tags?: string[]; 
}

const Home = async () => {

const query = async () => {
    const data = await client.fetch(`*[_type == "car"]`);
    return data;
};
const vehicles: Vehicle[] = await query();

// Filter vehicles by tags
const popularCars = vehicles.filter(items => items.tags && items.tags.includes("popular"));
  const recommendedCars = vehicles.filter(items => items.tags && items.tags.includes("recommended"));



  return (
    <div>
      <div>
      <HeroSection/>
      <BookingSection/>
      </div>

      <div className="max-w-screen-xl mx-auto px-2">
      {/* Popular Cars Section */}
      <h2 className="text-2xl font-bold my-4 ml-4">Popular Cars</h2>
      <CarList vehicles={popularCars} />

      {/* Recommended Cars Section */}
      <h2 className="text-2xl font-bold my-4 ml-4">Recommended Cars</h2>
      <CarList vehicles={recommendedCars} />
    </div>



      <div className=" text-center my-8">
        <ButtonC text={"Show more Cars"} link={"/products"} />
      </div>
    </div>
  )
}

export default Home