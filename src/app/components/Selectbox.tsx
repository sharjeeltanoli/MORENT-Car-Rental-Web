import Image from "next/image"
import Heart from "/public/heart.png"
import RedHeart from "/public/heartred.png"
import koenigsegg from "/public/koenigsegg.png"
import nissan from "/public/nissan.png"
import rollsroyce from "/public/rollsroyce.png"
import allnewrush from "/public/allnewrush.png"
import crv from "/public/crv.png"
import terios from "/public/allnewterios.png"
import crvauto from "/public/crvauto.png"
import MGZXExclusive from "/public/mgzxexclusive.png"
import NewMGZX from "/public/newmgzs.png"
import MGZXExcite from "/public/mgzxexcite.png"
import MGZXAuto from "/public/newmgzsauto.png"
import gasstation from "/public/gasstation.png"
import gear from "/public/gear.png"
import profile from "/public/profile.png"
import ButtonC from "./Button"

const Selectbox = () => {
const Carbox=[
    {
        carname:"Koenigsegg",
        icon:<Image src={RedHeart} alt="Heart Icon"/>,
        type:"Sports",
        image:<Image src={koenigsegg} alt="Koenigsegg Car Image" />,
        fuel: "90L",
        gear: "manual",
        seats: "2 people ",
        rentperday: "$99.00/",
        discount: null
    },
    {
      carname:"Nissan GT-R",
      icon:<Image src={Heart} alt="Heart Icon"/>,
      type:"Sedan",
      image:<Image src={nissan} alt="nissan Car Image" />,
      fuel: "80L",
      gear: "manual",
      seats: "2 people ",
      rentperday: "$86.00/",
      discount: "$100.00/day"
  },
  {
    carname:"Rolls-Royce",
    icon:<Image src={RedHeart} alt="Heart Icon"/>,
    type:"Sports",
    image:<Image src={rollsroyce} alt="rollsroyce Car Image" />,
    fuel: "70L",
    gear: "manual",
    seats: "4 people ",
    rentperday: "$96.00/",
    discount: null
},
{
  carname:"Nissan GT-X",
  icon:<Image src={RedHeart} alt="Heart Icon"/>,
  type:"Sedan",
  image:<Image src={nissan} alt="nissan Car Image" />,
  fuel: "80L",
  gear: "Auto",
  seats: "2 people ",
  rentperday: "$90.00/",
  discount: "$110.00/day"
},
{
  carname:"All New Rush",
  icon:<Image src={Heart} alt="Heart Icon"/>,
  type:"SUV",
  image:<Image src={allnewrush} alt="NewRush Car Image" />,
  fuel: "70L",
  gear: "Manual",
  seats: "6 people ",
  rentperday: "$72.00/",
  discount: "$80.00/day"
},
{
  carname:"CR - V",
  icon:<Image src={RedHeart} alt="Heart Icon"/>,
  type:"SUV",
  image:<Image src={crv} alt="CRV Car Image" />,
  fuel: "80L",
  gear: "Manual",
  seats: "6 people ",
  rentperday: "$80.00/",
  discount: null
},
{
  carname:"All New Terios",
  icon:<Image src={Heart} alt="Heart Icon"/>,
  type:"SUV",
  image:<Image src={terios} alt="Terios Car Image" />,
  fuel: "80L",
  gear: "Manual",
  seats: "6 people ",
  rentperday: "$80.00/",
  discount: null
},
{
  carname:"CR - V",
  icon:<Image src={RedHeart} alt="Heart Icon"/>,
  type:"SUV",
  image:<Image src={crvauto} alt="CRV Car Image" />,
  fuel: "80L",
  gear: "Auto",
  seats: "6 people ",
  rentperday: "$80.00/",
  discount: null
},
{
  carname:"MGZX Exclusive",
  icon:<Image src={RedHeart} alt="Heart Icon"/>,
  type:"Hatchback",
  image:<Image src={MGZXExclusive} alt="MGZX Exclusive Car Image" />,
  fuel: "70L",
  gear: "Manual",
  seats: "4 people ",
  rentperday: "$760.00/",
  discount: "$80.00/day"
},
{
  carname:"New MGZX",
  icon:<Image src={Heart} alt="Heart Icon"/>,
  type:"SUV",
  image:<Image src={NewMGZX} alt="New MGZX Car Image" />,
  fuel: "80L",
  gear: "Manual",
  seats: "6 people ",
  rentperday: "$80.00/",
  discount: null
},
{
  carname:"MGZX Excite",
  icon:<Image src={RedHeart} alt="Heart Icon"/>,
  type:"Hatchback",
  image:<Image src={MGZXExcite} alt="MGZX Excitr Car Image" />,
  fuel: "80L",
  gear: "Manual",
  seats: "4 people ",
  rentperday: "$74.00/",
  discount: null
},
{
  carname:"New MGZX",
  icon:<Image src={Heart} alt="Heart Icon"/>,
  type:"SUV",
  image:<Image src={MGZXAuto} alt="New MGZX Car Image" />,
  fuel: "80L",
  gear: "Manual",
  seats: "6 people ",
  rentperday: "$80.00/",
  discount: null
},
]

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto px-2">
{
Carbox.map((rent)=>{
  return(
    <div>
  <div className="border rounded-lg bg-white px-4 py-6 m-2 ">
<div className="flex justify-between">
  <h4 className="text-lg font-bold ">{rent.carname} </h4>
  <div> {rent.icon}                                 </div>
</div>
  <h5 className="text-slate-500 font-semibold">{rent.type}  </h5>
  <div className=" justify-items-center my-8 h-16"> {rent.image}   </div>
<ul className="flex text-slate-500 text-[12px] pt-4">
  <li className=" flex flex-1 gap-1"> <Image src={gasstation} alt="Gas Station Icon"/>{rent.fuel} </li>
  <li className=" flex flex-1 gap-1"> <Image src={gear} alt="Steering Icon"/> {rent.gear}         </li>
  <li className=" flex flex-1 gap-1"> <Image src={profile} alt="Profiles icon"/> {rent.seats}     </li>
</ul>
<div className="pt-2 flex items-center justify-between">
  <ul className="text-lg h-10 ">
<li className="font-bold"> {rent.rentperday}day </li>
<li className="text-slate-500 line-through"> {rent.discount} </li>
</ul>
<div>
<ButtonC text={"Rent Now"} link={"/payment"}/>
</div>
</div>

      </div>

    </div>
  )
})
}
    </div>
  )
}

export default Selectbox