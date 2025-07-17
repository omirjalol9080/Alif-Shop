import AviyaIcon from '@/assets/icons/AviyaIcon'
import CardIcon from '@/assets/icons/CardIcon'
import HomeIcon from '@/assets/icons/Home'
import KatalogIcon from '@/assets/icons/KatalogIcon'
import ProfilIcon from '@/assets/icons/ProfileIcon'
import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <div className='navigation'>
            <div className="navigation_row">
                <Link href={`#`} className="navigation_btn">
                    <HomeIcon />
                    <p>Asosiy</p>
                </Link>
                <Link href={`#`} className="navigation_btn">
                    <KatalogIcon />
                    <p>Katalog</p>
                </Link>
                <Link href={`#`} className="navigation_btn">
                    <CardIcon />
                    <p>Savat</p>
                </Link>
                <Link href={`#`} className="navigation_btn">
                    <AviyaIcon />
                    <p>AviyaChiptalar</p>
                </Link>
                <Link href={`#`} className="navigation_btn">
                    <ProfilIcon />
                    <p>Profil</p>
                </Link>
            </div>
        </div>
    )
}

export default Navigation