import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/HireChoose.module.css'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HireChoose = (props) => {

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
            <section className={`${styles.choose}`}>
                <Container fluid>
                    <Row className='gy-5 d-none d-lg-flex'>
                        <Col lg={10} className='mx-auto mb-4'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='newchoose'>{item.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        {props.choosesArray.map((chooseItem, index) => (
                            <Col lg={3} md={6} key={index}>
                                <div className={styles.chooseBox}>
                                    <div className={styles.num}>{chooseItem.number}</div>
                                    <h5>{chooseItem.title}</h5>
                                    <p>{chooseItem.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>
                        <Col lg={10} className='mx-auto mb-4'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div key={index}>
                                        <h2>{item.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider} mt-2`}>
                            {props.choosesArray.map((chooseItem, index) => (
                                <Col lg={3} md={6} key={index}>
                                    <div className={styles.chooseBox}>
                                        <div className={styles.num}>{chooseItem.number}</div>
                                        <h5>{chooseItem.title}</h5>
                                        <p>{chooseItem.description}</p>
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

export default HireChoose
