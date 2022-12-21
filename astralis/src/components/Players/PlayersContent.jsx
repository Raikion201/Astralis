import React from 'react'
import DefaultPage from './pages/DefaultPage'
import { useContext } from 'react'
import { PlayersContext } from './Players'
import styles from './PlayersContent.module.scss'
import {players} from './PlayerData'


const PlayersContent = () => {
  const playerId = useContext(PlayersContext)
  return(
    <>
      {
        (playerId === undefined) && <DefaultPage/> 
      }
      {
        (playerId !== undefined) && 
        players.map( (player,index) => {
          if (index === playerId) return  (
              <div key={index} className={`${styles.wrapper} flex flex-col lg:grid lg:grid-cols-12 gap-x-4`}>
              <div data-aos="fade-right" className={` col-span-4 w-4/5 self-center lg:self-start lg:w-full  bg-white h-fit`}>
                <div className='uppercase text-center texl-xl sm:text-3xl font-bold w-full bg-yellow-200'>{player.name}</div>
                <div className='h-fit flex justify-center bg-gray-200'>
                  <img className='w-full'  src={player.image} alt="test" />
                </div>
                <div className='bg-yellow-200 text-center w-full texl-xl sm:text-2xl font-semibold'>
                  Personal Information
                  </div>
                  <div className={`${styles.infoWrapper}  w-full`}>
                      {
                        player.info.map( (info,index) => {
                          const obj = info;
                          const key = Object.keys(obj);
                          return(              
                            <div key={index} className={`${styles.info} grid grid-cols-2`}>
                            <div className={`${styles.infoCat} capitalize flex justify-end col-span-1 text-xs sm:text-sm `}>{`${key[0]} :`}</div>
                            <div className={`${styles.infoCon} capitalize flex justify-start col-span-1 bg-gray-200 text-xs sm:text-sm `}>{obj[key[0]]}</div>
                            </div>
                            )
                        })
                      }
                </div>
                <div className='bg-yellow-200 text-center w-full texl-xl sm:text-2xl font-semibold'>
                  History
                  </div>
                  <div className={`${styles.infoWrapper} w-full`}>
                      {
                        player.history.map( ( info,index) => {
                          const obj = info;
                          const key = Object.keys(obj);
                          return(              
                            <div key={index} className={`${styles.info} grid grid-cols-2 `}>
                              <div className='w-full float-left'>
                            <div className={`${styles.historyTime} capitalize flex justify-end col-span-1 float-left `}>{`${key[0]} `}</div>
                            </div>
                            <div className={`${styles.historyTeam} capitalize flex justify-start col-span-1 bg-gray-200 `}>{obj[key[0]]}</div>
                            </div>
                            )
                        })
                      }
                </div>
              </div>
              

              <div className='col-span-8 pl-1 pr-1 sm:pl-8 sm:pr-8'>
                  <div data-aos="fade-up" data-aos-duration="500" className={`${styles.head} text-2xl lg:text-3xl`}>Biography</div>
                  <div data-aos="fade-up" data-aos-duration="500" className='text-base lg:text-xl lg:pl-12 lg:pr-12 '>
                    {player.bio}
                  </div>
                  <div data-aos="fade-up" data-aos-duration="500" className={`${styles.head} text-2xl lg:text-3xl`}>Trivia</div>
                  <ul data-aos="fade-up" data-aos-duration="500"   className='list-disc lg:pl-16 lg:pr-12 '>
                    {
                      player.trivia.map( (info,index) => (
                        <li  className='text-base lg:text-xl  ' key={index} >{info}</li>
                      ) )
                    }
                  </ul>
                  <div data-aos="fade-up" data-aos-duration="500"  className={`${styles.head} text-2xl lg:text-3xl`}>Memorable moments</div>
                  {
                    player.highlight.map( (target,index) => (
                      <>
                        <div data-aos="fade-up" data-aos-duration="500"   className='text-base lg:text-xl font-semibold mb-4'>{target.title} </div>
                   <div data-aos="fade-up" data-aos-duration="500" className='text-base lg:text-xl '>
                    {target.description}
                   </div>
                  <div data-aos="fade-up" data-aos-duration="500"  className='my-8 flex justify-center'>   
                  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${target.vid}`}
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen></iframe>
                  </div>
                      </>
                    ) )
                  }
                  
                </div>
         
                  
          </div>
            )
            return null;
      })
    }
    </>
  )
}
export default PlayersContent