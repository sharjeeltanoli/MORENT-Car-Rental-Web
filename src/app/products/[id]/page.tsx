"use client";

interface Product {
  _id: string;
  name: string;
  type: string;
  title: string,
  seatingCapacity: number;
  transmission: string;
  fuelCapacity: string;
  pricePerDay: number;
  originalPrice: number;
  image: any;
}

import { useParams } from 'next/navigation';
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ButtonC from '@/app/components/Button';

const ProductDetail = async () => {
  const { id } = useParams();
        const fetchedProduct = await client.fetch(`*[_type == "car" && _id == $id][0]`, { id });
 
  return (
    <div className='md:flex'>
{/*Left Div*/}
      <div>
      <div className="hover:shadow-xl transition-shadow duration-300 bg-white border rounded-sm mx-4 my-4 px-4 flex-1">
        <h2 className="text-2xl md:text-3xl py-2 font-bold text-blue-600">
            {fetchedProduct.type} Car with Best Design and Acceleration
        </h2>
          <p className="text-sm pb-4">
              Safety and comfort while driving a futuristic and elegant {fetchedProduct.type} car
          </p>
        <div className='flex justify-center'>
          <Image src={urlFor(fetchedProduct.image).url()} alt={fetchedProduct.title} width={400} height={400} />
        </div>
        <div className='flex'>      
    <div className='flex-1'>
          <Image src={"/view2.png"} alt={"Steering Image"} width={200} height={200} />
        </div>
        <div className='flex-1'>
          <Image src={"/view3.png"} alt={"Car Seats Image"} width={200} height={200} />
        </div>
        <div className='flex-1'>
          <Image src={"/view2.png"} alt={"Steering Image"} width={200} height={200} />
        </div>
        </div>
        </div>

      </div>
{/*Right Div*/}
      <div className="hover:shadow-xl transition-shadow duration-300 bg-white border rounded-sm mx-4 my-4 px-4 flex-1">
          <h3 className="text-3xl md:text-4xl lg:text-5xl  font-bold py-2 text-blue-600 font-mono">
          {fetchedProduct.name}
            </h3>
        <p>
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track"
        </p>
        <h4 className='font-semibold font-mono py-1'>
              Car Type: {fetchedProduct.type}                 </h4>
        <h4 className='font-semibold font-mono py-1'>
                Capacity: {fetchedProduct.seatingCapacity}        </h4>
        <h4 className='font-semibold font-mono py-1'>
                Steering: {fetchedProduct.transmission}           </h4>
        <h4 className='font-semibold font-mono py-1'>
                  Fuel Avg: {fetchedProduct.fuelCapacity}           </h4>
        <div className='flex'>
          <div>
        <h4 className='font-semibold text-2xl font-mono py-1'>
                  {fetchedProduct.pricePerDay}
          </h4>
            <span className="line-through">{fetchedProduct.originalPrice}</span>
          </div>
          </div>
          <div>
            <ButtonC text='Rent Now' link='/payment' />
          </div>
        </div>
</div>
  );
};

export default ProductDetail;




