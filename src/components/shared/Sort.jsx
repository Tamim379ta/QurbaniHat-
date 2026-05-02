"use client"

import { IoIosArrowDown } from "react-icons/io";

const Sort = ({ animals, setAnimals, allAnimals }) => {

  const handleLowToHigh = () => {
    const sorted = [...animals].sort((a, b) => a.price - b.price);
    setAnimals(sorted);
  };

  const handleHighToLow = () => {
    const sorted = [...animals].sort((a, b) => b.price - a.price);
    setAnimals(sorted);
  };
  const handleAll = () => {
    setAnimals(allAnimals);
  };

  return (
    <div>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">Sort by <IoIosArrowDown /></div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={handleAll}><a>All Type</a></li>
          <li onClick={handleLowToHigh}><a>Low to High</a></li>
          <li onClick={handleHighToLow}><a>High to Low</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
