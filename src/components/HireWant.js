import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/HireWant.module.css'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import tick from '/public/images/hire-page/tick.png'
import arrow from '/public/images/hire-page/arrow.png'


const HireWant = (props) => {

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
            <section className={`${styles.wants}`}>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div className={styles.left} key={index}>
                                        <h2 className='newchoose'>{item.title}</h2>
                                        {item.text.map((text, pIndex) => (
                                            <p key={pIndex}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                                <Row>
                                    {props.contentArray.map((columns, rowIndex) => (
                                        <Col md={6} key={rowIndex}>
                                            <ul>
                                                {columns.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Image src={tick} alt="BitsWits" className={`img-fluid`} />
                                                        <span>{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Row className='gy-4 mt-4 mt-lg-0 d-none d-lg-flex'>
                                {props.items.map((item, index) => (
                                    <Col lg={6} key={index}>
                                        <div className={styles.wantBox}>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <div className={styles.timing}>
                                                <div className={styles.timeBox}>
                                                    <h5>Working Hours:</h5>
                                                    <p>{item.workingHours}</p>
                                                </div>
                                                <div className={styles.timeBox}>
                                                    <h5>Communication:</h5>
                                                    <p>Skype, Email, Phone</p>
                                                </div>
                                                <div className={styles.timeBox}>
                                                    <h5>Billing:</h5>
                                                    <p>Monthly</p>
                                                </div>
                                            </div>
                                            <a href="javascript:$zopim.livechat.window.show();">
                                                <span>Hire Now</span>
                                                <Image src={arrow} alt="BitsWits" className={`img-fluid`} />
                                            </a>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {/*========= For Mobile =========*/}
                            <Row className='gy-4 mt-4 mt-lg-0 d-block d-lg-none'>
                                <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                                    {props.items.map((item, index) => (
                                        <Col lg={6} key={index}>
                                            <div className={styles.wantBox}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <div className={styles.timing}>
                                                    <div className={styles.timeBox}>
                                                        <h5>Working Hours:</h5>
                                                        <p>{item.workingHours}</p>
                                                    </div>
                                                    <div className={styles.timeBox}>
                                                        <h5>Communication:</h5>
                                                        <p>Skype, Email, Phone</p>
                                                    </div>
                                                    <div className={styles.timeBox}>
                                                        <h5>Billing:</h5>
                                                        <p>Monthly</p>
                                                    </div>
                                                </div>
                                                <a href="javascript:$zopim.livechat.window.show();">
                                                    <span>Hire Now</span>
                                                    <Image src={arrow} alt="BitsWits" className="img-fluid" />
                                                </a>
                                            </div>
                                        </Col>
                                    ))}
                                </Slider>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireWant
