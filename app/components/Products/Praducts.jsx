"use client";

import LeftIcon from '@/assets/icons/LeftIcons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import CardIcon from '@/assets/icons/CardIcon';

function Praducts({ title, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://6dde240d7bb14ccf.mokky.dev/Praducts")
      .then((res) => {
        const filtered = res.data.filter(item => item.category === category);
        setProducts(filtered);
      })
      .catch((err) => console.log('Xatolik', err));
  }, [category]);

  return (
    <section className='praducts'>
      <div className="container">
        <div className="praducts_content">
          <h1 className='praducts_title'>{title}</h1>
          <Link className='praducts_routs' href="#">Hammasini ko'rish <LeftIcon /></Link>
        </div>

        <div className="praducts_desktop-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 4, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              765: { slidesPerView: 3, spaceBetween: 20 },
              1015: { slidesPerView: 5, spaceBetween: 30 },
              1300: { slidesPerView: 6, spaceBetween: 20 },
            }}
            modules={[Navigation]}
            className="praducts_swiper"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id} className='praducts_card'>
                <Link href={`/routes/products/${item.id}`}>
                  <div className="praducts_card-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h3 className="praducts_card-title">{item.name}</h3>
                  <p className='praducts_card-tobe'>dan {Math.ceil(item.prices / 24).toLocaleString('ru-RU')} so'm/oyga</p>
                  <p className='praducts_card-delprice'>{item.oldprices}</p>
                  <p className='praducts_card-price'>{item.prices}</p>
                  <button className='praducts_card-addcard'><CardIcon /> Savatga</button>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="praducts_mobile">
          <div className="praducts_mobile-list">
            {products.map((item) => (
              <Link className='praducts_list' key={item.id} href={`/routes/products/${item.id}`}>
                <div className="praducts_card-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3 className="praducts_card-title">{item.name}</h3>
                <p className='praducts_card-tobe'>dan {Math.ceil(item.prices / 24).toLocaleString('ru-RU')} so'm/oyga</p>
                <p className='praducts_card-delprice'>{item.oldprices}</p>
                <p className='praducts_card-price'>{item.prices}</p>
                <button className='praducts_card-addcard'><CardIcon /> Savatga</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Praducts;
