import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "./Industry.module.css";
//
import industry1 from '/public/images/industry/1.png'
import industry2 from '/public/images/industry/2.png'
import industry3 from '/public/images/industry/3.png'
import industry4 from '/public/images/industry/4.png'
import industry5 from '/public/images/industry/5.png'
import industry6 from '/public/images/industry/6.png'
import industry7 from '/public/images/industry/7.png'
import industry8 from '/public/images/industry/8.png'
import industry9 from '/public/images/industry/9.png'
import industry10 from '/public/images/industry/10.png'
import industry11 from '/public/images/industry/11.png'
import industry12 from '/public/images/industry/12.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industry = (props) => {
    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200) {
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
                    slidesToShow: 1,
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
            <section className={styles[props.industry]}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className="fontpink100 font-bold newfycolr text-center">Industry We Serve</h2>
                            <p className='text-center industyfont text-white mt-4'>No matter what your niche is, we will help build mobile apps for your business. Choose our <br /> best application development company for building apps in any business vertical.</p>
                            <p className={`${styles.reveal} text-white mt-4 mt-md-5 font25 fw700 mb-3`}> <span className='newfycolr fw600'>Select Your Industry.</span> Discover Our Impact.</p>
                        </Col>
                        {isSliderActive ?
                            <>
                                <div className={styles.vender}>
                                    <div className={styles.health}>
                                        <Image src={industry1} className='img-fluid' />
                                        <h4>Healthcare</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry2} className='img-fluid' />
                                        <h4>E-Commerce</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry3} className='img-fluid' />
                                        <h4>Education</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry4} className='img-fluid' />
                                        <h4>Banking</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry5} className='img-fluid' />
                                        <h4>Lifestyle</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry6} className='img-fluid' />
                                        <h4>Sports</h4>
                                    </div>
                                </div>
                                <div className={styles.vender}>
                                    <div className={styles.health}>
                                        <Image src={industry7} className='img-fluid' />
                                        <h4>Restaurants</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry8} className='img-fluid' />
                                        <h4>Travel</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry9} className='img-fluid' />
                                        <h4>Social</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry10} className='img-fluid' />
                                        <h4>Entertainment</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry11} className='img-fluid' />
                                        <h4>Game</h4>
                                    </div>
                                    <div className={styles.health}>
                                        <Image src={industry12} className='img-fluid' />
                                        <h4>Transportation</h4>
                                    </div>
                                </div>
                            </>
                            :
                            <Slider {...awardslogo} className={styles.tranpo}>
                                <div className={styles.health}>
                                    <Image src={industry1} className='img-fluid' />
                                    <h4>Healthcare</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry2} className='img-fluid' />
                                    <h4>E-Commerce</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry3} className='img-fluid' />
                                    <h4>Education</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry4} className='img-fluid' />
                                    <h4>Banking</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry5} className='img-fluid' />
                                    <h4>Lifestyle</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry6} className='img-fluid' />
                                    <h4>Sports</h4>
                                </div>


                                <div className={styles.health}>
                                    <Image src={industry7} className='img-fluid' />
                                    <h4>Restaurants</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry8} className='img-fluid' />
                                    <h4>Travel</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry9} className='img-fluid' />
                                    <h4>Social</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry10} className='img-fluid' />
                                    <h4>Entertainment</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry11} className='img-fluid' />
                                    <h4>Game</h4>
                                </div>
                                <div className={styles.health}>
                                    <Image src={industry12} className='img-fluid' />
                                    <h4>Transportation</h4>

                                </div>
                            </Slider>
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Industry