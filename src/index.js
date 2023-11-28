import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

/* React Router */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


/* Redux Tool-Kit */
import { Provider } from 'react-redux'
import store from './store'


/* Components import */
import Mainpage from './mainpage/Mainpage'
import Aprashka from './projects/apraksindvor/Aprashka'

/* Aprashka components */
import First from './projects/apraksindvor/components/First'
import Second from './projects/apraksindvor/components/Second'
import Third from './projects/apraksindvor/components/Third'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>

    <Provider store={store}> {/* React Tool-Kit */}

      <Router> {/* React Router */}
 
        <Routes>

          <Route path="/Uni-Projects-Showcase"           element={<Mainpage />} />
          <Route path="/Uni-Projects-Showcase/Aprashka"  element={<Aprashka />} />


          {/* Aprashka router */}

          <Route path="/" element={ <Aprashka />}>
            <Route index element={ <First /> }/>
            <Route path="/second" element={ <Second /> }/>
            <Route path="/third" element={ <Third /> }/>
          </Route>

        </Routes>
        
      </Router>

    </Provider>

  </React.StrictMode>
);