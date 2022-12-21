import React,{useState} from "react";
import Slider from "react-slick";
import styles from "./HistorySlider.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    arti : 'CHAP 1',
    img : './chap1.jpg',
    title : 'CHAPTER 1 : THE CURSE'
  },
  {
    arti : 'CHAP 2',
    img : './chap2.jpg',
    title : 'CHAPTER 2 : BETRAYED'
  },
  {
    arti : 'CHAP 3',
    img : './chap3.jpg',
    title : 'CHAPTER 3 : GLORY'
  },
  {
    arti : 'CHAP 4',
    img : './chap4.jpg',
    title : 'CHAPTER 4 : COLLAPSE'
  }
]
const HistorySlider = () => {
  const [chap,setChap] = useState(false);
  const handleClick = () =>{
    setChap(true)
    console.log(chap)
  }
    const settings = {
      
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      arrow : false,
      autoplay: true,
  autoplaySpeed: 5000,
    };
    return (
      <div  className={`${styles.sliderWrap} cursor-col-resize overflow-hidden `}>
        <Slider {...settings}>
          {
            data.map( (content,index) => {
            if (!chap) {return(
              <div className={`${styles.contentWrap}`} key={index}>
                <img className={`${styles.image} `} src={content.img} alt="prime" >
                </img>
                <div className={`${styles.titleWrap}`}>
                <div className={`${styles.title} z-10 text-2xl md:text-5xl lg:text-7xl font-bold text-white`}>{content.title}</div>
                <button className={`${styles.btn} text-base md:text-3xl lg:text-4xl`} onClick = {handleClick}  >READ NOW↗</button>
                </div>
              </div>
            )}else if(chap) {
              return (
                <>
                <div className='bg-white text-9xl h-fit text-center'>{content.arti}
                <div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt voluptatum magnam rerum perferendis, consectetur cum distinctio nostrum! Consectetur voluptatibus aut iusto porro dicta voluptatem quasi molestias est reprehenderit omnis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt voluptatum magnam rerum perferendis, consectetur cum distinctio nostrum! Consectetur voluptatibus aut iusto porro dicta voluptatem quasi molestias est reprehenderit omnis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt voluptatum magnam rerum perferendis, consectetur cum distinctio nostrum! Consectetur voluptatibus aut iusto porro dicta voluptatem quasi molestias est reprehenderit omnis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt voluptatum magnam rerum perferendis, consectetur cum distinctio nostrum! Consectetur voluptatibus aut iusto porro dicta voluptatem quasi molestias est reprehenderit omnis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt voluptatum magnam rerum perferendis, consectetur cum distinctio nostrum! Consectetur voluptatibus aut iusto porro dicta voluptatem quasi molestias est reprehenderit omnis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt voluptatum magnam rerum perferendis, consectetur cum distinctio nostrum! Consectetur voluptatibus aut iusto porro dicta voluptatem quasi molestias est reprehenderit omnis.
</div>
                </div>
                </>
              )
            }
            return null;
          } 
           )
          }
          
        </Slider>
      </div>
    );
  }
export default HistorySlider