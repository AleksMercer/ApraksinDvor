/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

/* main import */

  import Mainpage from './mainpage/Mainpage'
  import Error404 from './mainpage/Error404'
  import Aprashka from './projects/apraksindvor/Aprashka'

/*-------------------------------------Aprashka Imports-----------------------------------------*/

/* Main routes */
  import AboutProject from './projects/apraksindvor/components/AboutProject'
  import AboutSystem from './projects/apraksindvor/components/AboutSystem'

/* Accordion1 routes */
  import Logotype from './projects/apraksindvor/components/accordion1/Logotype'
  import ColorPalette from './projects/apraksindvor/components/accordion1/ColorPalette'
  import Typography from './projects/apraksindvor/components/accordion1/Typography'
  import GridAndIndent from './projects/apraksindvor/components/accordion1/GridAndIndent'
  import Graphic from './projects/apraksindvor/components/accordion1/Graphic'
  import Icons from './projects/apraksindvor/components/accordion1/Icons'

/* Accordion2 routes */
  import Breadcrumbs from './projects/apraksindvor/components/accordion2/Breadcrumbs'
  import Button from './projects/apraksindvor/components/accordion2/Button'
  import Card from './projects/apraksindvor/components/accordion2/Card'
  import Checkbox from './projects/apraksindvor/components/accordion2/Checkbox'
  import Divider from './projects/apraksindvor/components/accordion2/Divider'
  import Loading from './projects/apraksindvor/components/accordion2/Loading'
  import Modal from './projects/apraksindvor/components/accordion2/Modal'
  import Tooltip from './projects/apraksindvor/components/accordion2/Tooltip'
  import RadioButton from './projects/apraksindvor/components/accordion2/RadioButton'
  import SwitchButton from './projects/apraksindvor/components/accordion2/SwitchButton'
  import TextInput from './projects/apraksindvor/components/accordion2/TextInput'
  import Search from './projects/apraksindvor/components/accordion2/Search'

/*---------------------------------------------------------------------------------------------*/


function MainRouter() {

  const location = useLocation()
  const [mainClass, setMainClass] = useState('')

  useEffect(() => { // swap title, favicon and main-tag-className

    const defaultPath = '/Projects-Showcase'
    const path = location.pathname

    switch (true) {

      case path.startsWith(defaultPath + '/Aprashka'):
        document.title = 'Apraksin Dvor'
        document.querySelector("link[rel='icon']").href = './icons/small-logo.ico'
        setMainClass('aprashka-main')
        break

      case path.startsWith(defaultPath):
        document.title = 'Projects Showcase'
        document.querySelector("link[rel='icon']").href = './icons/favicon.ico'
        setMainClass('mainpage')
        break

      default: console.log('default value from MainRouter switch')
    }

  }, [location])

  return (

    <main className={mainClass}>

      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path="/Projects-Showcase" element={<Mainpage />} />

        <Route path="/Projects-Showcase/Aprashka"  element={<Aprashka />}> 

          <Route index element={ <AboutProject /> }/>
          <Route path="AboutSystem"   element={ <AboutSystem /> }/>

          {/* Accordion1 routes */}
          <Route path="Logotype"      element={ <Logotype /> }/>
          <Route path="ColorPalette"  element={ <ColorPalette /> }/>
          <Route path="Typography"    element={ <Typography /> }/>
          <Route path="GridAndIndent" element={ <GridAndIndent /> }/>
          <Route path="Graphic"       element={ <Graphic /> }/>
          <Route path="Icons"         element={ <Icons /> }/>

          {/* Accordion2 routes */}
          <Route path="Breadcrumbs"   element={ <Breadcrumbs /> }/>
          <Route path="Button"        element={ <Button /> }/>
          <Route path="Card"          element={ <Card /> }/>
          <Route path="Checkbox"      element={ <Checkbox /> }/>
          <Route path="Divider"       element={ <Divider /> }/>
          <Route path="Loading"       element={ <Loading /> }/>
          <Route path="Modal"         element={ <Modal /> }/>
          <Route path="Tooltip"       element={ <Tooltip /> }/>
          <Route path="RadioButton"   element={ <RadioButton /> }/>
          <Route path="SwitchButton"  element={ <SwitchButton /> }/>
          <Route path="TextInput"     element={ <TextInput /> }/>
          <Route path="Search"        element={ <Search /> }/>

        </Route>
      </Routes>

    </main>
    
  )
}

export default MainRouter