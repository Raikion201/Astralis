import React from 'react'
import styles from './Navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
const Navbar = () => {
    const active = clsx(styles.bgRed);
    const normal = clsx(styles.home);
  return (
    <>
    <div className=' fixed z-10 w-full h-16 flex top-0 bg-black text-white text-xs sm:text-base font-bold'>
        <div className='grid grid-flow-col space-x-1'>
        <NavLink to ='/' className={ ({isActive}) => `${(isActive ? active : normal )} flex relative sm:h-16 px-2 sm:px-4 max-w-fit`} >
            <h1 className='m-auto'>HOME</h1>
        </NavLink>
        <NavLink to ='Players' className={ ({isActive}) => `${(isActive ? active : normal )} flex relative h-16 px-2 sm:px-4  max-w-fit`}>
            <h1 className='m-auto'>PLAYERS</h1>
        </NavLink>
        <NavLink to ='History' className={ ({isActive}) => `${(isActive ? active : normal )} flex relative h-16 px-2 sm:px-4 max-w-fit`}>
            <h1 className='m-auto'>HISTORY</h1>
        </NavLink>
        <div className='cursor-pointer hidden lg:block'>
        <ul className={`${styles.featured} absolute px-4 max-w-fit`}>
                <li className={`${styles.subNav}`} >FEATURED</li>
                 <a href='/' className={`${styles.subNav}  `}>
                 <li >
                    MATCHES
                </li>
                    </a>
                 <a href='/' className={`${styles.subNav}  `}>
                <li>PLAYS</li>
                </a>
        </ul>
        </div>
        </div>
        <a href='/' className={`${styles.img} hidden absolute h-12 lg:flex m-auto img`}>
        <img src='astralisLogo.png'alt='this is an img' />
        </a>
        <div className='flex-grow'></div>
        <Link to = "/shop" className={`${styles.signInBtn} m-auto mr-10 `}>
            <div className='sm:px-2' >SHOP</div>
        </Link>
    </div>
    </>
  )
}

export default Navbar