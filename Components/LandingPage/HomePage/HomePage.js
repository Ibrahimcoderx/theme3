
import React from 'react'
import styles from '../../../styles/theme_3/theme_3.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules

import { Pagination, Navigation,} from "swiper";
import { Col, Container, Row } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
import { MdAddShoppingCart} from "react-icons/md";
import Link from 'next/link';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from 'react';






const HomePage = () => {

  const swiperRef = useRef();

  return (
    <section>

          {/*  --------------------------------------------------------------------------------------------------------------------- 
                Slider
          -------------------------------------------------------------------------------------------------------*/}


        <section className={styles.Section_gap}></section>

        <section className={styles.CarouselSec2}>

                  <h2 className={styles.text4}>Our <span className={styles.text4R}>Categories</span></h2>

                    {/* slider--- */}

          <Container className='OverflowVsivle'>
              
            <Row>

              <Col lg={12}>

              <div className={styles.BtnDev}>
                  <button className={styles.SliderB1} onClick={() => swiperRef.current?.slidePrev()}>   

                  
                    <IoIosArrowBack  className={styles.icon1}></IoIosArrowBack>
                  </button>

                  <button className={styles.SliderB2} onClick={() => swiperRef.current?.slideNext()}> 

                    <IoIosArrowForward className={styles.icon2}></IoIosArrowForward>
                  </button>
              </div>
                
            
              <div class="swiper mySwiperProductList">

                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    // navigation={true}
                    modules={[Pagination, Navigation]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    breakpoints={{
                      120: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                      575: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                
                      768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                      },
                      1360: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                      },
                    }}
                    className="mySwiper2"
                  
                  >
                   
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b1.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Burger</h2>

                    </SwiperSlide>
                   
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b2.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Sandwiches</h2>
                      
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b3.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Shawarma</h2>
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b4.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Wraps & Tacos</h2>
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b5.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>French Fries</h2>
                    </SwiperSlide>

                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b1.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Shawarma</h2>
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b2.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Sandwiches</h2>
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b3.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Burger</h2>
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b4.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>Wraps & Tacos</h2>
                    </SwiperSlide>
                        
                    <SwiperSlide>
                      <div className={styles.imgbox}>
                        <div className={styles.imgborder}>
                          <img className={styles.h} src="images/b5.png" alt="Burger"/>
                        </div>
                      </div>
                      <h2 className={styles.slidertxt}>French Fries</h2>
                    </SwiperSlide>

                 
                
                </Swiper>
                    
                {/* <div class="swiper-pagination"></div>
                <div class="navbutton">
                  <div class="swiper-button-prev2"><IoIosArrowForward className='icon1'></IoIosArrowForward></div>
                  <div class="swiper-button-next2"><IoIosArrowBack className='icon2'></IoIosArrowBack></div>
                </div> */}

              </div>

              </Col>

            </Row>
            
          </Container>
              
        </section>
      
        {/*  --------------------------------------------------------------------------------------------------------------------- 

        -------------------Social Banner-----------------------------------------------------------------------------------*/}
        <section>

              <>
                      <Container fluid className={styles.socialImg3}>
                        <Row>

                          <Col ex={12} sm={4} className={styles.socialImg }>
                            <img src='./images/b6.png' className={styles.h} alt="img"></img>
                          </Col>

                          <Col ex={12} sm={4} className={styles.socialImg }>
                            <img src='./images/b8.png' className={styles.h} alt="img"></img>
                          </Col>

                          <Col ex={12} sm={4} className={styles.socialImg }>
                            <img src='./images/b7.png' className={styles.h} alt="img"></img>
                          </Col>

                        </Row>
                            
                      </Container>
              </>

        </section>





        {/*  --------------------------------------------------------------------------------------------------------------------- 

        ------------------- Product Section-----------------------------------------------------------------------------------*/}
          <section className={styles.Section_gap}>
            <h2 className={styles.text4}>Our <span className={styles.text4R}>Popular Products</span></h2>

            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b9.png" alt="Burger" />
                        </div>
                            <Row>
                                <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                    <div className={styles.imgtxt1 }>
                                      <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                    </div>

                                    <div className={styles.imgtxt2 }>
                                      <span className={styles.imgspn1}>BDT 450 </span> 
                                      <span className={styles.imgspn2}> BDT 500 </span>
                                    </div>
                                </Col>

                                <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                        <Link href="#" className={styles.Txtdecornone}>
                                          <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2}`} />
                                        </Link>
                                </Col>
                            </Row>
                      </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b10.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 350 </span> 
                                        <span className={styles.imgspn2}> BDT 550 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b11.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 450 </span> 
                                        <span className={styles.imgspn2}> BDT 600 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b12.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 350 </span> 
                                        <span className={styles.imgspn2}> BDT 700 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b13.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 350 </span> 
                                        <span className={styles.imgspn2}> BDT 500 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b14.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 550 </span> 
                                        <span className={styles.imgspn2}> BDT 700 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b15.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 350 </span> 
                                        <span className={styles.imgspn2}> BDT 500 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>

              {/*  Col----*/}
              
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                        <div className={styles.overflowdiv}>
                          <img className={styles.h} src="./images/b16.png" alt="Burger" />
                        </div>
                          <Row>
                                  <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                      <div className={styles.imgtxt1 }>
                                        <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                      </div>

                                      <div className={styles.imgtxt2 }>
                                        <span className={styles.imgspn1}>BDT 350 </span> 
                                        <span className={styles.imgspn2}> BDT 500 </span>
                                      </div>
                                  </Col>

                                  <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                          <Link href="#" className={styles.Txtdecornone}>
                                            <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                          </Link>
                                  </Col>
                            </Row>
                    </Col>


                </Row>
            </Container>
          </section>

        <section  className={styles.Section_gap}>
          <div className={styles.text4Margin}>
              <h2 className={styles.text4}>All <span className={styles.text4R}> Products</span></h2>
          </div>
        </section>

      <section>


        <Container>
            <Row>
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b17.png" alt="Burger" />
                    </div>
                        <Row>
                            <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                <div className={styles.imgtxt1 }>
                                  <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                </div>

                                <div className={styles.imgtxt2 }>
                                  <span className={styles.imgspn1}>BDT 450 </span> 
                                  <span className={styles.imgspn2}> BDT 500 </span>
                                </div>
                            </Col>

                            <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                    <Link href="#" className={styles.Txtdecornone}>
                                      <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2}`} />
                                    </Link>
                            </Col>
                        </Row>
                  </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b18.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 350 </span> 
                                    <span className={styles.imgspn2}> BDT 500 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b19.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 350 </span> 
                                    <span className={styles.imgspn2}> BDT 500 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b20.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 450 </span> 
                                    <span className={styles.imgspn2}> BDT 600 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b21.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 550 </span> 
                                    <span className={styles.imgspn2}> BDT 700 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b22.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 450 </span> 
                                    <span className={styles.imgspn2}> BDT 500 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b23.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 550 </span> 
                                    <span className={styles.imgspn2}> BDT 650 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>

          {/*  Col----*/}
          
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className={styles.socialimg2}>
                    <div className={styles.overflowdiv}>
                      <img className={styles.h} src="./images/b17.png" alt="Burger" />
                    </div>
                      <Row>
                              <Col xs={9} sm={9} lg={9} className={styles.imgtxtbox1}>
                                  <div className={styles.imgtxt1 }>
                                    <h2 className={styles.imgh2}>Mexican Pizza (Large)</h2>
                                  </div>

                                  <div className={styles.imgtxt2 }>
                                    <span className={styles.imgspn1}>BDT 450 </span> 
                                    <span className={styles.imgspn2}> BDT 600 </span>
                                  </div>
                              </Col>

                              <Col xs={3} sm={3} lg={3} className={styles.imgtxtbox}>
                                      <Link href="#" className={styles.Txtdecornone}>
                                        <MdAddShoppingCart className={`${styles.fasolid} ${styles.facartplus} ${styles.plus2} `} />
                                      </Link>
                              </Col>
                        </Row>
                </Col>


            </Row>

            <div className={styles.buttondiv}><button className={styles.btn}>View All Products</button></div>


        </Container>

        


      </section>


      {/*  --------------------------------------------------------------------------------------------------------------------- 

      -------------------Social Banner-----------------------------------------------------------------------------------*/}


      {/*  --------------------------------------------------------------------------------------------------------------------- 

      -------------------Social Banner-----------------------------------------------------------------------------------*/}






    
      




    </section>
  )
}

export default HomePage
