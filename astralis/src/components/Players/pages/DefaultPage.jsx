import React from 'react'
import styles from './DefaultPage.module.scss'
const DefaultPage = () => {
  return (
    <div data-aos="fade-right" className='h-full bg-black'>
    <div className={`${styles.wrapper}`}>
        <div  className={`${styles.text} text-8xl`}>PRIME ROSTER</div>
    </div>
    </div>
  )
}

export default DefaultPage