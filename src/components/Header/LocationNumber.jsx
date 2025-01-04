import { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { cityName } from "../../constants/Index";

const LocationNumber = () => {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [selectedCity, setSelectedCity] =
    useState("Одинцово");

  const toggleDropdown = () => {
    setIsOpenCity(!isOpenCity);
  };
  const handleCitySelect = (city) => {
    setSelectedCity(city.name);
    setIsOpenCity(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <button
          className="flex items-center relative"
          onClick={toggleDropdown}
        >
          <div>
            <IoLocationOutline className="text-orange-600" />
          </div>
          <div className="font-montserrat font-medium text-sm pl-2">
            {selectedCity}
          </div>
          <div>
            {isOpenCity ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </div>
        </button>
        {isOpenCity && (
          <div className="absolute mt-5 flex flex-col items-center bg-white px-5 rounded-2xl">
            {cityName
              .filter((city) => city.name !== selectedCity)
              .map((city) => (
                <div
                  className="cursor-pointer font-montserrat font-medium text-sm hover:text-gray-500 p-1 z-50"
                  onClick={() => handleCitySelect(city)}
                  key={city.id}
                >
                  {city.name}
                </div>
              ))}
          </div>
        )}
      </div>
      <div>
        <a
          href="tel:+74993220672"
          className="font-montserrat font-semibold text-base"
        >
          +7 (499) 322 06 72
        </a>
      </div>
    </div>
  );
};

export default LocationNumber;
