'use client';
import AviyaIcon from '@/assets/icons/AviyaIcon'
import CardIcon from '@/assets/icons/CardIcon'
import LikeIcon from '@/assets/icons/LikeIcon'
import MenyuIcon from '@/assets/icons/MenyuIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import Link from 'next/link'
import HeaderSearch from './HeaderSearch';
import MobileSearch from './HeaderMobileComponent/MobileSearch';
function Header() {



  return (
    <>
      <div className='header'>
        <div className="container">
          <div className="header_row">
            <Link className='header_logo' href={`/`}>
              <img src="./img/Logo/alifshop-logo.svg" alt="Logo" />
            </Link>
            <button className="header_katalog-btn">
              <span className='header_katalog-icon'>
                <MenyuIcon />
              </span>
              <p className='header_katalog-btn-content'>Tovarlar katalogi</p>
            </button>
            <HeaderSearch/>
            <nav className='header_nav'>
              <Link className='header_link' href={`#`}>
                <CardIcon />
                <p>Savat</p>
              </Link>

              <Link className='header_link' href={`#`}>
                <AviyaIcon />
                <p>Aviyachitalar</p>
              </Link>

              <Link className='header_link' href={`#`}>
                <LikeIcon />
                <p>Saralanganlar</p>
              </Link>
            </nav>
            <button className="header_login-btn">Kirish</button>
            <div className="header_lang">
              <p className='header_langue'>РУС <span>/</span></p>
              <p className='header_langue'>UZB</p>
            </div>
          </div>
          <div className="header_mobile">
            <MobileSearch/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header