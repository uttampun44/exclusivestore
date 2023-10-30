import Home from './components/homepage/Hompage'
import About from './components/about/About'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Useraccount from './components/useraccount/Useraccount'
import Error from './page/error/Error'
import './App.css'

function App() {


  return (
    <BrowserRouter>
          <div>
          <Routes>
                <Route exact path='/' Component={Home}></Route>
                <Route exact path='/about' Component={About}></Route>
                <Route exact path='/signup' Component={Signup}></Route>
                <Route exact path='/login' Component={Login}></Route>
                <Route exact path='/products' Component={Products}></Route>
                <Route exact path='/cart' Component={Cart}></Route>
                <Route exact path='/account' Component={Useraccount}></Route>
                <Route exact path='*'  Component={Error}></Route>
           </Routes>
          </div>
     </BrowserRouter>
  )
}

export default App
