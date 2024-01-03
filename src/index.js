import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

/* React Router */
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './MainRouter.jsx'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);


root.render(
  <React.StrictMode>

    <Router> {/* React Router */}

      <MainRouter /> {/* component */}
      
    </Router>

  </React.StrictMode>
);