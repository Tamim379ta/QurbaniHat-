import Image from "next/image";

const AnimalsCard = ({ item }) => {
  return (
    <div className="p-5 shadow-2xl rounded-2xl">

      
      <div className="relative aspect-square">
        <Image 
        src={item.image}
        alt="Animals"
        fill
        className="object-cover rounded-xl"
        />
        <div className="badge absolute top-2 right-2">{item.breed}</div>
      </div>

      <div className="mt-2">
        <p className="text-xl font-semibold">{item.name}</p>
        <p className="font-semibold">Price: <span className="text-taupe-400">${item.price}</span></p>
        <p className="font-semibold">Weight: <span className="text-taupe-400">{item.weight}</span></p>
      </div>

    </div>
  );
};

export default AnimalsCard;