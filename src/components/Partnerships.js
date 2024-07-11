import React, { useState } from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Partnerships.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon1 from '/public/images/mobilelpfinal/fold2/1.png'
import icon2 from '/public/images/mobilelpfinal/fold2/2.png'
import icon3 from '/public/images/mobilelpfinal/fold2/3.png'
import icon4 from '/public/images/mobilelpfinal/fold2/4.png'
import icon5 from '/public/images/mobilelpfinal/fold2/5.png'
import icon6 from '/public/images/mobilelpfinal/fold2/6.png'


const Partnerships = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.footer}>
                <Container>
                    <Row className={styles.projectlp}>
                        <Col lg={12}>
                            <h2 className='newchoose fontf font-bold white mb-sm-4 text-center'>
                                Awards And Recognition
                            </h2>
                        </Col>
                        <Col lg={12} className={styles.trstCol}>
                            <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-2 mt-sm-4`}>
                                <div className={styles.strpImg}>
                                    <Image alt="BitsWits" src={icon1} className="img-fluid" />
                                </div>
                                <div className={styles.strpImg}>
                                    <Image alt="BitsWits" src={icon2} className="img-fluid" />
                                </div>
                                <div className={styles.strpImg}>
                                    <Image alt="BitsWits" src={icon3} className="img-fluid" />
                                </div>
                                <div className={styles.strpImg}>
                                    <Image alt="BitsWits" src={icon4} className="img-fluid" />
                                </div>
                                <div className={styles.strpImg}>
                                    <Image alt="BitsWits" src={icon5} className="img-fluid" />
                                </div>
                                <div className={styles.strpImg}>
                                    <Image alt="BitsWits" src={icon6} className="img-fluid" />
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Partnerships
