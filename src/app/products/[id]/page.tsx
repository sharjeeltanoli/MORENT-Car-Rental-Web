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
      <div className="bg-[url('bg.png')] bg-blue-300 border rounded-sm mx-4 my-4 px-4 flex-1">
        <h2 className="text-3xl whitespace-pre-line py-6">{fetchedProduct.type} Car with Best Design and Acceleration</h2>
        <p className="text-sm">Safety and comfort while driving a futuristic and elegant {fetchedProduct.type} car</p>
        <div>
          <Image src={urlFor(fetchedProduct.image).url()} alt={fetchedProduct.title} width={400} height={400} />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex-1">
        <h1 className="text-2xl font-bold">{fetchedProduct.name}</h1>
        <p>
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track"
        </p>
        <p>Car Type: {fetchedProduct.type}</p>
        <p>Capacity: {fetchedProduct.seatingCapacity}</p>
        <p>Steering: {fetchedProduct.transmission}</p>
        <p>Fuel Avg: {fetchedProduct.fuelCapacity}</p>
        <div className='flex'>
          <div>
            <p>{fetchedProduct.pricePerDay}</p>
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




