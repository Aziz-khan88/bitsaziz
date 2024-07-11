import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Container } from 'react-bootstrap'
import styles from '@/styles/Appmaking.module.css'
// images
import logo1 from '/public/images/logoservices/1.png'
import logo2 from '/public/images/logoservices/2.png'
import logo3 from '/public/images/logoservices/3.png'
import logo4 from '/public/images/logoservices/4.png'
import logo5 from '/public/images/logoservices/5.png'
import logo6 from '/public/images/logoservices/6.png'
import line2345 from '/public/images/logoservices/line2345.png'
import { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Appmaking = () => {

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
        autoplay: false,
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
            <section className={styles.appmaking} id='technofair'>
                <Container>
                    <Row className={`${styles.platform} w-100 gx-5 gy-3`}>
                        <Col xl={10}>
                            <h2 className="white f-20 f-700 center">TECHNOLOGIES</h2>
                            <h3 className="white f-40 f-700 center">Best App Making Technologies</h3>
                            <p className="white font16 f-400 center mb-5">BitsWits turns inventive ideas into groundbreaking mobile apps! Our award-winning app developers know hybrid and native technologies, so your project is in good hands. With us, your project will be a success from start to finish!</p>
                        </Col>
                        {isSliderActive ?
                            <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
                                <div className={styles.native} data-scroll data-scroll-speed="0.4">
                                    <div className={styles.noroow}>
                                        <Image alt='BitsWits' src={logo1} className='img-fluid' />
                                        <Image alt='BitsWits' src={logo2} className='img-fluid' />
                                        <Image alt='BitsWits' src={logo3} className='img-fluid' />
                                        <Image alt='BitsWits' src={logo4} className='img-fluid' />

                                    </div>
                                    <h3 className="white font24 f-700 mt-4 mb-4">Hybrid App Development</h3>

                                    <Image alt='BitsWits' src={line2345} className='img-fluid' />

                                    <ul className={styles.dev}>
                                        <li className="white mt-3">Cross-platform Compatibility.</li>
                                        <li className="white mt-3">Accelerated Development Cycle.</li>
                                        <li className="white mt-3">Customizable UI/UX Design.</li>
                                        <li className="white mt-3">Cost-Effective Single Codebase Solution.</li>
                                    </ul>

                                    <a href='javascript:$zopim.livechat.window.show();' className={styles.live}>Start <br /> Live Chat</a>

                                </div>
                                <div className={styles.native2} data-scroll data-scroll-speed="0.4">
                                    <div className={`${styles.noroow2} ${styles.noroow1}`}>
                                        <Image alt='BitsWits' src={logo5} className='img-fluid' />
                                        <Image alt='BitsWits' src={logo6} className='img-fluid' />


                                    </div>
                                    <h3 className="white font24 f-700 mt-4 mb-4">Native App Development</h3>

                                    <Image alt='BitsWits' src={line2345} className='img-fluid' />

                                    <ul className={styles.dev}>
                                        <li className="white mt-3">High Performance Platform-Optimization.</li>
                                        <li className="white mt-3">Access To Device Features & Integration.</li>
                                        <li className="white mt-3">Customized UI/UX Application Design.</li>
                                        <li className="white mt-3 mb-5">Robust & Adaptable Mobile Application.</li>
                                    </ul>
                                    <div>
                                        <a href='tel:8335006007' className={styles.live1}>Call Now: (833) 500-6007</a>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <>
                                <Col xl={5}>
                                    <div className={styles.native} data-scroll data-scroll-speed="0.4">
                                        <div className={styles.noroow}>
                                            <Image alt='BitsWits' src={logo1} className='img-fluid' />
                                            <Image alt='BitsWits' src={logo2} className='img-fluid' />
                                            <Image alt='BitsWits' src={logo3} className='img-fluid' />
                                            <Image alt='BitsWits' src={logo4} className='img-fluid' />

                                        </div>
                                        <h3 className="white font24 f-700 mt-4 mb-4">Hybrid App Development</h3>

                                        <Image alt='BitsWits' src={line2345} className='img-fluid' />

                                        <ul className={styles.dev}>
                                            <li className="white mt-3">Cross-platform Compatibility.</li>
                                            <li className="white mt-3">Accelerated Development Cycle.</li>
                                            <li className="white mt-3">Customizable UI/UX Design.</li>
                                            <li className="white mt-3">Cost-Effective Single Codebase Solution.</li>
                                        </ul>

                                        <a href='javascript:$zopim.livechat.window.show();' className={styles.live}>Start <br /> Live Chat</a>

                                    </div>
                                </Col>
                                <Col xl={5}>
                                    <div className={styles.native2} data-scroll data-scroll-speed="0.4">
                                        <div className={`${styles.noroow2} ${styles.noroow1}`}>
                                            <Image alt='BitsWits' src={logo5} className='img-fluid' />
                                            <Image alt='BitsWits' src={logo6} className='img-fluid' />


                                        </div>
                                        <h3 className="white font24 f-700 mt-4 mb-4">Native App Development</h3>

                                        <Image alt='BitsWits' src={line2345} className='img-fluid' />

                                        <ul className={styles.dev}>
                                            <li className="white mt-3">High Performance Platform-Optimization.</li>
                                            <li className="white mt-3">Access To Device Features & Integration.</li>
                                            <li className="white mt-3">Customized UI/UX Application Design.</li>
                                            <li className="white mt-3 mb-5">Robust & Adaptable Mobile Application.</li>
                                        </ul>
                                        <div>
                                            <a href='tel:8335006007' className={styles.live1}>Call Now: (833) 500-6007</a>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        }
                    </Row>
                </Container>
                <div className={styles.post}></div>
            </section>
        </>
    )
}

export default Appmaking