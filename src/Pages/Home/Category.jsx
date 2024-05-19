import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Category = () => {

    return (

        <section>
        <SectionTitle 
            subHeading={'From 11:00am to 10:00pm'}
            heading={'order online'}
        ></SectionTitle>
          

            <div className='mb-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >



                    <SwiperSlide>
                        <div className='flex justify-center relative'>
                            <img src={slide1} />
                            <p className='absolute mt-[350px] text-3xl text-white'>SALAD</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center relative'>
                            <img src={slide2} />
                            <p className='absolute mt-[350px] text-3xl text-white'>SALAD</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center relative'>
                            <img src={slide3} />
                            <p className='absolute mt-[350px] text-3xl text-white'>SALAD</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center relative'>
                            <img src={slide4} />
                            <p className='absolute mt-[350px] text-3xl text-white'>SALAD</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center relative'>
                            <img src={slide5} />
                            <p className='absolute mt-[350px] text-3xl text-white'>SALAD</p>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>


            <div className="bg-[url(https://i.ibb.co/1JZzDqz/chef-service.jpg)] flex justify-center items-center bg-cover bg-center max-w-screen-xl h-[572px]">
                <div className='bg-white h-80 w-[1080px] flex flex-col items-center justify-center px-40 rounded-lg'>
                    <h1 className='text-4xl text-[#151515] mb-4'>Bistro Boss</h1>
                    <p className='text-[#151515] text-base leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>

        </section>

    )
}

export default Category
