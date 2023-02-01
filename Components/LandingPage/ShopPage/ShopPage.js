import React from 'react'
import Link from 'next/link';
import styles from '../../../styles/theme_3/theme_3.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FiFilter } from "react-icons/fi";
import { MdAddShoppingCart} from "react-icons/md";
import { RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri";



const ShopPage = () => {

    return (
        <>
            <section> 

                {/*  --------------------------------------------------------------------------------------------------------------------- 
                    Filter
                -------------------------------------------------------------------------------------------------------*/}
                <section>

                            <h2 className={styles.text4}>All <span className={styles.text4R}>Products</span></h2>

                    <Container>

                        <Row>

                            <Col xs={12} sm={6} md={4} lg={3}>

                                <div className={styles.filtersection}>
                                    <div className={styles.filterbox}><div className={styles.filtertxt}><FiFilter className={styles.fafilter} /> Filter </div></div>
                            
                                    <Row className={styles.hrrow}>
                                        <Col xs={12}>
                                            <div className={styles.maind}>
                                                <div className={styles.hrrdv}>
                                                    <span className={styles.myspan}>Categories</span>
                                                
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <ul className={styles.filterul}>
                                    <li > <Link href="#" className={styles.libold}>Burgers</Link></li>
                                    <li><Link href="#">Sandwiches</Link></li>
                                    <li><Link href="#">Shawarma</Link></li>
                                    <li><Link href="#">Wraps &amp; Tacos</Link></li>
                                    <li><Link href="#">French Fries</Link></li>
                                    </ul>
                                    <Row className={styles.hrrow}>
                                        <Col xs={12}>
                                            <div className={styles.maind}>
                                                <div className={styles.hrrdv}>
                                                    <span className={`${styles.myspan} ${styles.myspan2}`}>Price Filter</span>            
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                            <ul className={styles.filterul}>
                                    {/* <Row className=" hr-row"><Col xs={3} ><hr className="hr1" /></Col><Col xs={7} className=" categori-txt">Price Filter</Col><Col xs={2} ><hr className="hr1" /></Col></Row> */}
                                    <li className={styles.libold}><Link href="#" className={styles.libold}>BDT 0 - BDT 200</Link></li>
                                    <li><Link href="#">BDT 201 - BDT 1000</Link></li>
                                    <li><Link href="#">BDT 1001 - BDT 2000</Link></li>
                                    <li><Link href="#">BDT 2001 - BDT 5000</Link></li>
                                    <li><Link href="#">BDT 5001 - BDT 10000</Link></li>
                                    </ul>
                                    {/* <Row className=" hr-row"><Col xs={4} ><hr className="hr1" /></Col><Col xs={4} className="categori-txt">Size</Col><Col xs={4} ><hr className="hr1" /></Col></Row> */}
                                    <Row className={styles.hrrow}><Col xs={12}>
                                            <div className={styles.maind}>
                                                <div className={styles.hrrdv}>
                                                    <span className={`${styles.myspan} ${styles.myspan3}`}>Size</span>
                                                
                                                </div>
                                            </div></Col></Row>
                                            <ul className={styles.filterul}>
                                    <li><Link href="#">Medium</Link></li>
                                    <li><Link href="#">Small</Link></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* next collom---2--- */}

                            <Col xs={12} sm={6} md={8} lg={9} >

                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>

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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>

                                        <div className={styles.overflowdiv}>
                                        <img className={styles.h} src="./images/b11.png" alt="Burger" />
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>

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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>

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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>

                                        <div className={styles.overflowdiv}>
                                        <img className={styles.h} src="./images/b14.png" alt="Burger" />
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
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
                            
                                      {/*  Col----*/}
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
                                        <div className={styles.overflowdiv}>
                                        <img className={styles.h} src="./images/b17.png" alt="Burger" />
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
                                        <div className={styles.overflowdiv}>
                                        <img className={styles.h} src="./images/b20.png" alt="Burger" />
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
                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.socialimg2}>
                                        <div className={styles.overflowdiv}>
                                        <img className={styles.h} src="./images/b21.png" alt="Burger" />
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






                                </Row>
                            </Col>
                    



                    {/* main Row */}

                    </Row>
                    </Container>
                </section>


                {/*  --------------------------------------------------------------------------------------------------------------------- 

                -------------------Navigation------------------------------------------------------------------------------------*/}
                <section>
                        <Container>

                            <div className={styles.pagination}>
                            <div className={styles.pagination2}>
                                <Link href="#"  className={styles.pagia}><RiArrowLeftSFill/></Link>
                                <Link href="#"  className={styles.pagia}>1</Link>
                                <Link href="#"  className={`${styles.pagia} ${styles.active}`}>2</Link>
                                <Link href="#"  className={styles.pagia}>3</Link>
                                <Link href="#"  className={styles.pagia}>4</Link>
                                <Link href="#"  className={styles.pagia}><RiArrowRightSFill/></Link>
                            </div>
                            </div>

                            </Container>

                    </section>






                {/*  --------------------------------------------------------------------------------------------------------------------- 

                -------------------Navigation------------------------------------------------------------------------------------*/}

            </section>
        </>
     )
}

export default ShopPage