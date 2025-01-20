import BookingSection from "./components/BookingSection"
import ButtonC from "./components/Button"
import HeroSection from "./components/HeroSection"
import Products from "./components/sanityPrdoucts"
import Selectbox from "./components/Selectbox"
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Selectbox/>

      {/* Data from sanity*/}
      <Products/>

      {/* Filters Products */}
      <div className=" text-center my-8">
        <ButtonC text={"Show more Cars"} link={"/category"} />
      </div>
      
   
    </div>
  )
}

export default Home