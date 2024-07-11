import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "./LpChoose.module.css";
//images
import banImg1 from '/public/images/lp-images/icon1.png'
import banImg2 from '/public/images/lp-images/icon2.png'
import banImg3 from '/public/images/lp-images/icon3.png'
import banImg4 from '/public/images/lp-images/icon4.png'
import banImg5 from '/public/images/lp-images/icon5.png'
import banImg6 from '/public/images/lp-images/icon6.png'
import banImg7 from '/public/images/lp-images/icon7.png'
import banImg8 from '/public/images/lp-images/icon8.png'
import banImg9 from '/public/images/lp-images/icon9.png'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const items = [
    {
        image: banImg1,
        text: (<> Experienced  <br /> Professionals </>)
    },
    {
        image: banImg2,
        text: (<> On-Time <br /> Delivery </>)
    },
    {
        image: banImg3,
        text: (<> Cost-Effective <br /> Solutions </>)
    },
    {
        image: banImg4,
        text: (<> Scalable and <br /> Secure Apps </>)
    },
    {
        image: banImg5,
        text: (<> User-Centric <br /> Design </>)
    },
    {
        image: banImg6,
        text: (<> Customized <br /> Development </>)
    },
    {
        image: banImg7,
        text: (<> Error-Free <br /> Delivery </>)
    },
    {
        image: banImg8,
        text: (<> Transparent <br /> Communication </>)
    },
    {
        image: banImg9,
        text: (<> Support and <br /> Maintenance </>)
    }
];

const LpChoose = (props) => {
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
            <section className={styles[props.transform]}>
                <Container>
                    <Row className='align-items-center gy-lg-5 gy-4'>
                        <Col lg={6} className={styles.walk}>
                            <h3 className='white newchoose font-bold f-700'>Why Choose Us</h3>
                            <h2 className='white f-500 my-2 my-lg-3'>What Makes Bitswits The Most
                                Recommended Solution Provider
                                Company?</h2>
                            <p className='fw500 pb-3'>As the leading Solution Provider, Our expertise isn’t limited to one area; we excel across various technological frontiers, including bespoke software solutions, advanced mobile app development, engaging game design, pioneering blockchain projects, and cutting-edge AI innovations. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to provide unparalleled solutions to our valued clients instantly. Partner with Bitswits, where every project is a step towards redefining technological excellence and driving your success.</p>
                            <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>Choose Expertise, Choose Bitswits – Let's Get Started</a>
                        </Col>
                        <Col lg={6} className='d-none d-lg-block'>
                            <div className={styles.cart}>
                                <Row className='gy-4'>
                                    {items.map((item, index) => (
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
                                {items.map((item, index) => (
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

export default LpChoose
