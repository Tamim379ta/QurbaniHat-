import AnimalsCard from "../shared/AnimalsCard";

const TopAnimals = async () => {

  const res = await fetch('https://qurbani-hat.vercel.app/data.json')
  const data = await res.json()

  const items = data.slice(0, 10)

  return (
    <div>

      <h1 className="font-bold text-2xl m-5">Top Animals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          items.map(item => <AnimalsCard key={item.id} item={item} />)

        }
      </div>

    </div>
  );
};

export default TopAnimals;