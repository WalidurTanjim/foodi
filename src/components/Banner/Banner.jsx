"use client";

// banner images
import banner_01 from '../../../public/images/banner/banner_01.jpg';
import banner_02 from '../../../public/images/banner/banner_02.jpg';
import banner_03 from '../../../public/images/banner/banner_03.png';
import banner_04 from '../../../public/images/banner/banner_04.jpg';
import banner_05 from '../../../public/images/banner/banner_05.png';
import banner_06 from '../../../public/images/banner/banner_06.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import Image from 'next/image';

const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className='banner rounded-lg'>
            <Swiper style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff'
            }} loop={true} spaceBetween={10} navigation={true} autoplay={{ delay: 1700, disableOnInteraction: false }} thumbs={{ swiper: thumbsSwiper }} modules={[Autoplay, FreeMode, Navigation, Thumbs]} className="mySwiper2 rounded-lg h-[275px] lg:h-[350px] mb-3">
                <SwiperSlide className='relative w-full h-full'>
                    <Image fill alt='Banner Image' className='w-full h-full rounded-lg' src={banner_01} />
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <Image fill alt='Banner Image' className='w-full h-full rounded-lg' src={banner_02} />
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <Image fill alt='Banner Image' className='w-full h-full rounded-lg' src={banner_03} />
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <Image fill alt='Banner Image' className='w-full h-full rounded-lg' src={banner_04} />
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <Image fill alt='Banner Image' className='w-full h-full rounded-lg' src={banner_05} />
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <Image fill alt='Banner Image' className='w-full h-full rounded-lg' src={banner_06} />
                </SwiperSlide>
            </Swiper>

            <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} breakpoints={{
                0: { slidesPerView: 2 }, // Tailwind 'xs'
                640: { slidesPerView: 3 }, // Tailwind 'sm'
                768: { slidesPerView: 3 }, // Tailwind 'md'
                1024: { slidesPerView: 4 }, // Tailwind 'lg'
                1280: { slidesPerView: 5 }, // Tailwind 'xl'
            }} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper rounded-lg h-[50px] md:h-[70px]">
                <SwiperSlide><Image fill alt='Banner Image' className='w-full h-full rounded-md' src={banner_01} /></SwiperSlide>
                <SwiperSlide><Image fill alt='Banner Image' className='w-full h-full rounded-md' src={banner_02} /></SwiperSlide>
                <SwiperSlide><Image fill alt='Banner Image' className='w-full h-full rounded-md' src={banner_03} /></SwiperSlide>
                <SwiperSlide><Image fill alt='Banner Image' className='w-full h-full rounded-md' src={banner_04} /></SwiperSlide>
                <SwiperSlide><Image fill alt='Banner Image' className='w-full h-full rounded-md' src={banner_05} /></SwiperSlide>
                <SwiperSlide><Image fill alt='Banner Image' className='w-full h-full rounded-md' src={banner_06} /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;