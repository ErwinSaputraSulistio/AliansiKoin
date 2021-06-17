import css from './styles.module.css';
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
// MOLECULES
import Navbar from '../../molecules/Navbar';
// IMAGES
import WarrenBuffett from '../../../assets/images/WB.png';

export default function Home() {
   const [newsState, setNewsState] = useState("nol")
   const financeArray = [
      {
         id: "a1", 
         img: "https://preview.pixlr.com/images/800wm/100/1/1001348145.jpg", 
         news: "Inflation keep rising every year, and so many people still don't know anything at all about investing and trading. Result in unprepared future and money management unstability."
      }, 
      {
         id: "b2", 
         img: "https://t3.ftcdn.net/jpg/03/00/26/00/360_F_300260035_3ORfVhdmpBV1be51VFJHicIgiIjE8Wm2.jpg",
         news: "Blockchain technologies like example of cryptocurrencies (BitCoin, Ethereum, etc), currently is a new solution of investing, giving you an another amazing investment instruments."
      }, 
      {
         id: "c3", 
         img: WarrenBuffett,
         news: "Warren Buffett, the third richest man in the world, gain his wealth by investing stocks since he was 11. He also invested to one of the most popular product's stocks, Coca Cola."
      }
   ]
   useEffect(() => {
      document.title = "Aliansi Koin - Home"
   }, []);
   return(
      <div className={"displayColumn poppinsFont showInAnimation " + css.homeTemplate} state={newsState}>
         <Navbar/>
         <div className={css.homeHeader}>
            <div className={"displayColumn slideLeft " + css.homeHeaderText}>
               <span className="defaultBigText">Aliansi Koin</span>
               <span className={"defaultSmallText " + css.homeHeaderTextBottom}>"Your best trusted partner for all news and things about Blockchains and Cryptos."</span>
            </div>
            <div className={"displayColumn slideRight " + css.homeCarouselArea}>
               <u className="defaultMediumText" style={{fontWeight: "bold"}}>Financial Facts</u>
               <Carousel>
                  {financeArray.map((item) => {
                     return(
                        <div className={"displayColumn hoverThis " + css.homeCarouselInside} key={item.id} onClick={ () => { setNewsState(item.id) } }>
                           <img className={css.homeCarouselNewsImg} src={item.img}/>
                           <span style={{padding: "1.5vw", textAlign: "justify"}}>{item.news}</span>
                        </div>
                     )
                  })}
               </Carousel>
            </div>
         </div>
      </div>
   );
}