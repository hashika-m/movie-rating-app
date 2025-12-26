
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Moviedetail from './Pages/Moviedetail'
import Home from './Pages/Home'
import Error from './Pages/Error'

function App() {
  

  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Moviedetail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
