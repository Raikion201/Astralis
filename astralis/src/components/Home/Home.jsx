import React from 'react'
import styles from './Home.module.scss'
import CardNews from '../../assets/CardNews/CardNews'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import AOS from 'aos';
import {news} from './News'
import 'aos/dist/aos.css';
AOS.init({
  once: true
});

const Home = () => {
  return (
    <>
   
      <div className={`${styles.headerWrapper} relative `}>
        < video src='/astralisHeader.mp4' className={`${styles.videoHeader}`}  autoPlay loop muted  ></video>
        <div data-aos="fade-right" className={`${styles.headText} text-4xl lg:text-7xl font-bold absolute `}>#TOTHESTARS</div>
      </div>
      {/* CONTENT */}
      <div  className={`${styles.newsWrapper} relative pt-10 pb-10 px-8 h-96`}>
        <p data-aos="fade-right" className='pb-12 text-2xl lg:text-4xl font-bold '>NEWS</p>
        <div data-aos="fade-right" className={`${styles.newsCardWrapper} grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 `}>
          {news.map( (news,index) => 
            (
              <div key={news.index}>
              <CardNews title={news.title} imgsrc={news.imgsrc} category={news.category} date={news.date}
              key = {news.index}
              />
              </div>
            )
         )}
        </div>
      </div>
      
      <div className={`${styles.achievement} relative`}>
          <div data-aos="zoom-in" className={`${styles.boxAC} flex justify-center font-bold text-4xl`}>Achievement</div>
      <div className={`${styles.acContain} grid grid-cols-2 `}>
          <div data-aos="fade-up" className='text-white text-3xl md:text-6xl font-semibold m-auto'>4X MAJORS</div>
          <div data-aos="fade-up" className='text-white flex '>
            <img src='./major.jpg' alt=' ' className='m-auto w-1/2'></img>
          </div>
          <div data-aos="fade-up" className='text-white flex '>
            <img src='./stier.jpg'alt=' ' className='m-auto w-1/2'></img>
          </div>
          <div data-aos="fade-up" className='text-white m-auto text-3xl md:text-6xl font-semibold'>20X S-TIER</div>
          <div data-aos="fade-up" className='text-white text-3xl md:text-6xl m-auto font-semibold '>GRAND SLAM</div>
          <div data-aos="fade-up" className='text-white flex'>
          <img src='./grandslam.jpg' alt=' ' className='m-auto w-1/2'></img>
          </div>
      </div>
      </div>
      <div className='bg-black'>
      <div className={styles.toPlayers}>
          <ul data-aos="fade-right" >
            <li  className={`${styles.headerPlayers} text-7xl  lg:text-9xl font-bold text-white drop-shadow-xl`}>PLAYERS<br/>INFO</li>
            <li className='ml-4'>
              <Link to='/players' className={`${styles.visit} text-3xl lg:text-5xl  font-bold drop-shadow-xl`}>VISIT NOW↗</Link>
            </li>
          </ul>
      </div>
      </div>
      
      <div className='bg-black'>
      <div className={styles.toHistory}>
      <ul data-aos="fade-right">
            <li className={`${styles.headerHistory} text-7xl  lg:text-9xl font-bold text-white drop-shadow-xl`}>TEAM<br/>HISTORY</li>
            <li className='ml-4'>
              <Link to='/history' className={`${styles.visit} text-3xl lg:text-5xl font-bold drop-shadow-xl`}>VISIT NOW↗</Link>
            </li>
          </ul>
      </div>
      </div>
      <div className={styles.signinForm}>
          <div className={`${styles.wrapper} h-full grid gap-x-2 lg:gap-x-20 md:grid-cols-2 grid-cols-1`}>
            <div data-aos="fade-right" className='hidden sm:block text-4xl md:text-6xl font-bold m-auto text-white'>
              WELCOME<br/>TO<br/>ASTRALIS<br/>FAMILY
            </div>
            <div data-aos="fade-right" className={`text-red-500 formWrapper text-base sm:text-lg  font-medium leading-8 m-auto text-center`}>
              <div className='pb-4'>Sign up for the Astralis newsletter for exclusive insights,
                 the latest news, content, and exciting offers.</div>
                 <form>
              <input type='text' placeholder='Your Name'  required className={`${styles.inputSignin} w-full`} />
              <input type ='email' placeholder='Email' required className={`${styles.inputSignin} w-full`} />
              <input type="submit" value="Sign In" className={`${styles.submitSignin} w-full `} />
              </form>
            </div>
          </div>
      </div>
      <div className={styles.shop}>
      <ul>
            <li data-aos="fade-right" className={`${styles.headerHistory} text-7xl  lg:text-9xl font-bold text-white drop-shadow-xl`}>ASTRALIS<br/>OFFICAL<br/>SHOP</li>
            <li data-aos="fade-right" className='ml-4'>
              <Link to="/shop" className={`${styles.visit} text-3xl lg:text-5xl font-bold drop-shadow-xl`}>VISIT NOW↗</Link>
            </li>
          </ul>
      </div>
          {/* NEXUS */}    
          <div className={styles.nexus}>
      <ul>
            <li data-aos="fade-right" className={`${styles.headerPlayers} text-7xl  lg:text-9xl font-bold text-white drop-shadow-xl`}>ASTRALIS<br/>NEXUS</li>
            <li data-aos="fade-right" className='ml-4'>
              <a target='_blank' href='https://astralisnexus.gg/en/home/' rel="noreferrer" className={`${styles.visit} text-3xl lg:text-5xl font-bold drop-shadow-xl`}>VISIT NOW↗</a>
            </li>
          </ul>
      </div>
      <Footer/>
    </>
  )
}

export default Home