import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/HireSteps.module.css'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HireSteps = (props) => {

    const mblSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            <section className={`${styles.steps}`}>
                <Container>
                    <Row className='gy-5 d-none d-md-flex'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div className={styles.left} key={index}>
                                        <h2 className='newchoose'>{item.title}</h2>
                                        {item.text.map((text, pIndex) => (
                                            <p key={pIndex}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        {props.stepsArray.map((stepItem, index) => (
                            <Col lg={3} md={6} key={index}>
                                <div className={styles.stepBox}>
                                    <h5>{stepItem.step}</h5>
                                    <Image src={stepItem.imageSrc} alt='BitsWits' className='img-fluid' />
                                    <h6>{stepItem.description}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <Row className='gy-4 d-block d-md-none'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div className={styles.left} key={index}>
                                        <h2>{item.title}</h2>
                                        {item.text.map((text, pIndex) => (
                                            <p key={pIndex}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {props.stepsArray.map((stepItem, index) => (
                                <Col lg={3} md={6} key={index}>
                                    <div className={styles.stepBox}>
                                        <h5>{stepItem.step}</h5>
                                        <Image src={stepItem.imageSrc} alt="BitsWits" className="img-fluid" />
                                        <h6>{stepItem.description}</h6>
                                    </div>
                                </Col>
                            ))}
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireSteps
