import Home from "./pages/Home"
// // import Register from "./pages/Register"
// // import Login from "./pages/Login"
// // import Cart from "./pages/Cart"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"



import React from 'react'
// import { Router, Route, Switch } from 'react-router-dom'
import Success from './Success'
import Pay from './Pay'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => { 
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products/:category' element={<ProductList/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart' element={<Product/>} />
      <Route path='/login' element={<Product/>} />
      <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </Router>


    
    
  )
}

export default App



// function App() {
//   return (
//     <Home/>
   
//   )
// }
// export default App



