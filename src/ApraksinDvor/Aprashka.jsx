import React, { useState, useEffect, useRef } from 'react'

/* React Router */
import { Outlet, useLocation } from 'react-router-dom'

/* Redux Tool-Kit */
import { Provider } from 'react-redux'
import aprashkaStore from './aprashkaStore'

/* Components */
import Sidebar from './components/Sidebar'
import LoadScreen from './components/tinycomp/LoadScreen'


function Aprashka() {
  
  // #region : add class name to wrapper

  const location = useLocation()
  const ref = useRef(null)
  const [className, setClassName] = useState('')

  const getClassName = (pathclass) => { // get a new class name from current path
    const lastIndex = pathclass.lastIndexOf('/')
    const newClassName = pathclass.slice(lastIndex + 1).toLowerCase()

    return newClassName
  }

  useEffect(() => { // swap title, favicon and className

    let path = location.pathname
    let newName = getClassName(path)
    ref.current.scrollTo(0, 0) // every new page scroll to top

    switch (true) {

      case path.startsWith('/Projects-Showcase/Aprashka/'):
        setClassName(newName)
        break

      case path.startsWith('/Projects-Showcase/Aprashka'):
        setClassName('aboutproject')
        break

      default: console.log('default value from Aprashka switch')
    }

  }, [location])

  // #endregion

  return (
    <Provider store={aprashkaStore}> {/* Redux Tool-Kit */}

      <LoadScreen />

      <section className='aprashka-main__sidebar'>
        <Sidebar />
      </section>

      <section className={`aprashka-main__wrapper ${className}`} ref={ref}>
        <Outlet />
      </section>
      
    </Provider>
  )
}

export default Aprashka