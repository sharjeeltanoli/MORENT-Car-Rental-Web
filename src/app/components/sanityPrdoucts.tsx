import gasstation from "/public/gasstation.png";
import gear from "/public/gear.png";
import profile from "/public/profile.png";
import Image from "next/image";

import { client } from "../../sanity/lib/client";
import ButtonC from "../components/Button";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function Products() {
  const query = async () => {
    const data = client.fetch(`*[_type=='car']`);
    return data;
  };
  
  const vehicle = await query();
  console.log(vehicle);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto px-2">
      {vehicle.map((items: any) => {
        return (
          <div key={items._id} className="m-2">
            
              <div className="border rounded-lg bg-white px-4 py-6 cursor-pointer">
              <Link href={`/products/${items._id}`}>
                <h4 className="flex justify-between text-lg font-bold">{items.name}</h4>
                <h5 className="text-slate-500 font-semibold">{items.type}</h5>
                </Link>
                <div className="justify-items-center my-8 h-16">
                  <Image src={urlFor(items.image).url()} alt={items.title} width={200} height={200} />
                </div>
                <ul className="flex text-slate-500 text-[12px] pt-4">
                  <li className="flex flex-1 gap-1">
                    <Image src={gasstation} alt="Gas Station Icon" />{items.fuelCapacity}
                  </li>
                  <li className="flex flex-1 gap-1">
                    <Image src={gear} alt="Steering Icon" />{items.transmission}
                  </li>
                  <li className="flex flex-1 gap-1">
                    <Image src={profile} alt="Profiles icon" />{items.seatingCapacity}
                  </li>
                </ul>
                <div className="pt-2 flex items-center justify-between">
                  <ul className="text-lg h-10">
                    <li className="font-bold">{items.pricePerDay}</li>
                    <li className="text-slate-500 line-through">{items.originalPrice}</li>
                  </ul>
                  <div>
                    <ButtonC text={"Rent Now"} link={"/payment"} />
                  </div>
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
}