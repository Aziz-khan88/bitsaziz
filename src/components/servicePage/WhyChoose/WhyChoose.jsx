"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/WhyChoose.module.css"
import Slider from 'react-slick'

const WhyChoose = () => {
    const whychooseSlider = {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        speed: 300,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className={styles.whychooseSec}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={4}>
                        <div className="txt">
                            <h2 className='font-bold text-black manrope mb-md-3'>Why Choose Us</h2>
                            <p className='font16 text-black font-medium manrope mb-3'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining
                                UI/UX app design.</p>
                            <div className={styles.secBtn}>
                                <a href="javascript:;">
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Slider {...whychooseSlider} className={`whychooseSlider ${styles.whychooseSlider}`}>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Clear <br className='d-xl-block d-none' /> Communication</h3>
                                    <p className='manrope font-medium font16 pe-2'>We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Customer-Centric
                                        <br className='d-xl-block d-none' />
                                        Approch</h3>
                                    <p className='manrope font-medium font16 pe-2'>We prioritize our client's success, understand your unique needs, and deliver tailored solutions that drive your business growth.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Innovation And
                                        <br className='d-xl-block d-none' />
                                        Excellence</h3>
                                    <p className='manrope font-medium font16 pe-2'>We consistently deliver innovative, high quality solutions as a team on the cutting edge of technology trends.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Clear <br className='d-xl-block d-none' /> Communication</h3>
                                    <p className='manrope font-medium font16 pe-2'>We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose
