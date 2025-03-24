import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Navbar from './Components/Navbar'

function App() {

  return (

    <div>
      <Router>
        0
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App