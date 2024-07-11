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
import icon1 from '/public/CapablitiesImgs/NFTgame/icon1.png'
import icon2 from '/public/CapablitiesImgs/NFTgame/icon2.png'
import icon3 from '/public/CapablitiesImgs/NFTgame/icon3.png'
import icon4 from '/public/CapablitiesImgs/NFTgame/icon4.png'
import icon5 from '/public/CapablitiesImgs/NFTgame/icon5.png'
import icon6 from '/public/CapablitiesImgs/NFTgame/icon6.png'
import icon7 from '/public/CapablitiesImgs/NFTgame/icon7.png'
import icon8 from '/public/CapablitiesImgs/NFTgame/icon8.png'
import icon9 from '/public/CapablitiesImgs/NFTgame/icon9.png'


const Capabilitiesnft = () => {

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
                                    <h2>Creating Digital Magic: Tap Into the <br></br> Power of On-Demand NFT Game <br></br> Development</h2>
                                    <p className='white'>BitsWits combine the power of blockchain technology with digital gaming to create innovative and captivating experiences. We uphold the mission of bringing a new kind of entertainment to the world—one that is safe, secure, and exciting! Whether NFT games for mobile, PC, and console platforms, our games feature dynamic gameplay, stunning graphics, and immersive storylines that captivate players. With cutting-edge technology and unbeatable artistry, we are transforming gaming into an entirely new experience.</p>
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

export default Capabilitiesnft