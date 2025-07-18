"use client";


import CardIcon from '@/assets/icons/CardIcon';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function PraductsList() {

  const [praductsList, setPraductsList] = useState([]);

  useEffect(() => {
    axios.get("https://6dde240d7bb14ccf.mokky.dev/PraductsList")
      .then((res) => {
        setPraductsList(res.data)
      })
      .catch((err) => {
        console.log("Xatolik", err)
      })
  }, [])



  return (
    <section className='praductslist'>
      <div className="container">
        <h1 className="praductslist_title">Sizni qiziqtirishi mumkin</h1>
        <div className="praductslist_row">
          {
            praductsList.map((item) => (
              <div key={item.id}>
                <Link href={`/routes/praductslist/${item.id}`} className='praductslist_card'>
                  <>
                    <div className="praducts_card-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <h3 className="praducts_card-title praductslist_card-title">{item.name}</h3>
                    <p className='praducts_card-tobe'>dan {Math.ceil(item.prices / 24).toLocaleString('ru-RU')} so'm/oyga</p>
                    <p className='praducts_card-delprice'>{item.oldprices}</p>
                    <p className='praducts_card-price'>{item.prices}</p>
                  </>
                  <button className='praducts_card-addcard'><CardIcon /> Savatga</button>
                </Link>
              </div>
            ))
          }
        </div>
        <button className="praductslist_more-btn">Ko'proq ko'rsatish</button>
      </div>
    </section>
  )
}

export default PraductsList