import React from 'react'
import { NavLink } from 'react-router-dom'



function Sidebar() {

  return (
    <nav className='aprashka-main__sidebar'>

      <NavLink to="/">First</NavLink> <br/>
      <NavLink to="/second">Second</NavLink> <br/>
      <NavLink to="/third">Third</NavLink> <br/>

    </nav>
  )
}

export default Sidebar