/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom'
/* main import */

  import AprashkaError404 from './ApraksinDvor/components/AprashkaError404'
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

  return (

    <main className="aprashka-main">

      <Routes>
        <Route path="/ApraksinDvor/*" element={<AprashkaError404 />} />
        <Route path="/ApraksinDvor"  element={<Aprashka />}> 

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