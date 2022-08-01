import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  // displays to index.html
  <React.StrictMode>
    <App />  {/* returns app component */}
  </React.StrictMode>
);


