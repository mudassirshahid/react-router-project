import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'  // used for nesting routes/children routes
import Footer from './components/Footer/Footer'

function Layout() {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout
