"use client";


import LeftIcon from '@/assets/icons/LeftIcons';
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Brands() {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        axios.get("https://6dde240d7bb14ccf.mokky.dev/brands")
            .then((res) => {
                setBrands(res.data)
            })
            .catch((err) => {
                console.log("Api Error", err)
            })
    }, [])

    return (
        <section className='brands'>
            <div className="container">
                <div className="brands_content">
                    <h1 className='brands_title'>Mashhur brendlar</h1>
                    <Link className='brands_routs' href="#">Hammasini ko'rish <LeftIcon /></Link>
                </div>

                <div className="brands_row">
                    {
                        brands.map((item) => (
                            <div key={item.id}>
                                <Link href={`#`} className='brands_card'>
                                    <div className="brands_card-img">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <h2 className="brands_card-title">{item.name}</h2>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Brands