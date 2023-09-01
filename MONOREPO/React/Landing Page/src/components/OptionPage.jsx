import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function OptionPage({ optionName, setStep }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    setStep(1);
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="content">
        <h2>{optionName}</h2>
      </div>


      <div className="header">
      <button
          onClick={handleBackClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow mt-10"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default OptionPage;
