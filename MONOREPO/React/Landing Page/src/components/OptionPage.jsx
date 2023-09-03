import React from 'react';
import { useNavigate } from 'react-router-dom';

function OptionPage(props) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    props.setStep(1);
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="content">
        <h2>{props.optionName}</h2>
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
