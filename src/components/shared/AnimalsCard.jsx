import Image from "next/image";

const AnimalsCard = ({ item }) => {
  return (
    <div>

      {item.name}

      <div>
        <Image 
        src={item.image}
        alt="Animals"
        width={200}
        height={200}
        />
      </div>

    </div>
  );
};

export default AnimalsCard;