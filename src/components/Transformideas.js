import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Transformideas.module.css";
//images
import banImg1 from '/public/images/transformidead/1.png'
import banImg2 from '/public/images/transformidead/2.png'
import banImg3 from '/public/images/transformidead/3.png'
import banImg4 from '/public/images/transformidead/4.png'
import banImg5 from '/public/images/transformidead/5.png'
import banImg6 from '/public/images/transformidead/6.png'
import arow from '/public/images/transformidead/arow.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Transform(props) {

    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 480) {
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

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };



    return (
        <>
            <section className={styles[props.transform]}>
                <Container>

                    {isSliderActive ?

                        <>
                            <h3 className='white font25 f-300'>A Walkthrough Of Our Expertise</h3>
                            <h2 className='white font35 f-700 mb-4 mt-4'>Transforming Ideas Into Apps Partner With The Trusted Mobile App Development Agency!</h2>
                            <p className='white font16 f-500 mb-4'>Step into the dynamic world of mobile apps, where we bring innovation and creativity to every project. Our mobile app developers are masters at making visually appealing and easy-to-use apps. We work with you from ideation to launch to ensure that your app exceeds your expectations and aligns perfectly with your business goals.</p>
                            <div className={styles.ourt}>
                                <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>Request A Quote <Image alt='BitsWits' src={arow} className='img-fluid' /> </a>
                            </div>
                            <Slider {...awardslogo} >



                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg1} className='img-fluid mb-3' />
                                    <h3>12+</h3>
                                    <p>Years <br></br>
                                        Experience</p>
                                </div>
                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg2} className='img-fluid mb-3' />
                                    <h3>250+</h3>
                                    <p>Talented  <br></br>
                                        Squad</p>
                                </div>
                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg3} className='img-fluid mb-3' />
                                    <h3>1200+</h3>
                                    <p>Apps <br></br>
                                        Developed</p>
                                </div>


                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg4} className='img-fluid mb-3' />
                                    <h3>100%</h3>
                                    <p>Projects <br></br>
                                        Delivered</p>
                                </div>
                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg5} className='img-fluid mb-3' />
                                    <h3>50+</h3>
                                    <p>Countries  <br></br>
                                        Served</p>
                                </div>
                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg6} className='img-fluid mb-3' />
                                    <h3>100%</h3>
                                    <p>Client <br></br>
                                        Satisfaction</p>
                                </div>




                            </Slider>
                        </>
                        :
                        <Row className='align-items-center gy-3 gy-md-0'>

                            <Col lg={6} className={styles.walk}>
                                <h3 className='white font25 f-300'>A Walkthrough Of Our Expertise</h3>
                                <h2 className='white font35 f-700 mb-4 mt-4'>Transforming Ideas Into Apps Partner With The Trusted Mobile App Development Agency!</h2>
                                <p className='white font16 f-500 mb-4'>Step into the dynamic world of mobile apps, where we bring innovation and creativity to every project. Our mobile app developers are masters at making visually appealing and easy-to-use apps. We work with you from ideation to launch to ensure that your app exceeds your expectations and aligns perfectly with your business goals.</p>
                                <div className={styles.ourt}>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>Request A Quote <Image alt='BitsWits' src={arow} className='img-fluid' /> </a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.cart}>
                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={banImg1} className='img-fluid mb-3' />
                                        <h3>12+</h3>
                                        <p>Years <br></br>
                                            Experience</p>
                                    </div>
                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={banImg2} className='img-fluid mb-3' />
                                        <h3>250+</h3>
                                        <p>Talented  <br></br>
                                            Squad</p>
                                    </div>
                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={banImg3} className='img-fluid mb-3' />
                                        <h3>1200+</h3>
                                        <p>Apps <br></br>
                                            Developed</p>
                                    </div>
                                </div>
                                <div className={styles.cart}>
                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={banImg4} className='img-fluid mb-3' />
                                        <h3>100%</h3>
                                        <p>Projects <br></br>
                                            Delivered</p>
                                    </div>
                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={banImg5} className='img-fluid mb-3' />
                                        <h3>50+</h3>
                                        <p>Countries  <br></br>
                                            Served</p>
                                    </div>
                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={banImg6} className='img-fluid mb-3' />
                                        <h3>100%</h3>
                                        <p>Client <br></br>
                                            Satisfaction</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    }
                </Container>

            </section>
        </>
    )
}

