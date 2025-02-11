import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Content from './Components/Content'
import Home from './Components/home'
import History from './Components/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    < Header/>
    < Routes>
      < Route element={< Content/>} path='/content'>    </Route>
      < Route element={< Home/>} path='/'>    </Route>
      < Route element={< History/>} path='/history'>    </Route>
    </Routes> 
    < Footer/>     
    </>
  )
}

export default App
