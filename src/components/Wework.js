import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Wework.module.css";
//images
import startups1 from '/public/images/wework/1.png'
import startups2 from '/public/images/wework/2.png'
import startups3 from '/public/images/wework/3.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Wework(props) {

    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
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
                    slidesToShow: 1,
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
            <section className={styles[props.wework]}>
                <Container>
                    <Row className='align-items-center'>

                        <Col lg={12}>
                            <h2 className="white f-60 f-700 mb-4">
                                <span> We Work </span> With:
                            </h2>
                        </Col>
                    </Row>
                    {isSliderActive ?
                        <Slider {...awardslogo} className={styles.dem}>
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
                        </Slider>
                        :
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
                    }
                </Container>
            </section>
        </>
    )
}

