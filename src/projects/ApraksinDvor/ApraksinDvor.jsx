import React from 'react'

/* Redux Tool-Kit */
import { Provider } from 'react-redux'
import store from './aprashka-store'

// #region : Components Import

import Sidebar from './components/Sidebar'

// #endregion

function ApraksinDvor() {
  return (
    <main>

      <Sidebar />

      <section className='wrapper'>

      </section>


    </main>
  )
}

export default ApraksinDvor