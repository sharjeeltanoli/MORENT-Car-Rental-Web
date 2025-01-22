
import BookingSection from "../components/BookingSection"
import Products from "../components/sanityPrdoucts"
import Selectbox from "../components/Selectbox"

const Category = () => {
  return (
    <div className="flex ">
<div className=" md:flex md:flex-col w-1/5 bg-white hidden md:hover"> 
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
<div className="w-4/5">
    <div> <BookingSection/>   </div>
   {/* Data from sanity*/}
         <Products/>
         </div>


    </div>
  )
}

export default Category