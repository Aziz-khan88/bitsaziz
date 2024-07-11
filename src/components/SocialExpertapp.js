import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertapp.module.css";
//images
import banImg1 from '/public/images/expert/1.png'
import banImg2 from '/public/images/expert/2.png'
import banImg3 from '/public/images/expert/3.png'
import banImg4 from '/public/images/expert/4.png'
import banImg5 from '/public/images/expert/5.png'
import banImg6 from '/public/images/expert/6.png'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const appData = [
    {
        title: 'iOS Application Development',
        description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.',
        imageSrc: banImg1,
    },
    {
        title: 'Android Application Development',
        description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.',
        imageSrc: banImg2,
    },
    {
        title: 'React Native App Development',
        description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.',
        imageSrc: banImg3,
    },
    {
        title: 'Flutter App Development',
        description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.',
        imageSrc: banImg4,
    },
    {
        title: 'Cross Platform App Development',
        description: 'We prioritize creating seamless user experiences in cross-platform app development.',
        imageSrc: banImg5,
    },
    {
        title: 'Web App Development',
        description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.',
        imageSrc: banImg6,
    },
];


export default function SocialExpertapp(props) {


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
                    <Row className='align-items-center g-3 d-none d-lg-flex'>
                        <Col lg={12} >
                            <h3 className='newfycolr f-30 f-700 center'>How We Make App Creation Simple and Effective</h3>
                            <h2 className='white newchoose f-700 center'>Our Mobile App Development Solutions</h2>
                            <p className={`${styles.appno} white font16 f-400 center`}>Our comprehensive services cover everything from design to development, ensuring your journey to create an app <br /> is smooth and successful. With our support, the process of app-making is not just easy. It's a journey of innovation.</p>
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
                    </Row>

                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>
                        <Col lg={12} >
                            <h3 className='newfycolr f-30 f-700 center pt-5 pt-md-0'>How We Make App Creation Simple and Effective</h3>
                            <h2 className='white font50 f-700 center'>Our Mobile App Development Solutions</h2>
                            <p className={`${styles.appno} white font16 f-400 center`}>Our comprehensive services cover everything from design to development, ensuring your journey to create an app is smooth and successful. With our support, the process of app-making is not just easy. It's a journey of innovation.</p>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {appData.map((app, index) => (
                                <Col lg={4} key={index}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <Image alt='BitsWits' src={app.imageSrc} className='img-fluid mb-3' />
                                            <h3 className='font18 white fw700'>{app.title}</h3>
                                            <p className='font12 white fw400'>{app.description}</p>
                                        </div>
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

