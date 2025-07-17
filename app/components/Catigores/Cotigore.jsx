"use client";

import AgainIcon from '@/assets/icons/Again'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Cotigore() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("https://6dde240d7bb14ccf.mokky.dev/categories")
        .then((res) => {
            setCategories(res.data);
        })
        .catch((err) => {
            console.error("Xatolik", err)
        })
    })

    return (
        <section className='catigores'>
            <div className="container">
                <div className="catigores_row">
                    <div className="catigores_list">
                        {
                            categories.map(item => (
                                <Link key={item.id} className='catigores_link' href={`#`}>{item.name}</Link>
                            ))
                        }
                    </div>
                    <button className='catigores_btn'>
                        Yana
                        <span><AgainIcon /></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cotigore