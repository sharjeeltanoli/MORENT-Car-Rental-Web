import BookingSection from "./components/BookingSection"
import ButtonC from "./components/Button"
import HeroSection from "./components/HeroSection"
import SanityProducts from "./components/sanityPrdoucts"
const Home = () => {
  return (
    <div>
      <div>
      <HeroSection/>
      <BookingSection/>
      </div>
      <SanityProducts/>
      <div className=" text-center my-8">
        <ButtonC text={"Show more Cars"} link={"/products"} />
      </div>
    </div>
  )
}

export default Home