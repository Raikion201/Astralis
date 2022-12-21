import AOS from 'aos';
import 'aos/dist/aos.css';
import  PlayersContent  from './PlayersContent'
import styles from './Players.module.scss'
import React,{ createContext,useState } from 'react'
export const PlayersContext = createContext()
AOS.init({
  once: true
});

const navContent = [{
  name:'zonic',
  role:'Main Coach',
  img:'./zonicCard.png'
},
{
  name:'gla1ve',
  role:'Ingame Leader',
  img:'./gla1veCard.png'
},
{
  name:'dev1ce',
  role:'Awper',
  img:'./deviceCard.png'
},
{ 
  name:'xyp9x',
  role:'Rifler',
  img:'./xyp9xCard.png'
},
{ 
  name:'Magisk',
  role:'Rifler',
  img:'./magiskCard.png'
},{
  name:'dupreeh',
  role:'Entry Fragger',
  img:'./dupreehCard.png'
}]

const Players = () => {
 
  const [id,setId] = useState();
  return (
    <>
    {/* CONTENT  */}
        <PlayersContext.Provider value={id}>
    <div className='wrapper'>
      <div className={`grid grid-cols-12 w-full`}>
        <div className={`col-span-8 md:col-span-9`}>
          <PlayersContent />
         </div>
         {/* SIDE NAV */}
        <div  className={`col-span-4 md:col-span-3`}>
    <div className={`${styles.wrapper} bg-black text-xs whitespace-nowrap sm:text-xl lg:text-3xl`}>
        <div className={`${styles.players}`}>
      <div className='mt-4 mb-4 flex justify-center font-bold text-gray-300'>
        Player Roster
        </div>
        <div>
        {navContent.map( (content,index) =>
          (
            <div key={index} className={`${(index === id) ? styles.active : styles.normal} pb-8 mb-4`}>
        <button onClick={() => {
          setId(index)
          window.scrollTo({top:0  });
          }}  
        className={`${styles.name} text-xs sm:text-base lg:text-2xl font-medium uppercase text-white`}>
                {content.name}
                <div className='text-xs sm:text-sm lg:text-lg font-semibold text-black'>
                    {content.role}
               
            </div>  
            <div className={`${styles.imgWrapper}`}>
            <img className='' src={content.img} alt='' ></img>    
            </div>
            </button>
            </div>
            )
         ) 
        }
        </div>
    </div>
    </div>
        </div>
      </div>
    </div>
        </PlayersContext.Provider>
    </>
  )
}

export default Players
