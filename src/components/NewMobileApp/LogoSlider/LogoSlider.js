"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMobileApp/LogoSlider.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import leftImg1 from 'media/newmobileapp/sqlite-logo/leftImg1.png'
import leftImg2 from 'media/newmobileapp/sqlite-logo/leftImg2.png'
import leftImg3 from 'media/newmobileapp/sqlite-logo/leftImg3.png'
import leftImg4 from 'media/newmobileapp/sqlite-logo/leftImg4.png'
import leftImg5 from 'media/newmobileapp/sqlite-logo/leftImg5.png'
import leftImg6 from 'media/newmobileapp/sqlite-logo/leftImg6.png'
import leftImg7 from 'media/newmobileapp/sqlite-logo/leftImg7.png'
import leftImg8 from 'media/newmobileapp/sqlite-logo/leftImg8.png'
import leftImg9 from 'media/newmobileapp/sqlite-logo/leftImg9.png'
import leftImg10 from 'media/newmobileapp/sqlite-logo/leftImg10.png'
import leftImg11 from 'media/newmobileapp/sqlite-logo/leftImg11.png'
import rightImg1 from 'media/newmobileapp/sqlite-logo/rightImg1.png'
import rightImg2 from 'media/newmobileapp/sqlite-logo/rightImg2.png'
import rightImg3 from 'media/newmobileapp/sqlite-logo/rightImg3.png'
import rightImg4 from 'media/newmobileapp/sqlite-logo/rightImg4.png'
import rightImg5 from 'media/newmobileapp/sqlite-logo/rightImg5.png'
import rightImg6 from 'media/newmobileapp/sqlite-logo/rightImg6.png'
import rightImg7 from 'media/newmobileapp/sqlite-logo/rightImg7.png'
import rightImg8 from 'media/newmobileapp/sqlite-logo/rightImg8.png'
import rightImg9 from 'media/newmobileapp/sqlite-logo/rightImg9.png'
import rightImg10 from 'media/newmobileapp/sqlite-logo/rightImg10.png'
import rightImg11 from 'media/newmobileapp/sqlite-logo/rightImg11.png'
import btnArrow from "media/newmobileapp/right-arrow.png"

const LogoSlider = (props) => {
    const tabLeft = [
        { image: rightImg8, index: 0 },
        { image: leftImg2, index: 1 },
        { image: leftImg3, index: 2 },
        { image: leftImg4, index: 3 },
        { image: leftImg5, index: 4 },
        { image: leftImg6, index: 5 },
        { image: leftImg7, index: 6 },
        { image: leftImg8, index: 7 },
        { image: leftImg9, index: 8 },
        { image: leftImg10, index: 9 },
        { image: leftImg11, index: 10 },
    ];
    const tabRight = [
        { image: rightImg1, index: 0 },
        { image: rightImg2, index: 1 },
        { image: rightImg3, index: 2 },
        { image: rightImg4, index: 3 },
        { image: rightImg5, index: 4 },
        { image: rightImg6, index: 5 },
        { image: rightImg7, index: 6 },
        { image: rightImg8, index: 7 },
        { image: rightImg9, index: 8 },
        { image: rightImg10, index: 9 },
        { image: rightImg11, index: 10 },
    ];

    var leftSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    var rightSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className={`d-none d-md-block ${styles.sliderSec}`}>
                <Row className={`m-0 py-lg-5 px-0 justify-content-center`} >
                    <Col md={12} className=' text-center d-flex flex-column align-items-center '>
                        <h2>
                            Your <span>  Tech Stack </span> is Our Burden
                        </h2>
                        <p>
                            Our
                            <span> teams </span> hold expertise in a multitude of
                            programming aspects
                        </p>
                        <br />
                        <Col md={11}>
                            <Slider {...leftSlider} className='mb-3'>
                                {tabLeft.map((item, index) => (
                                    <div className={`${styles.sliderImage} d-flex justify-content-center `}>
                                        <Image alt="BitsWits" src={item.image} className="img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col md={11}>
                            <Slider {...rightSlider} className='mt-5'>
                                {tabRight.map((item, index) => (
                                    <div className={`${styles.sliderImage} d-flex justify-content-center `}>
                                        <Image alt="BitsWits" src={item.image} className="img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.btn}>
                                <Link href="#form" className='d-flex align-items-center gap-3 pink'>
                                    Free Consultation
                                    <Image src={btnArrow} alt='Bitswits' width={24} height={12} />
                                </Link>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default LogoSlider