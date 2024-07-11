import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Capabilities3d.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon1 from '/public/CapablitiesImgs/blockchaingame/icon1.png'
import icon2 from '/public/CapablitiesImgs/blockchaingame/icon2.png'
import icon3 from '/public/CapablitiesImgs/blockchaingame/icon3.png'
import icon4 from '/public/CapablitiesImgs/blockchaingame/icon4.png'
import icon5 from '/public/CapablitiesImgs/blockchaingame/icon5.png'
import icon6 from '/public/CapablitiesImgs/blockchaingame/icon6.png'
import icon7 from '/public/CapablitiesImgs/blockchaingame/icon7.png'
import icon8 from '/public/CapablitiesImgs/blockchaingame/icon8.png'
import icon9 from '/public/CapablitiesImgs/blockchaingame/icon9.png'


const GameCapabilities = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>

            <section className={styles.home}>
                <Container className='qtechcap'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <h3>On-Demand</h3>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <div>
                                    <h2>Explore a New Dimension of Fun with <br className='d-xl-block d-none'></br> Our Blockchain Game Development  <br></br> Company</h2>
                                    <p className='white'>Our blockchain-based solutions provide gamers with the highest level of security, ensuring that their digital assets remain safely in their hands. BitsWits is experienced in crafting games for both mobile and PC platforms and boasts a wealth of experience in creating games for both the public and private sectors. We also ensure that all of our games comply with the latest industry standards, so you can be sure that your investment in our technology is secure. From world-class art direction to feature-rich gameplay mechanics, BitsWits is your partner in creating the perfect gaming experience. Contact us today to learn how we can help make your upcoming game a success!</p>
                                </div>
                                <a className={styles.about} href="javascript:$zopim.livechat.window.show();">LET'S CONNECT</a>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <div className={`${styles.connsct} ${styles.connsct3d}`}>
                            <Row className={` ${styles.bor}  mt-5 mb-5 `}>
                                <Col lg={2}><div className={`${styles.line1} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line2} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line3} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line4} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line5} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line6} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line7} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line8} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line9} line3d`}></div></Col>

                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome prohome1 mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>



                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon7} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon8} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon9} alt='BitsWits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                        </Slider>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default GameCapabilities