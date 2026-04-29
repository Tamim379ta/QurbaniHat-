import AnimalsCard from '@/components/shared/AnimalsCard';
import React from 'react';

const AllAnimalsPAge = async() => {
   const res = await fetch('https://qurbani-hat.vercel.app/data.json')
  const data = await res.json()

  return (
    <div>

       <h1 className="font-bold text-2xl m-5">All Animals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {
          data.map(item => <AnimalsCard key={item.id} item={item} />)

        }
      </div>
      
    </div>
  );
};

export default AllAnimalsPAge;