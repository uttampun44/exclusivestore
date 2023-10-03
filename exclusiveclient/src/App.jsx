import Home from './components/homepage/Hompage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <BrowserRouter>
          <div>
          <Routes>
                <Route exact path='/' Component={Home}></Route>
           </Routes>
          </div>
     </BrowserRouter>
  )
}

export default App
