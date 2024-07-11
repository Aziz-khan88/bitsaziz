import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServicesAdvantage.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServicesAdvantage = (props) => {

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

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className={`${styles.creative2} ${styles[props.assignClass]}`}>
                <section className={styles.creative}>
                    <Container>
                        <Row className={styles.game}>
                            <Col lg={12}>
                                <p className='font24 font-bold text-center mb-0'>{props.subTitle}</p>
                                <h2 className='newchoose'>{props.title}</h2>
                                <h3>{props.text}</h3>
                            </Col>
                        </Row>

                        {isMobile ? (
                            <div className={`${styles.boy}`}>
                                <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title1}</h3>
                                            <p>{props.content1}</p>
                                        </div>
                                    </div>

                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title2}</h3>
                                            <p>{props.content2}</p>
                                        </div>
                                    </div>

                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title3}</h3>
                                            <p>{props.content3}</p>
                                        </div>
                                    </div>

                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title4}</h3>
                                            <p>{props.content4}</p>
                                        </div>
                                    </div>

                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title5}</h3>
                                            <p>{props.content5}</p>
                                        </div>
                                    </div>

                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title6}</h3>
                                            <p>{props.content6}</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        ) : (
                            <Row className={`${styles.boy}`}>
                                <Col xl={6}>
                                    <div className={styles.dscool}>
                                        <div>
                                            <h3>{props.title1}</h3>
                                            <p>{props.content1}</p>
                                        </div>
                                        <div>
                                            <h3>{props.title2}</h3>
                                            <p>{props.content2}</p>
                                        </div>
                                    </div>

                                    <div className={` ${styles.dscool} mt-3`}>
                                        <div>
                                            <h3>{props.title3}</h3>
                                            <p>{props.content3}</p>
                                        </div>
                                        <div>
                                            <h3>{props.title4}</h3>
                                            <p>{props.content4}</p>
                                        </div>
                                    </div>

                                    <div className={` ${styles.dscool} mt-3`}>
                                        <div>
                                            <h3>{props.title5}</h3>
                                            <p>{props.content5}</p>
                                        </div>
                                        <div>
                                            <h3>{props.title6}</h3>
                                            <p>{props.content6}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className={styles.tested}>
                                        <Image quality={75} src={props.AdvantageOne} alt='BitsWits' className={`${props.css} img-fluid`} />
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </section>
            </div>
        </>
    )
}

export default ServicesAdvantage
