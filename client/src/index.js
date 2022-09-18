/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * Client side index. This creates the root document from which all other components
 * are rendered. Simply calls the App component.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Set and show the root of the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <App /> //call the App component.
  
);

