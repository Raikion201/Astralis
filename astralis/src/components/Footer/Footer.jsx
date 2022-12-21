import React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faYoutube,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
    <div  data-aos="fade-right" className={`${styles.wrapperTop}  text-white`}>
      <h1 className='text-xl sm:text-4xl p-4 w-fit  flex m-auto '>Follow the Astralis family</h1>
      </div>
      <div  data-aos="fade-right" className={`${styles.wrapperBot} flex-col  text-white`}>
        <div  className={`${styles.iconWrapper} text-base sm:text-xl space-x-1 sm:space-x-3`}>
          <a href='https://twitter.com/astralisgg' rel="noreferrer" target='_blank'>
      <FontAwesomeIcon  icon={faTwitter} className={`${styles.icon}`} />
      </a>
          <a href='https://www.facebook.com/astralisgg' rel="noreferrer" target='_blank'>
      <FontAwesomeIcon icon={faFacebook} className={`${styles.icon}`} />
      </a>
          <a href='https://www.youtube.com/astralisgg'rel="noreferrer" target='_blank'>
      <FontAwesomeIcon icon={faYoutube} className={`${styles.icon}`} />
      </a>
          <a href='https://www.instagram.com/astralis/'rel="noreferrer" target='_blank'>
      <FontAwesomeIcon icon={faInstagram} className={`${styles.icon}`} />
      </a>
      </div>
      <div className={`${styles.textWrapper}`}>
        Powered by Proz
      </div>
      </div>
      </>
  )
}

export default Footer