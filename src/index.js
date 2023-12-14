import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

/* React Router */
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './MainRouter.jsx'

/* Redux Tool-Kit */
import { Provider } from 'react-redux'
import store from './store'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);


root.render(
  <React.StrictMode>

    <Provider store={store}> {/* React Tool-Kit */}

      <Router> {/* React Router */}

        <MainRouter /> {/* component */}
        
      </Router>

    </Provider>

  </React.StrictMode>
);