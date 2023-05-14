import { useState } from 'react';
import styles from '../../styles/theme_3/theme_3.module.css';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import {FiHeart } from "react-icons/fi";
import {AiOutlineShoppingCart } from "react-icons/ai";
import {BiUser } from "react-icons/bi";
import {GoThreeBars } from "react-icons/go";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';




const Menubar = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);


  return (

    <>

      <section className={styles.MenubarSec}>

        <Container>

          <Row>

            <Col md={12}>

              <div className={styles.DesktopMenu}>

                <div className={styles.MenubarDiv}>

                    <div className={styles.logoDiv}>

                        <img src="images/logo3.png" alt="img" /> 

                        <Link className={styles.Link1} href='#'>Burgy</Link>

                    </div>
                    
                    {/* mid */}
                    <div className={styles.middleMenuDiv}>

                      <Link className={styles.Active} href=''>Home</Link>

                      <Link className={styles.Link3} href='/shop-page'>Shop</Link>

                      <Link className={styles.Link4} href='/product-details'>About Us</Link>

                      <Link className={styles.Link5} href='#'>Contact Us</Link>
                    </div>

                    {/* right */}
                    <div className={styles.lastMenuDiv}>

                          <FiHeart className={styles.menuicon}></FiHeart> 

                          <span className={styles.TopNum}>7</span>   

                          <Link className={styles.L2} href='#'>Wishlist</Link>

                          <span className={styles.divider}></span>

                          <AiOutlineShoppingCart className={styles.menuicon}></AiOutlineShoppingCart>

                          <span className={styles.TopNum}>2</span>

                          <Link className={styles.L3} href='#'>Cart</Link>

                          <span className={styles.divider}></span>

                          <BiUser className={styles.menuicon}></BiUser>
                          
                          <Link className={styles.L4} href='#'>Account</Link>

                    </div>
                  
                </div>

              </div>

              {/* Mobile Menu */}

              <div className={styles.MobileMenu}>

                <div className={styles.MenubarDiv}>

                  <div className={styles.logoDiv}>
                      <img src="images/logo3.png" alt="img" /> 
                      <Link className={styles.Link1} href='#'>Burgy</Link>
                  </div>

                  <div className={styles.MobileTabs}>

                    <Button className={styles.MeniBarIcon} onClick={handleShow}>
                      <GoThreeBars/>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>

                      <Offcanvas.Header closeButton className={styles.offcanvasheader}></Offcanvas.Header>

                        <Offcanvas.Body className={styles.CanVasMobBg}>

                            <div className={styles.middleMenuDiv}>

                              <Link className={styles.Link2} href='#'>Home</Link>

                              <Link className={styles.Link3} href='#'>Shop</Link>

                              <Link className={styles.Link4} href='#'>About Us</Link>

                              <Link className={styles.Link5} href='#'>Contact Us</Link>

                            </div>

                           {/* right */}
                          <div className={styles.lastMenuDiv}>

                              <FiHeart className={styles.menuicon}></FiHeart> 

                              <span className={styles.TopNum}>7</span>      

                              <Link className={styles.L2} href='#'>Wishlist</Link>
                              

                              <span className={styles.divider}></span>

                              <AiOutlineShoppingCart className={styles.menuicon}></AiOutlineShoppingCart>

                              <span className={styles.TopNum}>2</span>

                              <Link className={styles.L3} href='#'>Cart</Link>


                              <span className={styles.divider}></span>

                              <BiUser className={styles.menuicon}></BiUser>

                              <Link className={styles.L4} href='#'>Account</Link>

                          </div>

                      </Offcanvas.Body>

                    </Offcanvas>

                  </div>

                  
                </div>

              </div>
              

            </Col>
          </Row>
        </Container>
     </section> 

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Carousel Items
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


       <section className={styles.CarouselSec}>
        
         <Container fluid className={styles.CarouselSecCon}>

            <Swiper

                  spaceBetween={0}

                  centeredSlides={true}

                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}

                  pagination={{
                    clickable: true,
                  }}

                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"

              >
                <SwiperSlide>  
                      
                    <img className={styles.CaroselImg} src="images/bgimg.png" alt="img" />
                    
                      <div className={styles.caroseltxtcenter} id="carosel-txt2">

                          <div className={styles.carouseltxt}>

                              <p className={styles.bgptext}>Get Our Best Burgers With The Best Flavors</p>

                              <h2 className={styles.bgh2text}>“
                                  <span className={styles.carospantxt1}> Burgers</span> That Makes                               
                                  <br/>

                                      Your Tounge 
                                      
                                  <span className={styles.carospantxt2}>Cry</span>”

                              </h2>   

                           </div>

                       </div>

                </SwiperSlide>

                <SwiperSlide>

                  <img className={styles.CaroselImg} src="images/bgimg.png" alt="img" />

                  <div className={styles.caroseltxtcenter} id="carosel-txt2">

                          <div className={styles.carouseltxt}>

                              <p className={styles.bgptext}>Get Our Best Burgers With The Best Flavors</p>

                              <h2 className={styles.bgh2text}>“<span className={styles.carospantxt1}>Burgers</span> That Makes<br/>

                                    Your Tounge <span className={styles.carospantxt2}>Cry</span>”

                              </h2>    

                          </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img className={styles.CaroselImg} src="images/bgimg.png" alt="img" />

                    <div className={styles.caroseltxtcenter} id="carosel-txt2">

                            <div className={styles.carouseltxt}>

                                <p className={styles.bgptext}>Get Our Best Burgers With The Best Flavors</p>

                                <h2 className={styles.bgh2text}>“<span className={styles.carospantxt1}>Burgers</span> That Makes<br/>

                                      Your Tounge <span className={styles.carospantxt2}>Cry</span>”
                                </h2>                
                            </div>
                    </div>
                </SwiperSlide>    

            </Swiper>
         </Container>
       </section>

    </>
  )
}

export default Menubar