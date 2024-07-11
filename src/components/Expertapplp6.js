import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertapplp6.module.css";
//images
import banImg1 from '/public/images/expert/1.png'
import banImg2 from '/public/images/expert/2.png'
import banImg3 from '/public/images/expert/3.png'
import banImg4 from '/public/images/expert/4.png'
import banImg5 from '/public/images/expert/5.png'
import banImg6 from '/public/images/expert/6.png'
//
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function Expertapplp6(props) {

    var phoneSlider = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 480) {
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
            <section className={styles[props.expertapp]}>
                <Container>

                    {isSliderActive ?

                        <>
                            <Row className='align-items-center g-2'>

                                <Col lg={12} >
                                    <h3 className='white f-30 f-700 center'>Expert Mobile App Solutions</h3>
                                    <h2 className='white f-60 f-700 center'>Mobile App Development Services</h2>
                                    <p className={`${styles.appno} white font16 f-400 center`}>Discover A Range Of Services Tailored To Your Needs. From Engaging Native Apps For Ios And Android To Versatile Cross-Platform Solutions, We Offer Everything You Need To Succeed In The Mobile Space.</p>

                                </Col>
                            </Row>

                            <Slider {...phoneSlider} className='mt-3'>



                                <Col lg={4}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <h3 className='font18 white fw700'>iOS Application Development</h3>
                                            <p className='font12 white fw400'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <h3 className='font18 white fw700'>Android Application Development</h3>
                                            <p className='font12 white fw400'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. </p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <h3 className='font18 white fw700'>React NativeApp Development</h3>
                                            <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. </p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <h3 className='font18 white fw700'>Flutter App Development</h3>
                                            <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <h3 className='font18 white fw700'>Cross Platform App Development</h3>
                                            <p className='font12 white fw400'>We prioritize creating seamless user experiences in cross-platform app development.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <h3 className='font18 white fw700'>Web App Development</h3>
                                            <p className='font12 white fw400'>We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.</p>
                                        </div>
                                        <div>
                                            <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                        </div>
                                    </div>

                                </Col>

                            </Slider>

                            <Col lg={12} className='mt-4'>
                                <div className={styles.offer}>
                                <a className={styles.connect} href='tel:8335006007'>Your App, Our Expertise -  Let's Connect </a>
                                </div>
                            </Col>

                        </>

                        :

                        <Row className='align-items-center g-2'>

                            <Col lg={12} >
                                <h3 className='white f-30 f-700 center'>Expert Mobile App Solutions</h3>
                                <h2 className='text-white font50 f-700 center mb-2'>Mobile App Development Services</h2>
                                <p className={`${styles.appno} white font16 f-400 center`}>Discover A Range Of Services Tailored To Your Needs. From Engaging Native Apps For Ios And Android To Versatile Cross-Platform Solutions, We Offer Everything You Need To Succeed In The Mobile Space.</p>

                            </Col>

                            <Col lg={4}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <h3 className='font18 white fw700'>iOS Application Development</h3>
                                        <p className='font12 white fw400'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <h3 className='font18 white fw700'>Android Application Development</h3>
                                        <p className='font12 white fw400'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. </p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <h3 className='font18 white fw700'>React NativeApp Development</h3>
                                        <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. </p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <h3 className='font18 white fw700'>Flutter App Development</h3>
                                        <p className='font12 white fw400'>Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <h3 className='font18 white fw700'>Cross Platform App Development</h3>
                                        <p className='font12 white fw400'>We prioritize creating seamless user experiences in cross-platform app development.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={4}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <h3 className='font18 white fw700'>Web App Development</h3>
                                        <p className='font12 white fw400'>We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.</p>
                                    </div>
                                    <div>
                                        <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={12}>
                                <div className={styles.offer}>
                                    <a className={styles.connect} href='tel:8335006007'>Your App, Our Expertise -  Let's Connect </a>
                                </div>
                            </Col>

                        </Row>

                    }


                </Container>

            </section>
        </>
    )
}

