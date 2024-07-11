import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/AboutExpertapp.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon11 from '/public/newHomePageImages/done.png'


const appFeatures = [
    {
        title: 'Innovation',
        description: 'Our top app developers at BitsWits, focus on pushing boundaries and thinking outside the box to create amazing mobile applications that meet the user requirements. We are always looking for new ideas and technology to stay ahead of the competition.',
    },
    {
        title: 'Quick Collaboration',
        description: 'At BitsWits, top mobile app development services are offered with the help of teamwork and collaboration. Our professionals work closely with their clients throughout the development process while constantly seeking their feedback and input.',
    },
    {
        title: 'Dealing with Challenges',
        description: 'At BitsWits, problems and complications aren’t problems but opportunities to grow and learn. Our mobile app development company and its team understand what failure is. We tend to find innovative solutions and deliver positive outcomes when dealing with any issue.',
    },
    {
        title: 'Reliability and Security',
        description: 'Our expert app developers and designers understand the significance of keeping their client’s data safe and secure. We implement strong security measures and industry-standard protocols to protect the information in our mobile applications, maintaining confidentiality and availability.',
    },
];


export default function AboutExpertapp(props) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center gy-4 gy-lg-0'>
                        <Col lg={12} >
                            <h3 className='white f-30 f-700 center'>Services</h3>
                            <h2 className='white font50 f-700 center'>BitsWits: The Core Values!</h2>
                        </Col>

                        <Col xl={8}>
                            {isMobile ? (
                                <Slider {...mblSlider} className={` ${styles.nextalign1}`}>
                                    {appFeatures.map((feature, index) => (
                                        <div key={index}>
                                            <div className={styles.app}>
                                                <div className={styles.copy}>
                                                    <h3 className='font20 white fw700'>{feature.title}</h3>
                                                    <p className='font15.5 white fw400'>{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <Row className='gy-3'>
                                    {appFeatures.map((feature, index) => (
                                        <Col lg={6} key={index}>
                                            <div className={styles.app}>
                                                <div className={styles.copy}>
                                                    <h3 className='font20 white fw700'>{feature.title}</h3>
                                                    <p className='font15.5 white fw400'>{feature.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </Col>

                        <Col xl={4}>
                            <div className={styles.tested1}>
                                <Image quality={75} className='img-fluid w-75 mx-auto' src={icon11} alt='BitsWits' />
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.offer}>
                                <a className={styles.connect} href='javascript:$zopim.livechat.window.show();'>CONSULT WITH OUR TEAM!</a>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

