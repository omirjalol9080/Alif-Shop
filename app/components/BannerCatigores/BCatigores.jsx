"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import axios from 'axios';

function BCatigores() {
    const [bcatigores, setBcatigores] = useState([]);

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    const groupedData = chunkArray(bcatigores, 5);

    useEffect(() => {
        axios.get('https://6dde240d7bb14ccf.mokky.dev/BannerKatigores')
            .then((res) => {
                setBcatigores(res.data);
            })
            .catch((err) => {
                console.log("Xatolik", err);
            });
    }, []);

    return (
        <section className='bcatigores'>
            <div className="container">
                <Swiper
                    loop={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={false}
                    className="bcatigores_swiper"
                >
                    {groupedData.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="bcatigores_group">
                                {group.map((item) => (
                                    <div className="bcatigores_card" key={item.id}>
                                        <div className="bcatigores_card-img">
                                            <img src={item.img} alt="bcatigores image" />
                                        </div>
                                        <p className='bcatigores_card-title' >{item.name}</p>
                                    </div>
                                    
                                ))}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default BCatigores;
