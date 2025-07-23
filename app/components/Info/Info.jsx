"use client";

import React from 'react'
import ReactShowMoreText from 'react-show-more-text';

function Info() {
    return (
        <section className='info'>
            <div className="container">
                <div className="info_list">
                    <div className="info_card">
                        <h1 className="info_card-title">Alif Shop</h1>
                        <ReactShowMoreText
                            lines={6} // qancha qatorgacha ko‘rsatishni aytadi
                            more="Barchasini ko'rsatish"
                            less="Yashirish ▲"
                            anchorClass="toggleBtn"
                            expanded={false}
                            truncatedEndingComponent={"..."}
                            className="info_card-subtitle"
                        >
                            <p >
                                alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin. Bizning online do'konda elektronika, maishiy texnika, avtomobil va maishiy buyumlarning katta tanlovi mavjud. Biz barcha xalqaro standartlarga va umumiy qabul qilingan me'yorlarga muvofiq ishlaymiz. Alif do'konida kerakli tovarni toping!
                            </p>
                        </ReactShowMoreText>
                    </div>
                    <div className="info_card">
                        <h1 className="info_card-title">Alif Shop</h1>
                        <ReactShowMoreText
                            lines={6} // qancha qatorgacha ko‘rsatishni aytadi
                            more="Barchasini ko'rsatish"
                            less="Yashirish ▲"
                            anchorClass="toggleBtn"
                            expanded={false}
                            truncatedEndingComponent={"..."}
                            className="info_card-subtitle"
                        >
                            <p >
                                alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin. Bizning online do'konda elektronika, maishiy texnika, avtomobil va maishiy buyumlarning katta tanlovi mavjud. Biz barcha xalqaro standartlarga va umumiy qabul qilingan me'yorlarga muvofiq ishlaymiz. Alif do'konida kerakli tovarni toping!
                            </p>
                        </ReactShowMoreText>
                    </div>
                    <div className="info_card">
                        <h1 className="info_card-title">Alif Shop</h1>
                        <ReactShowMoreText
                            lines={6} // qancha qatorgacha ko‘rsatishni aytadi
                            more="Barchasini ko'rsatish"
                            less="Yashirish ▲"
                            anchorClass="toggleBtn"
                            expanded={false}
                            truncatedEndingComponent={"..."}
                            className="info_card-subtitle"
                        >
                            <p >
                                alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin. Bizning online do'konda elektronika, maishiy texnika, avtomobil va maishiy buyumlarning katta tanlovi mavjud. Biz barcha xalqaro standartlarga va umumiy qabul qilingan me'yorlarga muvofiq ishlaymiz. Alif do'konida kerakli tovarni toping!
                            </p>
                        </ReactShowMoreText>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info