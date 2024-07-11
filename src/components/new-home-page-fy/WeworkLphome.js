import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
// import ReactSlider from "react-slider";
import styles from "./Wework.module.css";
//images
import startups1 from '/public/images/weworkhome/1.png'
import startups2 from '/public/images/weworkhome/2.png'
import startups3 from '/public/images/weworkhome/3.png'


export default function WeworkLp6(props) {

    var clientsthink = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        adaptiveHeight: true
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isSliderActive, setIsSliderActive] = useState(true);

    return (
        <>
            {isSliderActive ?
                <div className={`${styles[props.wework]} `}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg={12}>
                                <h2 className="white fontpink100 f-700 mb-2 mb-sm-4">
                                    <span> We Work </span> With:
                                </h2>
                            </Col>
                        </Row>
                        <Slider {...clientsthink}>
                            <Col lg={4} className='py-3'>
                                <Image alt='BitsWits' src={startups1} className='img-fluid mb-3' />
                                <h4 className='mt-4 white'>Pre-Seed & <br></br>
                                    Seed Startups</h4>
                                <p className='white mb-0'>Create a pitch deck, research your idea, run
                                    user interviews, and create MVP.</p>
                            </Col>
                            <Col lg={4} className='p-3'>
                                <Image alt='BitsWits' src={startups2} className='img-fluid mb-3' />
                                <h4 className='mt-4 white'>Startups <br></br>
                                    that Scale</h4>
                                <p className='white mb-0'>Find your product-market fit, find the team
                                    with the right skill set, and scale fast without
                                    breaking things.</p>
                            </Col>
                            <Col lg={4} className='p-3'>
                                <Image alt='BitsWits' src={startups3} className='img-fluid mb-3' />
                                <h4 className='mt-4 white'>Businesses that  <br></br>
                                    want to digitize</h4>
                                <p className='white mb-0'>Redesign and modernize your platform or SaaS, and
                                    create new internal tools for better management.</p>
                            </Col>
                        </Slider>
                    </Container>
                </div>
                :
                <section className={styles[props.wework]}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg={12}>
                                <h2 className="text-left white fontpink100 f-700 mb-4">
                                    <span> We Work </span> With:
                                </h2>
                            </Col>
                        </Row>
                        <Row className={` ${styles.dem} gx-5 `}>
                            <Col lg={4}>
                                <Image alt='BitsWits' src={startups1} className='img-fluid mb-3' />
                                <h4 className='mt-5'>Pre-Seed & <br></br>
                                    Seed Startups</h4>
                                <p>Create a pitch deck, research your idea, run
                                    user interviews, and create MVP.</p>
                            </Col>
                            <Col lg={4}>
                                <Image alt='BitsWits' src={startups2} className='img-fluid mb-3' />
                                <h4 className='mt-5'>Startups <br></br>
                                    that Scale</h4>
                                <p>Find your product-market fit, find the team
                                    with the right skill set, and scale fast without
                                    breaking things.</p>
                            </Col>
                            <Col lg={4}>
                                <Image alt='BitsWits' src={startups3} className='img-fluid mb-3' />
                                <h4 className='mt-5'>Businesses that  <br></br>
                                    want to digitize</h4>
                                <p>Redesign and modernize your platform or SaaS, and
                                    create new internal tools for better management.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
        </>
    )
}

