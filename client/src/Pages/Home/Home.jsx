import React, { useContext } from 'react'
import Container1 from '../../Components/Container1/Container1'
import Container2 from '../../Components/Container2/Container2'
import Picturebox from '../../Components/Picturebox/Picturebox'
import Swiper from '../../Components/Swiper/Swiper'
import Banner from '../../UIKIt/Banner/Banner'
import ApexLogo from '../../Assets/img/apexlogo.png'
import dataContext from '../../Context/dataContext'

const Home = () => {
  const { Products, Apex } = useContext(dataContext)
  return (
    <div>
      <Container1 />
      <Swiper imgsrc={ApexLogo} header={'Lastest in'} productslist={Apex} />
      <Container2 />
      <Swiper header={'Lastest from Alpine'} productslist={Products} />
      <Picturebox />
      <Banner />
    </div>
  )
}

export default Home
