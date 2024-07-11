"use client"

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/GlobalPresence.module.css"
// Images
import clock from "media/services/clock.svg"
import Phone from "media/services/phone.svg"
import Email from "media/services/email.svg"
import SliderOne from "media/services/global-1.svg"
import SliderTwo from "media/services/global-2.svg"
import SliderThree from "media/services/global-3.svg"
import SliderFour from "media/services/global-4.svg"
import SliderFive from "media/services/global-5.svg"

const GlobalPresence = () => {
    var globalSlider = {
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4.1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3.0,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <section className={styles.globalSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center manrope font-bold mb-md-4 mb-xxl-5 pb-4'>Our Global Presence </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col lg={12}>
                    <Slider {...globalSlider} className={styles.sliderMain}>
                        <div>
                            <div className="cardMain">
                                <div className={styles.cardContainer}>
                                    <div className={`${styles.card}`}>
                                        <div className={styles.cardImage}>
                                            <Image src={SliderThree} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className='manrope'>HOUSTON</h3>
                                        </div>
                                    </div>
                                    <div className={`${styles.flipCard}`}>
                                        <div className={styles.time}>
                                            <Image src={clock} alt='Bitswits' className='img-fluid' />
                                            <p className='manrope'>08 : 10 PM</p>
                                        </div>
                                        <div className={styles.adress}>
                                            <a href="javascript:;" className='text-black'>
                                                <p className='manrope'>2800 Post Oak Blvd STE 4100,<br className='d-xl-block d-none' /> Houston, TX 77056, United States 6</p>
                                            </a>
                                        </div>
                                        <div className={styles.emailOrphone}>
                                            <div className={`mb-3 ${styles.phone}`}>
                                                <a href="tel:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Phone} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>+1 833 500 6007</span>
                                                </a>
                                            </div>
                                            <div className={`mb-3 ${styles.email}`}>
                                                <a href="mailto:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Email} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>info@bitswits.co</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.headoffice}>
                                            <span className='manrope'>Head Office</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cardMain mt-lg-5 pt-lg-3">
                                <div className={styles.cardContainer}>
                                    <div className={`${styles.card}`}>
                                        <div className={styles.cardImage}>
                                            <Image src={SliderTwo} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className='manrope'>Dubai</h3>
                                        </div>
                                    </div>
                                    <div className={`${styles.flipCard} ${styles.cardFace} ${styles.cardBack}`}>
                                        <div className={styles.time}>
                                            <Image src={clock} alt='Bitswits' className='img-fluid' />
                                            <p className='manrope'>08 : 10 PM</p>
                                        </div>
                                        <div className={styles.adress}>
                                            <a href="javascript:;" className='text-black'>
                                                <p className='manrope'>2800 Post Oak Blvd STE 4100,<br className='d-xl-block d-none' /> Houston, TX 77056, United States 6</p>
                                            </a>
                                        </div>
                                        <div className={styles.emailOrphone}>
                                            <div className={`mb-3 ${styles.phone}`}>
                                                <a href="tel:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Phone} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>+1 833 500 6007</span>
                                                </a>
                                            </div>
                                            <div className={`mb-3 ${styles.email}`}>
                                                <a href="mailto:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Email} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>info@bitswits.co</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.headoffice}>
                                            <span className='manrope'>Head Office</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cardMain">
                                <div className={styles.cardContainer}>
                                    <div className={`${styles.card}`}>
                                        <div className={styles.cardImage}>
                                            <Image src={SliderOne} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className='manrope'>CHICAGO</h3>
                                        </div>
                                    </div>
                                    <div className={`${styles.flipCard} ${styles.cardFace} ${styles.cardBack}`}>
                                        <div className={styles.time}>
                                            <Image src={clock} alt='Bitswits' className='img-fluid' />
                                            <p className='manrope'>08 : 10 PM</p>
                                        </div>
                                        <div className={styles.adress}>
                                            <a href="javascript:;" className='text-black'>
                                                <p className='manrope'>2800 Post Oak Blvd STE 4100,<br className='d-xl-block d-none' /> Houston, TX 77056, United States 6</p>
                                            </a>
                                        </div>
                                        <div className={styles.emailOrphone}>
                                            <div className={`mb-3 ${styles.phone}`}>
                                                <a href="tel:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Phone} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>+1 833 500 6007</span>
                                                </a>
                                            </div>
                                            <div className={`mb-3 ${styles.email}`}>
                                                <a href="mailto:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Email} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>info@bitswits.co</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.headoffice}>
                                            <span className='manrope'>Head Office</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cardMain mt-lg-5 pt-lg-3">
                                <div className={styles.cardContainer}>
                                    <div className={`${styles.card}`}>
                                        <div className={styles.cardImage}>
                                            <Image src={SliderFour} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className='manrope'>Dallas</h3>
                                        </div>
                                    </div>
                                    <div className={`${styles.flipCard} ${styles.cardFace} ${styles.cardBack}`}>
                                        <div className={styles.time}>
                                            <Image src={clock} alt='Bitswits' className='img-fluid' />
                                            <p className='manrope'>08 : 10 PM</p>
                                        </div>
                                        <div className={styles.adress}>
                                            <a href="javascript:;" className='text-black'>
                                                <p className='manrope'>2800 Post Oak Blvd STE 4100,<br className='d-xl-block d-none' /> Houston, TX 77056, United States 6</p>
                                            </a>
                                        </div>
                                        <div className={styles.emailOrphone}>
                                            <div className={`mb-3 ${styles.phone}`}>
                                                <a href="tel:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Phone} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>+1 833 500 6007</span>
                                                </a>
                                            </div>
                                            <div className={`mb-3 ${styles.email}`}>
                                                <a href="mailto:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Email} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>info@bitswits.co</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.headoffice}>
                                            <span className='manrope'>Head Office</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cardMain mt-lg-5 pt-lg-3">
                                <div className={styles.cardContainer}>
                                    <div className={`${styles.card}`}>
                                        <div className={styles.cardImage}>
                                            <Image src={SliderFive} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className='manrope'>NEW YORK</h3>
                                        </div>
                                    </div>
                                    <div className={`${styles.flipCard} ${styles.cardFace} ${styles.cardBack}`}>
                                        <div className={styles.time}>
                                            <Image src={clock} alt='Bitswits' className='img-fluid' />
                                            <p className='manrope'>08 : 10 PM</p>
                                        </div>
                                        <div className={styles.adress}>
                                            <a href="javascript:;" className='text-black'>
                                                <p className='manrope'>2800 Post Oak Blvd STE 4100,<br className='d-xl-block d-none' /> Houston, TX 77056, United States 6</p>
                                            </a>
                                        </div>
                                        <div className={styles.emailOrphone}>
                                            <div className={`mb-3 ${styles.phone}`}>
                                                <a href="tel:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Phone} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>+1 833 500 6007</span>
                                                </a>
                                            </div>
                                            <div className={`mb-3 ${styles.email}`}>
                                                <a href="mailto:;" className='text-black d-flex align-items-center'>
                                                    <Image src={Email} alt='Bitswits' width={18} height={18} className='img-fluid' />
                                                    <span className='manrope ms-3'>info@bitswits.co</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.headoffice}>
                                            <span className='manrope'>Head Office</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </section>
    )
}

export default GlobalPresence
