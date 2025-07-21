import React from 'react'

function DApps() {
  return (
    <section className='dapps'>
        <div className="container">
            <div className="dapps_row">
                <div className="dapps_img">
                    <img src="./img/DApp/alifshop-app-uz.webp" alt="app img" />
                </div>
                <div className="dapps_content">
                    <h1 className="dapps_content-title">Ajoyib takliflar har doim yoningizda</h1>
                    <p className="dapps_content-subtitle">alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</p>
                    <div className="dapps_content-link">
                        <a href="#">
                            <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/play-market-icon.svg" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-store-icon.svg" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-gallery-icon.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="dapps_cr">
                    <div className="dapps_cr-img">
                        <img src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp" alt="kr img" />
                    </div>
                    <p className="dapps_cr-title">Yuklab olish uchun kamerangizni QR kodga qarating</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DApps