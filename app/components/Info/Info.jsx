"use client";

import React, { useState } from 'react'

function Info() {

    const [expanded, setExpanded] = useState(false);
    const maxLines = 6;

    return (
        <section className='info'>
            <div className="container">
                <div className="info_list">
                    <div className="info_card">
                        <h1 className="info_card-title">Alif Shop</h1>
                        <p
                            className="info_card-subtitle"
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: expanded ? "unset" : maxLines,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin. Bizning online do'konda elektronika, maishiy texnika, avtomobil va maishiy buyumlarning katta tanlovi mavjud. Biz barcha xalqaro standartlarga va umumiy qabul qilingan me'yorlarga muvofiq ishlaymiz. Alif do'konida kerakli tovarni toping!
                        </p>
                        <button
                            className="toggleBtn"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "Yashirish ▲" : "Barchasini ko'rsatish"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info