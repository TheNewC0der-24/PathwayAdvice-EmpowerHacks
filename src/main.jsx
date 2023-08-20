import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { BudgetsProvider } from './Apps/BudgetApp/Contexts/BudgetsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
