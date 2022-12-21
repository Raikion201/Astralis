import React from "react";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import classNames from "../../components/utils/classNames"
import styles from './ScrollToTop.module.scss'

export const  ScrollToTop  = () => {
const [isVisible,setIsVisible] = useState(false)
      const toggleVisibility = () =>{
          if(window.pageYOffset > 300) {
            setIsVisible(true);
          }else {
            setIsVisible(false)
          }
      };
        useEffect(() => {
          window.addEventListener('scroll',toggleVisibility);
          const cleanUp = () => {
                window.removeEventListener('scroll',toggleVisibility)
          };
          return cleanUp;
         },[ ] )
        return (
          <div className="fixed bottom-2 right-2">
          <button onClick={() => {
            window.scrollTo({top:0,behavior:'smooth'})
          }}
                  className={classNames(  
                  (isVisible ? `${styles.toTop} ${styles.active} ` : styles.toTop),
                        )}
            >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
          </div>
        )
}