"use client";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Banner() {

    const [banners, setBanners] = useState([])

    useEffect(() => {
        axios.get('https://6dde240d7bb14ccf.mokky.dev/banners')
            .then((res) => {
                setBanners(res.data)
            })
            .catch((err) => {
                console.log("Xatolik", err)
            })
    })

    return (
        <section className='banner'>
            <div className="container">
                <Swiper
                    loop={true}
                    cssMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 4000, // 5 soniya
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="banner_swiper"
                >
                    {
                        banners.map(item => (
                            <SwiperSlide className='banner_card' key={item.id} >
                                <img className='banner_img' src={item.image} alt="Banner images" />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        </section>
    )
}

export default Banner