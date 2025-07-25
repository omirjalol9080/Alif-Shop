import React from 'react'
import Cotigore from '../Catigores/Cotigore'
import Navigation from '../BottomNavigation/Navigation'
import Banner from '../Banner/Banner'
import BCatigores from '../BannerCatigores/BCatigores'
import DividerLine from '../DividerLine/DividerLine'
import Praducts from '../Products/Praducts'
import PraductsList from '../Products/PraductsList'
import Brands from '../Brands/Brands'
import DApps from '../DownApps/DApps'
import Info from '../Info/Info'

function Main() {
  return (
    <main>
      <Cotigore/>
      <Banner/>
      <BCatigores/>
      <DividerLine/>
      <Navigation/>
      <Praducts title="Chilla" category="chilla" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/>  
      <PraductsList/>
      <DividerLine/> 
      <Praducts title="Jaziramaga tayyorlaning" category="jazirama" />
      <DividerLine/> 
      <Praducts title="Avtotovarlar" category="avtotovar" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/> 
      <Praducts title="Foydali" category="foydali" />
      <DividerLine/>
      <Brands/>
      <DApps/>
      <Info/>
    </main>
  )
}

export default Main