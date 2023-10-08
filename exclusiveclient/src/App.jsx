import Home from './components/homepage/Hompage'
import About from './components/about/About'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Products from './components/products/Products'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
                <Route exact path='*'></Route>
           </Routes>
          </div>
     </BrowserRouter>
  )
}

export default App
