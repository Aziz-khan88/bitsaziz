"use client"
import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Testimonials.module.css"
import Slider from 'react-slick'
// Images
import Client1 from "media/services/client-1.svg"
import QouteOne from "media/services/quote-left.svg"
import QouteTwo from "media/services/quote-right.svg"
import TestiOne from "media/services/testimonials-1.svg"
import TestiTwo from "media/services/testimonials-2.svg"
import TestiThree from "media/services/testimonials-3.svg"

const Testimonials = () => {
    const testimonialSlider = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        speed: 300,
    };
    return (
        <section className={styles.testimonialsSec}>
            <Container>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className={styles.sliderContent}>
                            <div className="txt">
                                <h2 className='manrope font-bold text-center text-white mb-3 mb-md-5 pb-3'>Client Testimonial</h2>
                            </div>
                            <Slider {...testimonialSlider} className={`testimonialSlider pb-lg-4 ${styles.testimonialSlider}`}>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>
                                                Have never come across such a diverse hybrid app development services provider. All my queries were amicably handled and resolved without hassle. They certainly stand out as one of the best
                                            </p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>Suzie Milton</h4>
                                                <h6 className='manrope font-medium text-center'>Game Developer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>
                                                Have never come across such a diverse hybrid app development services provider. All my queries were amicably handled and resolved without hassle. They certainly stand out as one of the best
                                            </p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>Suzie Milton</h4>
                                                <h6 className='manrope font-medium text-center'>Game Developer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="d-flex align-items-center justify-content-center gap-5 pt-5 mt-5">
                                <div>
                                    <Image src={TestiOne} alt='Bitswits' />
                                </div>
                                <div>
                                    <Image src={TestiTwo} alt='Bitswits' />
                                </div>
                                <div>
                                    <Image src={TestiThree} alt='Bitswits' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.secBtn}>
                            <a href="javascript:;">
                                Let’s Discuss Your Project
                            </a>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials
