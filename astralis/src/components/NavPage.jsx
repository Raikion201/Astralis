import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Players from './Players/Players'
import History from './History/History'
import Shop from './Shop/Shop'

const NavPage = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='players' element={<Players/>} />
      <Route path='history' element={<History/>} />
      <Route path='shop' element={<Shop/>} />
      {/* <Route path='matches' element={<Matches/>} />
      <Route path='plays' element={<Plays/>} /> */}
    </Routes>
    </>
  )
}

export default NavPage