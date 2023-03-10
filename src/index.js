import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "./contexts/ThemeContext";
import { StoreProvider } from './store';


function emitComments(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lession-${id}`, {
        detail: `Nội dung comment của lession ${id}`
      })  
    )
    // console.log(">>call emit")
  }, 2000)
}

emitComments(1)
emitComments(2)
emitComments(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider>
  <StoreProvider>
  <Router>
    <App />
  </Router>
  </StoreProvider>
  </ThemeProvider>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
