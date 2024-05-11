import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const palmRoyale = windowWidth <= 1024 ? 
  "https://m.media-amazon.com/images/M/MV5BNTc3NzA0YWQtNDA0MC00MjE1LWExZTMtNzY0YWIxYzdkNTRmXkEyXkFqcGdeQXVyMTY2MjE4Mzkz._V1_.jpg" 
  : "https://www.metacritic.com/a/img/catalog/provider/2/13/2-bfad40189ee61375b1bb3967b6b5f589.jpg";

  const dark_matter = windowWidth <= 1024 ? 
  "https://m.media-amazon.com/images/M/MV5BZTYzNGIzNDItMjQ5Yy00NmNiLWI4YTQtNzVjYzBjZDEzNDdjXkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_FMjpg_UX1000_.jpg" 
  : "https://www.apple.com/tv-pr/articles/2024/04/apple-tv-debuts-trailer-for-dark-matter-starring-joel-edgerton-and-jennifer-connelly/images/big-image/big-image-01/041124_Apple_Debuts_Trailer_Dark_Matter_Big_Image_01_big_image_post.jpg.large.jpg";
  
  const sugar = windowWidth <= 1024 ? 
  "https://m.media-amazon.com/images/M/MV5BZTc1ODE4ZmMtYjkyOS00Y2Y3LWJiNjEtYTliNDMxNzhiMGUxXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg" 
  : "https://www.apple.com/tv-pr/shows-and-films/s/sugar/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Sugar_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1714395197091";
  
  const loot = windowWidth <= 1024 ? 
  "https://m.media-amazon.com/images/M/MV5BNGIyODI3ODUtMGE5MS00ZTMwLWJhYjAtNDNkMTQzYTcwODU1XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg" 
  : "https://www.apple.com/tv-pr/articles/2022/07/apples-global-comedy-sensation-loot-renewed-for-season-two/images/big-image/teaser/ATV_Loot_Key_Art_big_image_post.jpg.og.jpg";
  
  const ted_lasso = windowWidth <= 1024 ? 
  "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" 
  : "https://www.apple.com/tv-pr/shows-and-films/t/ted-lasso/images/season-03/show-home-graphic-header/key-art-02/4x/Ted_Lasso_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1704926572286";
  
  const acapulco = windowWidth <= 1024 ? 
  "https://m.media-amazon.com/images/M/MV5BNzAxZTRmNzAtOWVhOS00NTYzLTlkYWItOWRmMTNhZTZiZjc0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg" 
  : "https://www.apple.com/tv-pr/articles/2021/09/apples-acapulco-a-new-spanish-and-english-language-series-starring-eugenio-derbez-debuts-trailer-ahead-of-global-premiere-on-october-8/images/big-image/big-image-01/092321_Acapulco_Eugenio_Derbez_Debuts_Trailer_Big_Image_01_big_image_post.jpg.large.jpg";
  
  return (
    <div className='h-[80vh] bg-[rgb(251,251,251)]'>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='h-full w-full bg-[rgb(251,251,251)]'>
            <img 
              src={palmRoyale} 
              alt="palm_royale" 
              className='absolute w-full h-full object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full bg-[rgb(251,251,251)]'>
            <img 
              src={dark_matter}
              alt="dark_matter" 
              className='absolute w-full h-full object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full bg-[rgb(251,251,251)]'>
            <img 
              src={sugar}
              alt="sugar" 
              className='absolute w-full h-full object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full bg-[rgb(251,251,251)]'>
            <img 
              src={loot} 
              alt="loot" 
              className='absolute w-full h-full object-contain'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full bg-[rgb(251,251,251)]'>
            <img 
              src={ted_lasso} 
              alt="ted lasso" 
              className='absolute w-full h-full object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full bg-[rgb(251,251,251)]'>
            <img 
              src={acapulco} 
              alt="acapulco" 
              className='absolute w-full h-full object-contain'/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
