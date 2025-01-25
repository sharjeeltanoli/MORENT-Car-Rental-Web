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
    <div className="flex ">
<div className=" md:flex md:flex-col w-1/6 bg-white hidden md:hover"> 
<form className="flex flex-col space-y-4 pl-4 text-slate-600">
  <h4 className="font-semibold text-lg">  </h4>
<label>   <input type="checkbox" name="Sports" value="Sports"/>  Sport            </label>
<label>   <input type="checkbox" name="SUV" value="SUV"/>  SUV                    </label>
<label>   <input type="checkbox" name="MPV" value="MPV"/>  MPV                    </label>
<label>   <input type="checkbox" name="Sedan" value="Sedan"/>  Sedan             </label>
<label>   <input type="checkbox" name="Coupe" value="Coupe"/>  Coupe             </label>
<label>   <input type="checkbox" name="Hatchback" value="Hatchback"/>  Hatchback  </label>
</form>

<form className="flex flex-col space-y-4 mt-8 pl-4 text-slate-600"> 
<h4 className="font-semibold text-lg">Capacity</h4>
<label>   <input type="checkbox" name="Sports" value="Sports"/>  2 Person         </label>
<label>   <input type="checkbox" name="SUV" value="SUV"/>  4 Person               </label>
<label>   <input type="checkbox" name="MPV" value="MPV"/>  6 Person               </label>
<label>   <input type="checkbox" name="Sedan" value="Sedan"/>  8 or more Person   </label>
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