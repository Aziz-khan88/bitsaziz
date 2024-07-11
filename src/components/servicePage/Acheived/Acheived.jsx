"use client"
import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Acheived.module.css"
// Images     
import Slider1 from "/public/newDubaiPagev1/award1.png"
import Slider2 from "/public/newDubaiPagev1/award2.png"
import Slider3 from "/public/newDubaiPagev1/award3.png"
import Slider4 from "/public/newDubaiPagev1/award4.png"
import Slider5 from "/public/newDubaiPagev1/award5.png"
import Slider6 from "/public/newDubaiPagev1/award6.png"
import Slider7 from "/public/newDubaiPagev1/award7.png"
import Slider8 from "/public/newDubaiPagev1/award8.png"
import Slider9 from "/public/newDubaiPagev1/award9.png"
import Slider10 from "/public/newDubaiPagev1/award10.png"
import Slider11 from "/public/newDubaiPagev1/award11.png"
import Slider12 from "/public/newDubaiPagev1/award12.svg"
import Slider13 from "/public/newDubaiPagev1/award13.svg"
import Slider from 'react-slick';

const Acheived = () => {
    var acheivedSlider = {
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 14000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    speed: 20000,
                }
            },
        ]
    };
    return (
        <section className={styles.acheivedSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center manrope font-bold mb-xl-3'>Together We've Achieved</h2>
                            <p className='font16 text-black font-medium text-center manrope mb-5 pb-3'>We’re a software development company that ensures its expertise extends to offer <br className='d-lg-block d-none' /> a seamlessly productive and growth-oriented partnership</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col lg={12}>
                    <Slider {...acheivedSlider} className={`acheivedSlider ${styles.acheivedSlider}`}>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider2} alt="Bitswits" className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider3} alt="Bitswits" className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider1} alt="Bitswits" className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider5} alt="Bitswits" width={120} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider6} alt="Bitswits" width={123} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider7} alt="Bitswits" width={90} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider12} alt="Bitswits" width={100} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider13} alt="Bitswits" width={100} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider8} alt="Bitswits" width={102} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider9} alt="Bitswits" width={102} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider10} alt="Bitswits" width={100} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider1} alt="Bitswits" className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider2} alt="Bitswits" className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider3} alt="Bitswits" width={100} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider5} alt="Bitswits" width={120} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider6} alt="Bitswits" width={123} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider7} alt="Bitswits" width={90} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider8} alt="Bitswits" width={102} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider9} alt="Bitswits" width={102} height={100} className='mx-auto' />
                        </div>
                        <div className='px-2 px-lg-1'>
                            <Image src={Slider10} alt="Bitswits" width={100} height={100} className='mx-auto' />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </section >
    )
}

export default Acheived
