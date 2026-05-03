"use client"
import AnimalsCard from '@/components/shared/AnimalsCard';
import Sort from '@/components/shared/Sort';
import React, { useEffect, useState } from 'react';

const AllAnimalsPAge = () => {
  const [animals, setAnimals] = useState([]);
  const [allAnimals, setAllAnimals] = useState([]);

  useEffect(() => {
    fetch('https://qurbani-hat.vercel.app/data.json')
      .then(res => res.json())
      .then(data => {
        setAllAnimals(data);
        setAnimals(data)
      });
  }, []);

  return (
    <div className=' container mx-auto px-5 md:px-0'>

      <div className='flex gap-4 items-center'>
        <h1 className="font-bold text-2xl m-5">All Animals</h1>
        <Sort animals={animals} setAnimals={setAnimals} allAnimals={allAnimals} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {
          animals.map(item => <AnimalsCard key={item.id} item={item} />)

        }
      </div>

    </div>
  );
};

export default AllAnimalsPAge;