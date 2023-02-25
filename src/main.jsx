import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import './styles/index.scss';
import { ThemeProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
