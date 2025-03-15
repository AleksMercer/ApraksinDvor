/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
/* main import */

  import Mainpage from './mainpage/Mainpage'
  import AprashkaError404 from './mainpage/Error404/AprashkaError404'
  import Aprashka from './ApraksinDvor/Aprashka'

/*-------------------------------------Aprashka Imports-----------------------------------------*/

/* Main routes */
  import AboutProject from './ApraksinDvor/components/AboutProject'
  import AboutSystem from './ApraksinDvor/components/AboutSystem'

/* Accordion1 routes */
  import Logotype from './ApraksinDvor/components/accordion1/Logotype'
  import ColorPalette from './ApraksinDvor/components/accordion1/ColorPalette'
  import Typography from './ApraksinDvor/components/accordion1/Typography'
  import GridAndIndent from './ApraksinDvor/components/accordion1/GridAndIndent'
  import Graphic from './ApraksinDvor/components/accordion1/Graphic'
  import Icons from './ApraksinDvor/components/accordion1/Icons'

/* Accordion2 routes */
  import Breadcrumbs from './ApraksinDvor/components/accordion2/Breadcrumbs'
  import Button from './ApraksinDvor/components/accordion2/Button'
  import Checkbox from './ApraksinDvor/components/accordion2/Checkbox'
  import Divider from './ApraksinDvor/components/accordion2/Divider'
  import Link from './ApraksinDvor/components/accordion2/Link'
  import RadioButton from './ApraksinDvor/components/accordion2/RadioButton'
  import TextInput from './ApraksinDvor/components/accordion2/TextInput'
  import Search from './ApraksinDvor/components/accordion2/Search'
  import Tooltip from './ApraksinDvor/components/accordion2/Tooltip'
  import SwitchButton from './ApraksinDvor/components/accordion2/SwitchButton'

/*---------------------------------------------------------------------------------------------*/


function MainRouter() {

  const location = useLocation()
  const [mainClass, setMainClass] = useState('')

  useEffect(() => { // swap title, favicon, main-tag-className and Meta tag info

    const defaultPath = '/Projects-Showcase'
    const path = location.pathname

    switch (true) {

      case path.startsWith(defaultPath + '/Aprashka'):
        document.title = 'Apraksin Dvor'
        document.querySelector("html").lang = 'ru'
        document.querySelector("link[rel='icon']").href = './icons/small-logo.ico'
        document.querySelector("meta[name='Title']").content = 'Дизайн-система Апраксина двора'
        document.querySelector("meta[name='Author']").content = 'Alexander Kalagaev, Daniil Sopov, Anna Soldatova'
        document.querySelector("meta[name='Description']").content = 'Дизайн система «Апраксин двор» — это адаптируемый набор рекомендаций, стилей и компонентов, которые поддерживают лучшие практики проектирования пользовательского интерфейса.'
        document.querySelector("meta[name='Keywords']").content = 'Дизайн система, Апрашка, Апраксин двор, design system, UI-kit, Дизайн-система Апраксина двора'

        setMainClass('aprashka-main')
      break

      case path.startsWith(defaultPath):
        document.title = 'Projects Showcase'
        document.querySelector("html").lang = 'en'
        document.querySelector("link[rel='icon']").href = './icons/favicon.ico'
        document.querySelector("meta[name='Title']").content = 'University Projects Showcase'
        document.querySelector("meta[name='Author']").content = 'github.com/AleksMercer'
        document.querySelector("meta[name='Description']").content = 'This project includes projects developed while studying at the university.'
        document.querySelector("meta[name='Keywords']").content = 'Portfolio, educational projects on React, React, Design System'

        setMainClass('mainpage')
      break

      default: console.log('default value from MainRouter switch')
    }

  }, [location])

  return (

    <main className={mainClass}>

      <Routes>
        <Route path='/Projects-Showcase/*' element={<AprashkaError404 />} />
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
          <Route path="Checkbox"      element={ <Checkbox /> }/>
          <Route path="Divider"       element={ <Divider /> }/>
          <Route path="Link"          element={ <Link /> }/>
          <Route path="RadioButton"   element={ <RadioButton /> }/>
          <Route path="TextInput"     element={ <TextInput /> }/>
          <Route path="Search"        element={ <Search /> }/>
          <Route path="Tooltip"       element={ <Tooltip /> }/>
          <Route path="SwitchButton"  element={ <SwitchButton /> }/>

        </Route>
      </Routes>
      
    </main>
  )
}

export default MainRouter