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
import { useEffect, useState } from 'react';
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ButtonC from '@/app/components/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await client.fetch(`*[_type == "car" && _id == $id][0]`, { id });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading... Please wait</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='md:flex'>
      <div className="bg-[url('bg.png')] bg-blue-300 border rounded-sm mx-4 my-4 px-4 flex-1">
        <h2 className="text-3xl whitespace-pre-line py-6">{product.type} Car with Best Design and Acceleration</h2>
        <p className="text-sm">Safety and comfort while driving a futuristic and elegant {product.type} car</p>
        <div>
          <Image src={urlFor(product.image).url()} alt={product.title} width={400} height={400} />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex-1">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track"
        </p>
        <p>Car Type: {product.type}</p>
        <p>Capacity: {product.seatingCapacity}</p>
        <p>Steering: {product.transmission}</p>
        <p>Fuel Avg: {product.fuelCapacity}</p>
        <div className='flex'>
          <div>
            <p>{product.pricePerDay}</p>
            <span className="line-through">{product.originalPrice}</span>
          </div>
          <div>
            <ButtonC text='Rent Now' link='/payment' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;