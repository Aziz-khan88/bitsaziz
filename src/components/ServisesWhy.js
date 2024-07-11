import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServisesWhy.module.css";
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ServisesWhy = (props) => {

    const servWhy = {
        dots: false,
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
            <section className={styles.newHomeBg}>
                <Container>

                    <Row>
                        <Col lg={12} className='mx-auto'>
                            {props.title}
                            {props.subtitle}

                            {props.sub1 &&
                                <p className={`f-20 text-white font-bold text-center`}>
                                    {props.sub1}
                                </p>
                            }

                            {props.sub2 &&
                                <p className={`text-center font16 text-white`}>
                                    {props.sub2}
                                </p>

                            }
                        </Col>
                        <Col lg={12} className='mt-5'>
                            <Row className='gy-5 d-none d-lg-flex'>
                                {props.whyData.map((item, index) => (
                                    <Col lg={4} key={index}>
                                        <div className={styles.whyBox}>
                                            <h5 className='font32 font-bold text-white mb-3'>{item.title}</h5>
                                            <p className={`font16 text-white mb-0`}>{item.para}</p>
                                            <div className={styles.whyImg}>
                                                <Image quality={75} alt='BitsWits' src={item.icon} width={55} height={55} />
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <Row className='d-block d-lg-none'>
                                <Slider {...servWhy} className='servWhy'>
                                    {props.whyData.map((item, index) => (
                                        <div key={index}>
                                            <Col lg={4}>
                                                <div className={styles.whyBox}>
                                                    <h5 className='font32 font-bold text-white mb-3'>{item.title}</h5>
                                                    <p className={`font16 text-white mb-0`}>{item.para}</p>
                                                    <div className={styles.whyImg}>
                                                        <Image quality={75} alt='BitsWits' src={item.icon} width={55} height={55} />
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    ))}
                                </Slider>
                            </Row>
                        </Col>
                        <Col lg={10} className='mx-auto mt-2 mt-lg-5'>
                            <div className={styles.sec_btn}>
                                <a href="tel:8335006007" className={`${styles.btn2} ${styles.btn} font-extrabold`}>
                                    LET'S CONNECT
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServisesWhy
