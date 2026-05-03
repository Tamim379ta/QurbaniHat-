import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AnimalsCard = ({ item }) => {
  return (
    <div className="p-5 animate__animated animate__fadeInUp animate__slow shadow-2xl bg-white rounded-2xl hover:scale-105 duration-300">

      
      <div className="relative aspect-square">
        <Image 
        src={item.image}
        alt="Animals"
        fill
        className="object-cover rounded-xl"
        />
        <div className="badge absolute top-2 right-2">{item.breed}</div>
      </div>

      <div className="my-2">
        <p className="text-xl font-semibold">{item.name}</p>
        <p className="font-semibold">Price: <span className="text-taupe-400">BDT {item.price}</span></p>
        <p className="font-semibold">Weight: <span className="text-taupe-400">{item.weight}</span></p>
      </div>

      <Link href={`/all-animals/${item.id}`}>
      <button className="btn btn-wide rounded-3xl bg-linear-to-r from-cyan-400 via-blue-900 to-[#020024] text-white hover:border-2 hover:border-accent-hover ">View Details <FaArrowRight/></button>
      </Link>

    </div>
  );
};

export default AnimalsCard;