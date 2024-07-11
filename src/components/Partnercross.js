import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Partnercross.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import hybird from '/public/images/partnerpoiny/d-hybrid.webp'
import native from '/public/images/partnerpoiny/d-native.webp'


const Partnercross = () => {

    let prtnrSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={styles.hearfelt}>
            <Container>
                <Row className={`${styles.project} justify-content-between`}>
                    <Col lg={12}>
                        <h2 className="f-50 f-playfair f-700 newfycolr t-center">Technologies We Use</h2>
                        <p className='font16 f-montserrat white mb-3 mb-sm-5 t-center'>
                            BitsWits turns inventive ideas into groundbreaking mobile apps! Our award-winning app developers <br></br> know hybrid and native technologies, so your project is in good hands. With us, your project will be a success from start to finish!
                        </p>
                    </Col>
                </Row>

                <div className='d-lg-block d-none'>
                    <Row className='gy-5'>
                        <Col lg={6}>
                            <div className={styles.rightpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Hybrid App Development </h3>

                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                    BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverage the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:
                                </p>

                                <ul className='p-0'>
                                    <li className="f-14 white f-500 f-montserrat pb-3">1. Cross-platform Compatibility.</li>
                                    <li className="f-14 white f-500 f-montserrat pb-3">2. Accelerated Development Cycle.</li>
                                    <li className="f-14 white f-500 f-montserrat pb-3">3. Customizable UI/UX Design.</li>
                                    <li className="f-14 white f-500 f-montserrat">4. Cost-Effective Single Codebase Solution.</li>
                                </ul>

                                <Image quality={75} alt='BitsWits' src={hybird} className='img-fluid mt-2 mb-5' />

                                <a href="javascript:$zopim.livechat.window.show();" className={styles.arrowBtn}>
                                    <span className="f-poppins f-600 f-capitalize">LET'S CONNECT</span>

                                </a>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.leftpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Native App Development </h3>

                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                    BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:
                                </p>

                                <ul className='p-0'>
                                    <li className="f-14 white f-500 f-montserrat pb-3">1. High Performance Platform-Optimization.</li>
                                    <li className="f-14 white f-500 f-montserrat pb-3">2. Access To Device Features & Integration.</li>
                                    <li className="f-14 white f-500 f-montserrat pb-3">3. Customized UI/UX Application Design.</li>
                                    <li className="f-14 white f-500 f-montserrat">4. Robust & Adaptable Mobile Application.</li>
                                </ul>

                                <Image quality={75} alt='BitsWits' src={native} className='img-fluid mt-2 mb-5' />
                                <a href="javascript:$zopim.livechat.window.show();" className={styles.arrowBtn}>
                                    <span className="f-poppins f-600 f-capitalize">LET'S CONNECT</span>

                                </a>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='d-lg-none d-block'>
                    <Slider {...prtnrSlider}>
                        <div className={styles.rightpadding}>
                            <h3 className="white f-30 f-playfair f-700 mb-3">Hybrid App Development </h3>
                            <Image quality={75} alt='BitsWits' src={hybird} className='img-fluid mt-2 mb-5' />
                            <p className="f-16 white f-500 f-montserrat mb-4 ">
                                BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:
                            </p>

                            <ul className='p-0'>
                                <li className="f-14 white f-500 f-montserrat">1. Cross-platform Compatibility.</li>
                                <li className="f-14 white f-500 f-montserrat">2. Accelerated Development Cycle.</li>
                                <li className="f-14 white f-500 f-montserrat">3. Customizable UI/UX Design.</li>
                                <li className="f-14 white f-500 f-montserrat">4. Cost-Effective Single Codebase Solution.</li>
                            </ul>

                            <a href="javascript:$zopim.livechat.window.show();" className={styles.arrowBtn}>
                                <span className="f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                            </a>

                        </div>
                        <div className={styles.leftpadding}>
                            <h3 className="white f-30 f-playfair f-700 mb-3">Native App Development </h3>
                            <Image quality={75} alt='BitsWits' src={native} className='img-fluid mt-2 mb-5' />
                            <p className="f-16 white f-500 f-montserrat mb-4 ">
                                BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:
                            </p>

                            <ul className='p-0'>
                                <li className="f-14 white f-500 f-montserrat">1. High Performance Platform-Optimization.</li>
                                <li className="f-14 white f-500 f-montserrat">2. Access To Device Features & Integration.</li>
                                <li className="f-14 white f-500 f-montserrat">3. Customized UI/UX Application Design.</li>
                                <li className="f-14 white f-500 f-montserrat">4. Robust & Adaptable Mobile Application.</li>
                            </ul>
                            <a href="javascript:$zopim.livechat.window.show();" className={styles.arrowBtn}>
                                <span className="f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                            </a>

                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Partnercross