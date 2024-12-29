
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"Form 11.00am to 10.00pm"}  
            heading={'Order Online'}>
              
            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 text-center"
      >
        <SwiperSlide>
            <img src={slide1} alt=""  />
            <h3 className='lg:text-3xl uppercase text-center lg:-mt-24 -mt-10 text-white'>Salads</h3>
             </SwiperSlide>
        <SwiperSlide> <img src={slide2} alt=""  />
        <h3 className='lg:text-3xl uppercase text-center lg:-mt-24 -mt-10 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={slide3} alt=""  />
        <h3 className='lg:text-3xl uppercase text-center lg:-mt-24 -mt-10 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={slide4} alt=""  />
        <h3 className='lg:text-3xl uppercase text-center lg:-mt-24 -mt-10 text-white'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={slide5} alt=""  />
        <h3 className='lg:text-3xl uppercase text-center lg:-mt-24 -mt-10  text-white'>Salads</h3>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;