import React from 'react'
import NavPage from './NavPage'
import Navbar from './navbar/Navbar'
import {ScrollToTop} from '../assets/Scroll/ScrollToTop'
const MainPage = () => {
  return (
    <div className='pt-16'>
    <Navbar />
    <NavPage />
    <ScrollToTop/>
    </div>
  )
}

export default MainPage