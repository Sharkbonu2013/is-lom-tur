import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='flex'>
        <aside>
          <Sidebar />
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default App