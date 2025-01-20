import BookingSection from "./components/BookingSection"
import ButtonC from "./components/Button"
import HeroSection from "./components/HeroSection"
import Selectbox from "./components/Selectbox"
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BookingSection/>
      <Selectbox/>
      <div className=" text-center my-8">
        <ButtonC text={"Show more Cars"} link={"/category"} />
      </div>
      
   
    </div>
  )
}

export default Home