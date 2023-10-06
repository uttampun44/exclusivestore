import Home from './components/homepage/Hompage'
import About from './components/about/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <BrowserRouter>
          <div>
          <Routes>
                <Route exact path='/' Component={Home}></Route>
                <Route exact path='/about' Component={About}></Route>
                <Route exact path='*'></Route>
           </Routes>
          </div>
     </BrowserRouter>
  )
}

export default App
