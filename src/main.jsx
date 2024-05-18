import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import '../public/script.js'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseProvider } from './context/Firebase.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </BrowserRouter>,
)
