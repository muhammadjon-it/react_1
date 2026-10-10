import React from 'react'
import Header from './pages/Header'
import Offer from './pages/Offer'
import Home from './pages/Home'
import Second from './pages/Second'
import Todolist from './pages/Todolist'

const App = () => {
  return (
    <div className='bg-[#FAF6F2]'>

      <Offer />

      <Header />

      <Home/>

      <Second/>

      <Todolist/>


    </div>
  )
}

export default App