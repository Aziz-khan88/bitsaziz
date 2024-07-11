import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/FutureReady.module.css"
import Image from 'next/image'
import Link from 'next/link'
// Images
import ios from "media/newmobileapp/ios.png"
import andriod from "media/newmobileapp/andriod.png"
import native from "media/newmobileapp/native.png"
import flutter from "media/newmobileapp/flutter.png"
import cross from "media/newmobileapp/cross.png"
import webdevelopment from "media/newmobileapp/webdevelopment.png"
import Slider from 'react-slick'

const FutureReady = () => {
    var FutureSlider = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
    };
    return (
        <>
            <section id='services' className={styles.futureSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className="txt">
                                <h2>ROI-Driven Results - <span>Flawless Execution!</span></h2>
                                <p>Our mobile application development services specialize in creating strong, scalable mobile solutions, including iPhone app development services and Android app development services, tailored to enhance business operations and user engagement. BitsWits ensures seamless experiences across the board, with results that are guaranteed to surpass expectations.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-md-block d-none'>
                        <Row>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.iosCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>IOS Application Development</h3>
                                        <Image src={ios} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We provide iOS app development services that epitomize smooth performance and innovative design, setting new standards in mobile user experiences and enabling an influx of ROI for your business.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.andriodCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Android Application Development</h3>
                                        <Image src={andriod} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our Android app development services will help you launch your idea with modern in-app features and a user-friendly interface. We use the latest technology stack and efficient coding practices to ensure standout performance.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.nativeCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>React Native App Development</h3>
                                        <Image src={native} width={32} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Harness the full potential of your mobile app with our React Native app development services. We use rapid multi-platform development to quickly launch your idea into a stellar app in a cost-effective manner.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.flutterCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Flutter App Development</h3>
                                        <Image src={flutter} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our Flutter app development services enable the development of user-friendly cross-platform mobile applications.  We use the revolutionary Flutter framework to create a trailblazing mobile application for your idea.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.crossCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Cross Platform App Development</h3>
                                        <Image src={cross} width={36} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Leading the charge in cross platform app development services, we provide unmatched application experiences for multiple industries and domains using the latest frameworks such as Flutter and React Native.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.webdevelopmentCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Web App Development</h3>
                                        <Image src={webdevelopment} width={31} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We offer compelling, user-focused web app development services that leverage our deep understanding of mobile and progressive web app development. Our market-leading innovations set the standard and guarantee excellent ROI.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-md-none d-block'>
                        <Slider {...FutureSlider} className='futureSlider'>
                            <div className='px-2'>
                                <div className={`${styles.iosCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>IOS Application Development</h3>
                                        <Image src={ios} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We provide iOS app development services that epitomize smooth performance and innovative design, setting new standards in mobile user experiences and enabling an influx of ROI for your business.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.andriodCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Android Application Development</h3>
                                        <Image src={andriod} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our Android app development services will help you launch your idea with modern in-app features and a user-friendly interface. We use the latest technology stack and efficient coding practices to ensure standout performance.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.nativeCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>React Native App Development</h3>
                                        <Image src={native} width={32} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Harness the full potential of your mobile app with our React Native app development services. We use rapid multi-platform development to quickly launch your idea into a stellar app in a cost-effective manner.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.flutterCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Flutter App Development</h3>
                                        <Image src={flutter} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our Flutter app development services enable the development of user-friendly cross-platform mobile applications.  We use the revolutionary Flutter framework to create a trailblazing mobile application for your idea.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.crossCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Cross Platform App Development</h3>
                                        <Image src={cross} width={36} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Leading the charge in cross platform app development services, we provide unmatched application experiences for multiple industries and domains using the latest frameworks such as Flutter and React Native.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.webdevelopmentCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Web App Development</h3>
                                        <Image src={webdevelopment} width={31} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We offer compelling, user-focused web app development services that leverage our deep understanding of mobile and progressive web app development. Our market-leading innovations set the standard and guarantee excellent ROI.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <a href="tel:1 833 500 6007" className='pink'>Let's Talk</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FutureReady
