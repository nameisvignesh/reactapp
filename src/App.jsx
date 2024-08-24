import React from 'react'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Product from './pages/Product'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-around font-pop overflow-x-hidden'>
      <Home />
      <Docs />
      <Product />
      <Contact />
    </div>
  )
}

export default App
