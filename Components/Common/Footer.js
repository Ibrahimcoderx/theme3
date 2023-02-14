import React from 'react'
import styles from '../../styles/theme_3/theme_3.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { ImMobile2 } from "react-icons/im";
import { SlEnvolope } from "react-icons/sl";
import { GrLocation, GrFacebookOption } from "react-icons/gr";
import {  AiFillYoutube,AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {

      const today = new Date();
      const year = today.getFullYear(); 

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
                                          <img className={styles.ShippingImgSvg1} src='images/b50.svg'></img>
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

                <Col xs={12} sm={2} >

                    <a href="#">
                      <img  src="images/b25.png" alt="free delivery"/>
                    </a>
                </Col>


                <Col xs={12} sm={8} className={styles.footerul2}>

                    <ul>
                          <li>
                            <Link href="#">
                                <ImMobile2 className={styles.mobile}/> 
                                    &nbsp;  +8801894844452
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
                                &nbsp; SAR Bhaban, Level-5 , Ka-78, Progoti Sarani, Kuril, Vatara, Dhaka-1229, Bangladesh
                            </Link>
                          </li>

                    </ul>
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



              </Row>

              <Row>
                <Col xs={12}>
                    <div className={styles.hr}></div>
                    <div className={styles.lastdiv}>
                      {/* <p className={styles.lastp1}>© 2023 Company Name . All Rights Reserved.</p>
                      <p className={styles.lastp2}>System developed by Funneliner</p> */}

                       {/* Tiny Footer */}
                            <div className={styles.tinyFooter}>
                                
                                <p>@ {year} All Rights Reserved </p>
                                <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

                          </div>
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