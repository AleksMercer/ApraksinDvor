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
import Error404 from './mainpage/Error404'
import Aprashka from './projects/apraksindvor/Aprashka'

/* Aprashka components */
import AboutProject from './projects/apraksindvor/components/AboutProject'
import AboutStyle from './projects/apraksindvor/components/AboutStyle'
import AboutSystem from './projects/apraksindvor/components/AboutSystem'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>

    <Provider store={store}> {/* React Tool-Kit */}

      <Router> {/* React Router */}
 
        <Routes>

          <Route path='*' element={<Error404 />} />
          <Route path="/Projects-Showcase" element={<Mainpage />} />

          <Route path="/Projects-Showcase/Aprashka"  element={<Aprashka />}> 

            <Route index element={ <AboutProject /> }/>
            <Route path="AboutSystem" element={ <AboutSystem /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>
            <Route path="AboutStyle" element={ <AboutStyle /> }/>

          </Route>

        </Routes>
        
      </Router>

    </Provider>

  </React.StrictMode>
);