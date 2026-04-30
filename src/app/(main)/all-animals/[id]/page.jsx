import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiHome } from 'react-icons/bi';
import Form from '@/components/shared/Form';

const DetailsPage = async ({ params }) => {
  const res = await fetch('https://qurbani-hat.vercel.app/data.json')
  const data = await res.json()

  const { id } = await params;

  const item = data.find(f => f.id == id)
  return (
    <div className="p-5 gap-10 grid grid-cols-1 md:grid-cols-2  shadow-2xl rounded-2xl my-10">


      <div className="relative aspect-square ">
        <Image
          src={item.image}
          alt="Animals"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div>
        <div className="my-2 space-y-1">
          <p className="text-2xl font-semibold">{item.name}</p>
          <p className="font-semibold">Description: <span className="text-taupe-400">{item.description}</span></p>
          <p className="font-semibold">Location: <span className="text-taupe-400">{item.location}</span></p>
          <p className="font-semibold">Weight: <span className="text-taupe-400">{item.weight}</span></p>
          <p className="font-semibold">Age: <span className="text-taupe-400">{item.age}</span></p>
          <p className="font-semibold">Category: <span className="text-taupe-400">{item.category}</span></p>
          <p className="font-semibold">Price: <span className="text-taupe-400">${item.price}</span></p>
        </div>

        <div className='my-2'>
          <Form />

        </div>

        <div className='flex justify-between'>
          <div></div>
          <Link href={`/`}>
            <button className="btn btn-wide rounded-3xl hover:border-black "><BiHome /> Back to Home</button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default DetailsPage;