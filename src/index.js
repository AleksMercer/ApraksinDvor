import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

/* React Router */
import { BrowserRouter, Routes, Route } from 'react-router-dom'


/* Redux Tool-Kit */
import { Provider } from 'react-redux'
import store from './store'


/* Components import */
import Mainpage from './mainpage/Mainpage'
import ApraksinDvor from './projects/ApraksinDvor/ApraksinDvor'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>

    <Provider store={store}> {/* React Tool-Kit */}

      <BrowserRouter>        {/* React Router */}
 
        <Routes>

          <Route path="/Uni-Projects-Showcase"               element={<Mainpage />} />

          <Route path="/Uni-Projects-Showcase/ApraksinDvor"  element={<ApraksinDvor />} />

        </Routes>
        
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);