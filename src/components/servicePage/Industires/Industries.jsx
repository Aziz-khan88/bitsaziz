"use client"
import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/servicepage/Industries.module.css'
//
import slide1 from "media/services/slide-1.svg"
import slide2 from "media/services/slide-2.svg"
import slide3 from "media/services/slide-3.svg"
import slide4 from "media/services/slide-4.svg"
import slide5 from "media/services/slide-5.svg"
import slide6 from "media/services/slide-6.svg"
import slide7 from "media/services/slide-7.svg"
import slide8 from "media/services/slide-8.svg"
import slide9 from "media/services/slide-9.svg"
import slide10 from "media/services/slide-10.svg"
import slide11 from "media/services/slide-11.svg"
import arrow from 'media/newmobileapp/arrow.png';

const Industries = () => {

    var indusSlider = {
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section id='industries' className={styles.industries}>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <h2 className='manrope mb-3'>Industries We’ve Conquered</h2>
                            <p className='manrope'>BitsWits offers a diverse reach by providing industry-specificsolutions for every client. We work with clients <br className='d-xl-block d-none' /> who aim to improve customer quality oflife while simplifying the daily duties of their employees.</p>
                        </Col>
                        <Col lg={12}>
                            <Slider {...indusSlider} className={`${styles.indusSlider} servicesIndustriesSlider`}>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide1} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Healthcare</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Healthcare</h3>
                                            <p className='manrope'>Typically, medium-complex apps with intuitive graphics, complex features and functionalities will cost in between $30k-$70K. Some of the most common examples of mid-level apps are healthcare apps, booking apps, and food delivery apps.
                                            </p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide2} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>E-Commerce</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>E-Commerce</h3>
                                            <p className='manrope'>Typically, medium-complex apps with intuitive graphics, complex features and functionalities will cost in between $30k-$70K. Some of the most common examples of mid-level apps are healthcare apps, booking apps, and food delivery apps.
                                            </p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide3} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Gaming</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Gaming</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide4} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Logistics</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Logistics</h3>
                                            <p className='manrope'>Typically, medium-complex apps with intuitive graphics, complex features and functionalities will cost in between $30k-$70K. Some of the most common examples of mid-level apps are healthcare apps, booking apps, and food delivery apps.
                                            </p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide5} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Insurance</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Insurance</h3>
                                            <p className='manrope'>Typically, medium-complex apps with intuitive graphics, complex features and functionalities will cost in between $30k-$70K. Some of the most common examples of mid-level apps are healthcare apps, booking apps, and food delivery apps.
                                            </p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide6} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Engineering Construction <br /> & Operations</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Engineering Construction <br /> & Operations</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide7} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Social Media</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Social Media</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide8} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Finance</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Finance</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide9} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Real Estate</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Real Estate</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide10} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Information Technology</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Information Technology</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className={`${styles.indusSlide} indusSlide`}>
                                        <Image src={slide11} alt='BitsWits' className='img-fluid w-100' />
                                        <div className={`${styles.head} head`}>
                                            <h5 className='manrope'>Documentation</h5>
                                        </div>
                                        <div className={`${styles.content} content`}>
                                            <h3 className='manrope'>Documentation</h3>
                                            <p className='manrope'>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                            <a href="#form" className={`manrope ${styles.btn}`}>
                                                Learn More
                                                <span>
                                                    <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                        <Col lg={12} className='z-n1'>
                            <div className={`${styles.btns}`}>
                                <a href="#form" className='manrope'>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Industries