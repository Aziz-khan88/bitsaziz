"use client"
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewThankyou/Convinced.module.css"
// Images 
import Clutch from "media/newmobileapp/clutch.png"
import Arrow from "media/newmobileapp/right-arrow.png"
import ClientImage from "media/newmobileapp/reviewImage.png"
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'

const Conviced = ({ content, onAnchorClick }) => {
    var convicedSlider = {
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    speed: 20000,
                }
            }
        ]
    };
    return (
        <>
            <section id='testimonials' className={styles.convicedSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className='d-md-flex align-items-center justify-content-between mb-md-5 pb-3'>
                                <div className={styles.txt}>
                                    <h2 className='manrope'>Need More <span>Convincing?</span></h2>
                                    <p className='manrope f-400'>Industry Leading Clients Vouch for Us</p>
                                </div>
                                <div className={`${styles.btnImage} clutch`}>
                                    <Image src={Clutch} alt='Bitswits' className={`img-fluid d-block mt-4 ms-md-auto ${styles.clutch}`} />
                                    <div className={styles.btn}>
                                        <a href='javascript:;' onClick={onAnchorClick} className='gap-4 pink'>
                                            Free Consultation
                                            <Image src={Arrow} alt='Bitswits' width={24} height={15} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Slider {...convicedSlider}>
                                <div className='px-2'>
                                    <div className={`${styles.cardNegative}`}>
                                        <div className={`${styles.card}`}>
                                            <div className="cardTop">
                                                <p className='manrope'>As a long-time client of BitsWits <span className={styles.blue}>mobile app development company</span>, I'm consistently impressed by their quality <span>cross-platform app development services</span> Their innovative approach has improved our businesses across the board.</p>
                                            </div>
                                            <div className={styles.cardBottom}>
                                                <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                    {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                    <div className="txt">
                                                        <h3>Hal Jordan</h3>
                                                        <h6>Chief Operating Officer</h6>
                                                    </div>
                                                </div>
                                                <div className="review d-flex align-items-center gap-2">
                                                    <p className='mb-0 manrope'>4.9/5.0</p>
                                                    <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.card}>
                                        <div className="cardTop">
                                            <p className='manrope'>Trusting them paid dividends beyond our expectations! The app is flawless and intuitive and has been crucial in driving user engagement. It is truly the <span className={styles.red}>best app making services</span> one could ask for.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                <div className="txt">
                                                    <h3>Ethan Fatu</h3>
                                                    <h6>Marketing Manager</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0 manrope'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={`${styles.cardNegative}`}>
                                        <div className={` ${styles.card}`}>
                                            <div className="cardTop">
                                                <p className='manrope'>Choosing BitsWits for <span className={styles.green}>Android app development services</span> was the best decision we could’ve made. The custom app they developed not only met but exceeded my expectations, showcasing their expertise as a top software developer.</p>
                                            </div>
                                            <div className={styles.cardBottom}>
                                                <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                    {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                    <div className="txt">
                                                        <h3>Samantha Ervine</h3>
                                                        <h6>Social Media Influencer</h6>
                                                    </div>
                                                </div>
                                                <div className="review d-flex align-items-center gap-2">
                                                    <p className='mb-0 manrope'>4.9/5.0</p>
                                                    <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.card}>
                                        <div className="cardTop">
                                            <p className='manrope'>Their expertise revolutionized how we manage patient care. As leaders in the web app development space, trusting them wasn’t a difficult decision. They excelled at creating exactly the kind of <span className={styles.red}>healthcare app development services</span> we wanted.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                <div className="txt">
                                                    <h3>Mark Maron</h3>
                                                    <h6>Healthcare Expert</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0 manrope'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={`${styles.cardNegative}`}>
                                        <div className={`${styles.card}`}>
                                            <div className="cardTop">
                                                <p className='manrope'>Have never come across such a diverse <span className={styles.blue}>hybrid app development services</span> provider. All my queries were amicably handled and resolved without hassle. They certainly stand out as one of the best</p>
                                            </div>
                                            <div className={styles.cardBottom}>
                                                <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                    {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                    <div className="txt">
                                                        <h3>Suzie Milton</h3>
                                                        <h6>Game Developer</h6>
                                                    </div>
                                                </div>
                                                <div className="review d-flex align-items-center gap-2">
                                                    <p className='mb-0 manrope'>4.9/5.0</p>
                                                    <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.card}>
                                        <div className="cardTop">
                                            <p className='manrope'>I did extensive research to narrow down and determine the foremost <span className={styles.red}>mobile app development services in US,</span> by far BitsWits stood out on all spectrums. My ROI has gone through the roof.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                <div className="txt">
                                                    <h3>Antonio Botticelli</h3>
                                                    <h6>Fashion Designer</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0 manrope'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={`${styles.cardNegative}`}>
                                        <div className={`${styles.card}`}>
                                            <div className="cardTop">
                                                <p className='manrope'>I was in dire need of <span className={styles.green}>Flutter app development services, </span>a friend of mine told me about this company he had worked with. BitsWits’ work was flawless, and my return on Investment far exceeded what I had hoped for.</p>
                                            </div>
                                            <div className={styles.cardBottom}>
                                                <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                    {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                    <div className="txt">
                                                        <h3>Mehtab Sheikh </h3>
                                                        <h6>Hotelier</h6>
                                                    </div>
                                                </div>
                                                <div className="review d-flex align-items-center gap-2">
                                                    <p className='mb-0 manrope'>4.9/5.0</p>
                                                    <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.card}>
                                        <div className="cardTop">
                                            <p className='manrope'>Exclusivity is the name of the game. I wanted immaculate <span className={styles.red}>Android app development services</span>. BitsWits claimed they were a premier <span className={styles.red}>Android app development company</span> and they certainly lived up to their word.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                {/* <Image src={Client1} alt='Bitswits' width={45} height={45} /> */}
                                                <div className="txt">
                                                    <h3>Heather Feinstein</h3>
                                                    <h6>Art Enthusiast</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0 manrope'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Conviced
