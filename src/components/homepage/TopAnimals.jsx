import { FaArrowRight } from "react-icons/fa";
import AnimalsCard from "../shared/AnimalsCard";
import Link from "next/link";

const TopAnimals = async () => {

  const res = await fetch('https://qurbani-hat.vercel.app/data.json')
  const data = await res.json()

  const items = data.slice(0, 4)

  return (
    <div className=" bg-slate-200 p-20 px-5 md:px-0">

      <div className="container mx-auto">
        <h1 className="font-bold text-3xl m-5 text-center">Featured Animals</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {
            items.map(item => <AnimalsCard key={item.id} item={item} />)

          }
        </div>

        <div className="flex justify-center">
          <Link href={'/all-animals'}>
            <button className=' btn btn-wide rounded-3xl bg-linear-to-r from-cyan-400 via-blue-900 to-[#020024] text-white hover:border-2 hover:border-accent-hover hover:scale-102 '>See All Animals <FaArrowRight /></button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default TopAnimals;