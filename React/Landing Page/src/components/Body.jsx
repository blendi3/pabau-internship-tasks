import React from 'react';
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




function Body({ options, setStep }) {
  const handleOptionClick = () => {
    setStep(2); 
  };

  

  return (
    <div className='px-10 pt-5 lg:px-60 lg:pt-10'>
    <div className="body flex flex-col mt-4 border border-black p-4 bg-gray-200">
      {options.map(option => (
        <Link
          key={option.id}
          to={`/${option.id}`}
          className="option flex items-center p-2 border border-black mt-4 hover:bg-gray-300"
          onClick={handleOptionClick}
        >
          <img src={option.image} alt={option.name} className="w-8 h-8 mr-4" />
          <span className="flex-grow">{option.name}</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Body;
