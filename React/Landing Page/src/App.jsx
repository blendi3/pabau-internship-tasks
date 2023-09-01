import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import OptionPage from './components/OptionPage';
import options from './components/options';

import './App.css'
import Footer from './components/Footer';


function App() {
  const storedStep = localStorage.getItem('step');
  const [step, setStep] = useState(storedStep ? parseInt(storedStep) : 1);

  // useEffect(() => {
  //   localStorage.setItem('step', step.toString());
  // }, [step]);
  

  // useEffect(() => {
  //   const handlePopState = () => {

  //     setStep(1);
  //   };

  //   window.addEventListener('popstate', handlePopState);

  //   return () => {
  //     window.removeEventListener('popstate', handlePopState);
  //   };
  // }, []);



  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Header step={step} />
        <Routes>
          <Route
            path="/"
            element={<Body options={options} setStep={setStep} />}
          />
          {options.map(option => (
            <Route
              key={option.id}
              path={`/${option.id}`}
              element={<OptionPage optionName={option.name} setStep={setStep} />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
