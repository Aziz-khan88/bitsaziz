import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServiceGenre.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServiceGenre = (props) => {

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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={`${styles.ourserve} ${styles[props.addClass]}`}>
                <Container>
                    <Row className={styles.which}>
                        <Col xl={12}>
                            <p className='text-center font24 font-bold'>{props.subTitle}</p>
                            <h2 className='text-white text-center newchoose font-bold'>{props.title}</h2>
                        </Col>
                    </Row>

                    {isMobile ? (
                        <div className={`${styles.play}`}>
                            <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                                {props.sections.map((section, index) => (
                                    <div className={styles.compelling}>
                                        <div key={index} className={styles.bod}>
                                            <Image quality={75} alt='BitsWits' src={section.gameicon} className='img-fluid' />
                                            <h3>{section.title}</h3>
                                            <p>{section.text}</p>
                                            <a href='javascript:$zopim.livechat.window.show();'>LET's CONNECT</a>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <Row className={` ${styles.play}`}>
                            {props.sections.map((section, index) => (
                                <Col xl={4} className={styles.compelling}>
                                    <div key={index} className={styles.bod}>
                                        <Image quality={75} alt='BitsWits' src={section.gameicon} className='img-fluid' />
                                        <h2 className='text-white text-center font-bold'>{section.title}</h2>
                                        <p>{section.text}</p>
                                        <a href='javascript:$zopim.livechat.window.show();'>LET's CONNECT</a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </section>
        </>
    )
}

export default ServiceGenre