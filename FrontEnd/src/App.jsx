import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer'
import ShopCategory from './Pages/ShopCategory'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import Cart from './Pages/Cart'

// Placeholder components (you can replace these with your actual components)
const Home = () => <div>Home Page</div>
const Products = () => <div>Products Page</div>
const Login = () => <div>Login Page</div>


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<ShopCategory banner={men_banner} category='men'/>} />
        <Route path="/product" element={<Product />} >
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

