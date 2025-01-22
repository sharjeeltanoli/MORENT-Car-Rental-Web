import Image from "next/image"
import car1 from "/public/car1.png"
import car2 from "/public/car2.png"
import ButtonC from "./Button"


const HeroSection = () => {
    const Intro=[
        {   title: "The Best Platform for \n Car Rental",
            describtion: "Ease of Doing a Car rental safely \n and releable. Of course at low price.",
            image: <Image src={car1} alt="car Image for rent" />
        },
        {   title: "Easy way to rent a \n Car at low price",
            describtion: "Providing cheap car rental Services  \n and safe and comfortable facilities.",
            image: <Image src={car2} alt="car Image for rent" />
        }
    ]
    return (
        <div className="flex flex-col md:flex-row justify-center text-white my-8 mx-auto max-w-screen-xl">
    
    {
        Intro.map((Info) =>{
return(
<div className="bg-[url('bg.png')] bg-blue-500 border rounded-sm mx-4 my-4 px-4 flex-1">

    <h1 className="text-3xl whitespace-pre-line py-6">{Info.title}</h1>
    <p className="text-sm whitespace-pre-line">{Info.describtion}</p>
    <div className="mt-4"> <ButtonC text={"Rental Car"} link={"/products"} /> </div>
    <div className="justify-items-center"> {Info.image}</div>
    
    
</div>

)
        }
        )
    }
        </div>
      )
    } 
export default HeroSection