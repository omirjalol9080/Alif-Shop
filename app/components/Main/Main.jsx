"use client";

import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

function Main() {

  const [praductsCategores, setPraductsCategores] = useState([])

  useEffect(() =>{
    axios.get("https://6dde240d7bb14ccf.mokky.dev/praducts_categore").then((res) => {
      setPraductsCategores(res.data)
    }).catch((err) => console.lof(err, "Get Error"))
  }, [])

  return (
    <main>
      <Cotigore/>
      <Banner/>
      <BCatigores/>
      {
        praductsCategores.map((item) => (
          <Praducts key={item.id} title={item.title} category={item.categore} />
        ))
      }
      <PraductsList/>
      <DividerLine/>
      <Brands/>
      <DApps/>
      <Info/>
      <Navigation/>
    </main>
  )
}

export default Main