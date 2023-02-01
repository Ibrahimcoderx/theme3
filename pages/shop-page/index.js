import React from 'react'
import Footer from '@/Components/Common/Footer'
import Menubar from '@/Components/Common/Menubar'
import ShopPage from '@/Components/LandingPage/ShopPage/ShopPage'

const index = () => {
  return (
    
    <>
      <div>

        <Menubar></Menubar>
        <ShopPage></ShopPage>
        <Footer></Footer>

      </div>     
    </>
  )
}

export default index;