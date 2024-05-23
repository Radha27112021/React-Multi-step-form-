import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StepProvider } from './StepContext';

ReactDOM.render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
