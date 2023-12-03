import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../media/logo_black.svg'

function Sidebar() {

  const [firstSwitch, setFirstSwitch] = useState(false)
  const [secondSwitch, setSecondSwitch] = useState(false)

  return (
    <> {/* <section className='aprashka-main__sidebar'> */}
      <div className='logo'>
        <img 
          draggable='false'
          src={logo}
          alt='Апраксин Двор' />
      </div>

      <nav className='sidebar'>

        <NavLink to="." end className={"mainlink"}>О проекте</NavLink>
        <NavLink to="AboutSystem" className={"mainlink"}>О дизайн системе</NavLink> 

        <div className='accordion accfirst'>
          <div 
            className={`mainlink accordion__arrow ${firstSwitch ? 'arrow-open' : 'arrow-close'}`} 
            onClick={() => setFirstSwitch(prev => !prev)}
          >
            <span>
              Стиль
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0859985 12.4999L5.586 6.99994L0.0859985 1.49994L1.5 0.0859375L8.414 6.99994L1.5 13.9139L0.0859985 12.4999Z" fill="#8C9BA0"/></svg>
            </span>
          </div>

          <nav className={`accordion__links ${firstSwitch ? 'menu-open' : 'menu-close'}`}>
            <NavLink to="AboutStyle" className={"secondarylink"}>Цветовая палитра</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Модульная сетка</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Типографика</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Иконки</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Фирменный стиль</NavLink>
          </nav>
        </div> 

        <div className='accordion accsecond'>
          <div 
            className={`mainlink accordion__arrow ${secondSwitch ? 'arrow-open' : 'arrow-close'}`} 
            onClick={() => setSecondSwitch(prev => !prev)}
          >
            <span>
              Компоненты
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0859985 12.4999L5.586 6.99994L0.0859985 1.49994L1.5 0.0859375L8.414 6.99994L1.5 13.9139L0.0859985 12.4999Z" fill="#8C9BA0"/></svg>
            </span>
          </div>

          <nav className={`accordion__links ${secondSwitch ? 'menu-open' : 'menu-close'}`}>
            <NavLink to="AboutStyle" className={"secondarylink"}>Breadcrumbs</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Button</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Card</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Checkbox</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Divider</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Loading</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Modal</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Popover</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Radio button</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Switch button</NavLink>
            <NavLink to="AboutStyle" className={"secondarylink"}>Text input</NavLink>
          </nav>
        </div>

      </nav>
    </>
  )
}

export default Sidebar