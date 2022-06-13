import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Vip from './Pages/Vip/Vip'
import Product from './UIKIt/Product/Product'
import VipTerms from './Pages/VipTerms/VipTerms'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './Context/dataContext'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar style={{ position: '-webkit-sticky' }} />
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vip' element={<Vip />} />
          <Route path='/vipterms' element={<VipTerms />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  )
}

export default App
