import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_row">

          <div className="footer_list">
            <p className="footer_list-name">Hujjatlar</p>
            <Link className="footer_list-title" href={`#`}>Sotish uchun umumiy shartlar</Link>
            <Link className="footer_list-title" href={`#`}>Nizom</Link>
            <Link className="footer_list-title" href={`#`}>Guvohnoma</Link>
          </div>

          <div className="footer_list">
            <p className="footer_list-name">Servis</p>
            <Link className="footer_list-title" href={`#`}>Namoz vaqti</Link>
            <Link className="footer_list-title" href={`#`}>Muddatli to'lov islomda</Link>
            <Link className="footer_list-title" href={`#`}>alif shopda soting!</Link>
            <Link className="footer_list-title" href={`#`}>Qaytarish</Link>
          </div>

          <div className="footer_list">
            <p className="footer_list-name">Tovarlar katalogi</p>
            <Link className="footer_list-title" href={`#`}>Smartfonlar va telefonlar</Link>
            <Link className="footer_list-title" href={`#`}>Eshitish vositasi</Link>
            <Link className="footer_list-title" href={`#`}>Gadjetlar</Link>
            <Link className="footer_list-title" href={`#`}>Smartfonlar uchun aksessuarlar</Link>
            <Link className="footer_list-title" href={`#`}>Soat va aksessuarlar</Link>
          </div>

          <div className="footer_list">

            <p className="footer_list-name">Biz ijtimoiy axborot vositalarida</p>
            <div className="footer_list-row">
              <Link href={`#`}>
                <img src="https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp" alt="Instagram" />
              </Link>
              <Link href={`#`}>
                <img src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg" alt="Facebook" />
              </Link>
              <Link href={`#`}>
                <img src="https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg" alt="Telegram" />
              </Link>
              <Link href={`#`}>
                <img src="https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg" alt="Ok" />
              </Link>
              <Link href={`#`}>
                <img src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg" alt="Tik Tok" />
              </Link>
            </div>
            <>
              <p className="footer_list-name">Axborot xizmati</p>
              <h3 className='footer_list-other'>@alifshop_uz</h3>
              <h3 className='footer_list-other'>+998 555 12 12 12</h3>
            </>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer