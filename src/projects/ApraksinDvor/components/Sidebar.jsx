import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../media/logo_black.svg'

function Sidebar() {

  return (
    <section className='aprashka-main__sidebar'>
      <div className='aprashka-logo'>
        <img 
          draggable='false'
          src={logo}
          alt='logo' />
      </div>

      <nav className='aprashka-sidebar'>
        <NavLink to="." end><span className='main-menu-item'>О проекте</span></NavLink>
        <NavLink to="AboutStyle"><span className='main-menu-item'>О дизайн системе</span></NavLink> 
        <NavLink to="AboutSystem"><span className='main-menu-item'>Стили</span></NavLink> 
      </nav>
    </section>
  )
}

export default Sidebar