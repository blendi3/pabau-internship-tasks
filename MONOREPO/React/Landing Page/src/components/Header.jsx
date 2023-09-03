import React from 'react';

function Header(props) {
  return <div className="flex justify-center bg-blue-500 p-4 text-white">Step {props.step}/2</div>;
}

export default Header;
