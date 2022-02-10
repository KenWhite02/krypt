import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TransactionProvider } from './context/TransationContext';

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
);
