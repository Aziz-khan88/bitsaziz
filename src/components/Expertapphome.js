import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertapphome.module.css";
//images
import banImg1 from '/public/images/expert/1.png'
import banImg2 from '/public/images/expert/2.png'
import banImg3 from '/public/images/expert/3.png'
import banImg4 from '/public/images/expert/4.png'
import banImg5 from '/public/images/expert/5.png'
import banImg6 from '/public/images/expert/6.png'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Expertapphome(props) {


    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // slider 
    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>

            {/* <Htmlfile /> */}
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2 pt-5'>

                        <Col lg={12} >
                            <h3 className='white f-20 f-700 center' data-scroll data-scroll-speed="0.2">SERVICES</h3>
                            <h2 className='white f-40 f-700 center' data-scroll data-scroll-speed="0.2">Mobile App Development Services</h2>
                            <p className={`${styles.appno} white font16 f-400 center`} data-scroll data-scroll-speed="0.2">Revolutionize Your Business With A Mobile App Development Firm Dedicated To Providing You With The Most Innovative Apps. Take Advantage Of Their Extensive Offerings For Essential Platforms Like Ios, And Android For Maximum Impact.</p>

                        </Col>

                        {isSliderActive ?
                            <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>


                                <div className={styles.app} data-scroll data-scroll-speed="0.3">
                                    <div className={styles.copy} >
                                        <h3 className='font15 white fw700'>iOS Application Development</h3>
                                        <p className='font12 white fw400'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                    </div>
                                </div>


                                <div className={styles.app} data-scroll data-scroll-speed="0.3">
                                    <div className={styles.copy} >
                                        <h3 className='font15 white fw700'>Android Application Development</h3>
                                        <p className='font12 white fw400'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. </p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                    </div>
                                </div>


                                <div className={styles.app} data-scroll data-scroll-speed="0.3">
                                    <div className={styles.copy} >
                                        <h3 className='font15 white fw700'>React NativeApp Development</h3>
                                        <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. </p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                    </div>
                                </div>

                                <div className={styles.app} data-scroll data-scroll-speed="0.8">
                                    <div className={styles.copy} >
                                        <h3 className='font15 white fw700'>Flutter App Development</h3>
                                        <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                    </div>
                                </div>


                                <div className={styles.app} data-scroll data-scroll-speed="0.8">
                                    <div className={styles.copy}>
                                        <h3 className='font15 white fw700'>Cross Platform App Development</h3>
                                        <p className='font12 white fw400'>We prioritize creating seamless user experiences in cross-platform app development.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                    </div>
                                </div>

                                <div className={styles.app} data-scroll data-scroll-speed="0.8">
                                    <div className={styles.copy} >
                                        <h3 className='font15 white fw700'>Web App Development</h3>
                                        <p className='font12 white fw400'>We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                    </div>
                                </div>

                            </Slider>
                            :

                            <>
                                <Col lg={4}>
                                    <div className={styles.app} data-scroll data-scroll-speed="0.3">
                                        <div className={styles.copy} >
                                            <h3 className='font15 white fw700'>iOS Application Development</h3>
                                            <p className='font12 white fw400'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app} data-scroll data-scroll-speed="0.3">
                                        <div className={styles.copy} >
                                            <h3 className='font15 white fw700'>Android Application Development</h3>
                                            <p className='font12 white fw400'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. </p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app} data-scroll data-scroll-speed="0.3">
                                        <div className={styles.copy} >
                                            <h3 className='font15 white fw700'>React NativeApp Development</h3>
                                            <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. </p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app} data-scroll data-scroll-speed="0.8">
                                        <div className={styles.copy} >
                                            <h3 className='font15 white fw700'>Flutter App Development</h3>
                                            <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app} data-scroll data-scroll-speed="0.8">
                                        <div className={styles.copy}>
                                            <h3 className='font15 white fw700'>Cross Platform App Development</h3>
                                            <p className='font12 white fw400'>We prioritize creating seamless user experiences in cross-platform app development.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app} data-scroll data-scroll-speed="0.8">
                                        <div className={styles.copy} >
                                            <h3 className='font15 white fw700'>Web App Development</h3>
                                            <p className='font12 white fw400'>We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                        </div>
                                    </div>
                                </Col>
                            </>
                        }


                    </Row>
                </Container>
            </section>
        </>
    )
}

