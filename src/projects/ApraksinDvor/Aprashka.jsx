import React from 'react'

/* React Router */
import { Outlet } from 'react-router-dom'

/* Redux Tool-Kit */
import { Provider } from 'react-redux'
import store from './aprashka-store'

// #region : Components Import

import Sidebar from './components/Sidebar'

// #endregion

function Aprashka() {
  return (
    <Provider store={store}> {/* React Tool-Kit */}

        <main className='aprashka-main'>

          <section className='aprashka-main__sidebar'>
            <Sidebar />
          </section>

          <section className='aprashka-main__wrapper'>
            <Outlet />
          </section>
        
        </main>
      
    </Provider>
  )
}

export default Aprashka