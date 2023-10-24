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
import ProjectFirst from './projects/project_first/ProjectFirst'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>

    <Provider store={store}> {/* React Tool-Kit */}

      <BrowserRouter>        {/* React Router */}
 
        <Routes>

          <Route path="/"  element={<Mainpage />} />

          <Route path="/ProjectFirst"  element={<ProjectFirst />} />

        </Routes>
        
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);