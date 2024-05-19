import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


 const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:'
 })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider store={store}> 
      <Router>
          <App />  
      </Router>
   </AuthProvider>
  </React.StrictMode>,
)

