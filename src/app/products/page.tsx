import BookingSection from "../components/BookingSection"
import { client } from "../../sanity/lib/client";
import CarList from "../components/CarList";

const Category = async () => {
  const query = async () => {
    const data = await client.fetch(`*[_type == "car"]`);
    return data;
  };
  const vehicles = await query();

  return (
    <div className="flex">
    <div className="md:flex md:flex-col w-1/6 bg-white hidden md:block"> 
      <form className="flex flex-col space-y-4 pl-4 text-slate-600">
        <h4 className="font-semibold text-lg">Vehicle Type</h4>
        <label>
          <input type="checkbox" name="vehicleType" value="Sports" /> Sport
        </label>
        <label>
          <input type="checkbox" name="vehicleType" value="SUV" /> SUV
        </label>
        <label>
          <input type="checkbox" name="vehicleType" value="MPV" /> MPV
        </label>
        <label>
          <input type="checkbox" name="vehicleType" value="Sedan" /> Sedan
        </label>
        <label>
          <input type="checkbox" name="vehicleType" value="Coupe" /> Coupe
        </label>
        <label>
          <input type="checkbox" name="vehicleType" value="Hatchback" /> Hatchback
        </label>
      </form>
  
      <form className="flex flex-col space-y-4 mt-8 pl-4 text-slate-600"> 
        <h4 className="font-semibold text-lg">Capacity</h4>
        <label>
          <input type="checkbox" name="capacity" value="2" /> 2 Person
        </label>
        <label>
          <input type="checkbox" name="capacity" value="4" /> 4 Person
        </label>
        <label>
          <input type="checkbox" name="capacity" value="6" /> 6 Person
        </label>
        <label>
          <input type="checkbox" name="capacity" value="8+" /> 8 or more Person
        </label>
      </form>
    </div>

<div className="w-5/6">
    <div> <BookingSection/>   </div>

   {/* Data from sanity*/}
<div className="max-w-screen-xl mx-auto px-2">
      <h2 className="text-2xl font-bold my-4 text-center">All Cars</h2>
      <CarList vehicles={vehicles} />
</div>



         </div>


    </div>
  )
}

export default Category