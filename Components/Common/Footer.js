import React from 'react'
import styles from '../../styles/theme_3/theme_3.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { ImMobile2 } from "react-icons/im";
import { SlEnvolope } from "react-icons/sl";
import { GrLocation, GrFacebookOption } from "react-icons/gr";
import {  AiFillYoutube,AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <>
        <section>

            <div className={styles.hovereffect2}>
                  <ul>
                    <li><Link href="#" title="Facebook"><img src="images/facebook.png" alt="img"/> </Link></li>
                    <li><Link href="#" title="Youtube"><img src="images/youtube.png" alt="img"/> </Link></li>
                    <li><Link href="#" title="Instagram"><img src="images/instagram.png" alt="img"/> </Link></li>
                    <li><Link href="#" title="Twiter"><img src="images/twiter.png" alt="img"/> </Link></li>
                  
                  </ul>
              </div>

          <h2 className={styles.SocialMediaTxt}>Join us On Social Media</h2>

        </section>

        {/*  --------------------------------------------------------------------------------------------------------------------- 

        -------------------Four Shipping Icon ------------------------------------------------------------------------------------*/}
       
        <section >
              <Container fluid className={styles.ShippingIconSec}>

                    <Row>

                        <Col xs={12} sm={6} md={3}>

                              <Row className={styles.ShippingIconRow}>
                                  <Col xs={5}>
                                        <div className={styles.ShippingImg} >
                                          <img src='images/b50.svg'></img>
                                        </div>    
                                  </Col>
            
                                  <Col xs={7}>
                                        <div className={styles.ShippingTxt}>
                                          <h4>90 Days Return</h4>
                                          <p>If goods have problems</p>
                                        </div>
                                  </Col>
                              </Row>
                        </Col>

                        <Col xs={12} sm={6} md={3}>

                              <Row className={styles.ShippingIconRow}>
                                  <Col xs={5}>
                                        <div className={styles.ShippingImg} >
                                          <img className={styles.smallIcon} src='images/b51.svg'></img>
                                        </div>    
                                  </Col>
            
                                  <Col xs={7}>
                                        <div className={styles.ShippingTxt}>
                                          <h4>Secure Payment</h4>
                                          <p>100% secure payment</p>
                                        </div>
                                  </Col>
                              </Row>
                        </Col>

                        <Col xs={12} sm={6} md={3}>

                              <Row className={styles.ShippingIconRow}>
                                  <Col xs={5}>
                                        <div className={styles.ShippingImg} >
                                          <img className={styles.smallIcon} src='images/b52.svg'></img>
                                        </div>    
                                  </Col>
            
                                  <Col xs={7}>
                                        <div className={styles.ShippingTxt}>
                                          <h4>24/7 Support</h4>
                                          <p>Dedicated support</p>
                                        </div>
                                  </Col>
                              </Row>
                          </Col>

                        <Col xs={12} sm={6} md={3}>

                              <Row className={styles.ShippingIconRow}>
                                  <Col xs={5}>
                                        <div className={styles.ShippingImg} >
                                          <img className={styles.smallIcon} src='images/b53.svg'></img>
                                        </div>    
                                  </Col>
            
                                  <Col xs={7}>
                                        <div className={styles.ShippingTxt}>
                                          <h4>Free Delivery</h4>
                                          <p>For all oders over $99</p>
                                        </div>
                                  </Col>
                              </Row>
                         </Col>

                    </Row>
                    
              </Container>

        </section>

        {/*  --------------------------------------------------------------------------------------------------------------------- 

        -------------------Footer Section ------------------------------------------------------------------------------------*/}
        <section>

          <Container className={styles.sectionfooter}>

            <Row>

                <Col xs={12} sm={3} >

                    <a href="#">
                      <img  src="images/b25.png" alt="free delivery"/>
                    </a>
                </Col>

                <Col xs={12} sm={2} className={styles.footerul1}>
                  <h2 className={styles.footh2}>Quick Links</h2>
                  <ul>
                    <li><Link href="#" > HOME</Link></li>
                    <li><Link href="#" >SHOP</Link></li>
                    <li><Link href="#" >ABOUT US</Link></li>
                    <li><Link href="#" >CONTACT US</Link></li>
                  </ul>
                </Col>

                <Col xs={12} sm={5} className={styles.footerul2}>

                    <ul>
                          <li>
                            <Link href="#">
                                <ImMobile2 className={styles.mobile}/> 
                                    &nbsp;  +1 (7635) 547-12-97 
                              </Link>
                          </li>

                          <li> 
                            <Link href="#" >
                              <SlEnvolope className={styles.faenvelope} />
                                &nbsp; &nbsp;  upport@website.com
                            </Link>
                          </li>

                          <li>
                            <Link href="#" >
                              <GrLocation className={styles.falocationdot} />
                                &nbsp; 4517 Washington Ave. Manchester, Kentucky 39495
                            </Link>
                          </li>

                    </ul>
                 </Col>

                  <Col  xs={12} sm={2} className={styles.footerul3}>
                    <p className={styles.footerp}>Join our social media</p>

                    <ul className={styles.footterlasticon}>
                      <li>
                          <Link href="#" >
                              <GrFacebookOption className={styles.h}/>
                          </Link>
                      </li>

                      <li><Link href="#" ><AiFillYoutube className={styles.fayoutube} /></Link></li>
                      <li><Link href="#" ><AiOutlineInstagram className={styles.fainstagram} /></Link></li>
                      <li><Link href="#" ><AiOutlineTwitter className={styles.fatwitter} /></Link></li>
                    </ul>
                  </Col>

              </Row>

              <Row>
                <Col xs={12}>
                    <div className={styles.hr}></div>
                    {/* <hr className={styles.hr}/> */}
                    <div className={styles.lastdiv}>
                      <p className={styles.lastp1}>A product of  Soft IT Care</p>
                      <p className={styles.lastp2}>© 2022 Soft IT Care . All Rights Reserved.</p>
                    </div>
                </Col>
              </Row>
              

          </Container>



        </section>


        {/*  --------------------------------------------------------------------------------------------------------------------- 

        -------------------Four Shipping Icon ------------------------------------------------------------------------------------*/}





    </>
  )
}

export default Footer