import React, { useContext } from 'react';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepContext } from './StepContext';

const steps = ['Enter Basic Details', 'Enter Address Details', 'Enter Company Details'];

function App() {
  const { currentStep, setCurrentStep, validateStep } = useContext(StepContext);

  function showStep(step) {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  }

  function handleNext() {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  }

  function handleBack() {
    setCurrentStep((prev) => prev - 1);
  }

  function handleSubmit() {
    if (validateStep(currentStep)) {
      alert('Successfully registered');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: 'red', textDecoration: 'underline' }}>Application Form</h3>
        <div className="center-stepper">
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {showStep(currentStep)}
        <div className="button-container">
          {currentStep > 0 && (
            <button
              className="custom-button"
              style={{ backgroundColor: 'lightgray', color: 'black', marginRight: '10px' }}
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              className="custom-button"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button
              className="custom-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
