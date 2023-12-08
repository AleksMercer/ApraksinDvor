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

// #region : Aprashka component

  /* Main routes */
  import AboutProject from './projects/apraksindvor/components/AboutProject'
  import AboutSystem from './projects/apraksindvor/components/AboutSystem'

  /* Accordion1 routes */
  import Formstyle from './projects/apraksindvor/components/accordion1/Formstyle'
  import Palette from './projects/apraksindvor/components/accordion1/Palette'
  import Typography from './projects/apraksindvor/components/accordion1/Typography'
  import Gridlines from './projects/apraksindvor/components/accordion1/Gridlines'
  import Graphic from './projects/apraksindvor/components/accordion1/Graphic'

  /* Accordion2 routes */
  import Breadcrumbs from './projects/apraksindvor/components/accordion2/Breadcrumbs'
  import Buttons from './projects/apraksindvor/components/accordion2/Buttons'
  import Cards from './projects/apraksindvor/components/accordion2/Cards'
  import Checkbox from './projects/apraksindvor/components/accordion2/Checkbox'
  import Divider from './projects/apraksindvor/components/accordion2/Divider'
  import Loading from './projects/apraksindvor/components/accordion2/Loading'
  import Modal from './projects/apraksindvor/components/accordion2/Modal'
  import Popover from './projects/apraksindvor/components/accordion2/Popover'
  import RadioButtons from './projects/apraksindvor/components/accordion2/RadioButtons'
  import SwitchButtons from './projects/apraksindvor/components/accordion2/SwitchButtons'
  import TextInput from './projects/apraksindvor/components/accordion2/TextInput'

// #endregion

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

            {/* Accordion1 routes */}
              <Route path="Formstyle" element={ <Formstyle /> }/>
              <Route path="Palette" element={ <Palette /> }/>
              <Route path="Typography" element={ <Typography /> }/>
              <Route path="Gridlines" element={ <Gridlines /> }/>
              <Route path="Graphic" element={ <Graphic /> }/>

            {/* Accordion2 routes */}
              <Route path="Breadcrumbs" element={ <Breadcrumbs /> }/>
              <Route path="Buttons" element={ <Buttons /> }/>
              <Route path="Cards" element={ <Cards /> }/>
              <Route path="Checkbox" element={ <Checkbox /> }/>
              <Route path="Divider" element={ <Divider /> }/>
              <Route path="Loading" element={ <Loading /> }/>
              <Route path="Modal" element={ <Modal /> }/>
              <Route path="Popover" element={ <Popover /> }/>
              <Route path="RadioButtons" element={ <RadioButtons /> }/>
              <Route path="SwitchButtons" element={ <SwitchButtons /> }/>
              <Route path="TextInput" element={ <TextInput /> }/>

          </Route>

        </Routes>
        
      </Router>

    </Provider>

  </React.StrictMode>
);