import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/CaseChoose.module.css";
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const NewCaseChoose = (props) => {

    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.caseChoose}>
                <Container>
                    <Row className='align-items-center gy-lg-5 gy-4'>
                        <Col lg={6} className={styles.walk}>
                            <h3 className='white newchoose font-bold f-700 mb-3'>{props.title}</h3>
                            <p>{props.text1}</p>
                            <p>{props.text2}</p>
                            <a href="tel:8335006007" className={styles.dus}>Choose Expertise, Choose Bitswits – Let's Get Started</a>
                        </Col>
                        <Col lg={6} className='d-none d-lg-block'>
                            <div className={styles.cart}>
                                <Row className='gy-4'>
                                    {props.items.map((item, index) => (
                                        <Col key={index} lg={4} sm={4}>
                                            <div className={styles.post}>
                                                <Image alt='BitsWits' src={item.image} className='img-fluid mb-3' />
                                                <p>{item.text}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>

                        {/* For Mobile */}
                        <Col lg={6} className='d-block d-lg-none'>
                            <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                                {props.items.map((item, index) => (
                                    <div className={styles.cart} key={index}>
                                        <div className={styles.post}>
                                            <Image alt='BitsWits' src={item.image} className='img-fluid mb-3' />
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewCaseChoose
