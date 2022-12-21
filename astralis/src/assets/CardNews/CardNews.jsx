import React from 'react'
import styles from './CardNews.module.scss'
const CardNews = (props) => {
  return (
    <>
    <div>
        <div className={`${styles.image}`}>
            <img src={props.imgsrc} alt=' ' className=''></img>
        </div>
        <div className={`${styles.content} text-sm lg:text-base`}>
          <div className={`${styles.title}`}>
            <p >{props.title}</p>
            </div>
            <div className={`${styles.category}`}>{props.category}</div>
            <div className={`${styles.date}`}>{props.date}</div>
        </div>
    </div>
    </>
  )
}

export default CardNews