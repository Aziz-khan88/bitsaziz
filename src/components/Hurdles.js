import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Hurdles.module.css";
//
import secImg from '/public/images/lp-images/hurdles.png'
import secImg1 from '/public/images/lp-images/1.png'
import secImg2 from '/public/images/lp-images/2.png'
import secImg3 from '/public/images/lp-images/3.png'
import secImg4 from '/public/images/lp-images/4.png'
import secImg5 from '/public/images/lp-images/5.png'
//
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";


const Hurdles = () => {

    const awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
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
            <section className={styles.transform}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <div className={styles.walk}>
                                <h2 className='white font50 f-700'>App Development Hurdles?</h2>

                                {isSliderActive ?
                                    <Slider {...awardslogo} className={` ${styles.startup1} pt-0 pt-md-5`}>
                                        <Image quality={95} alt='BitsWits' src={secImg1} className='img-fluid my-4' />
                                        <Image quality={95} alt='BitsWits' src={secImg2} className='img-fluid my-4' />
                                        <Image quality={95} alt='BitsWits' src={secImg3} className='img-fluid my-4' />
                                        <Image quality={95} alt='BitsWits' src={secImg4} className='img-fluid my-4' />
                                        <Image quality={95} alt='BitsWits' src={secImg5} className='img-fluid my-4' />
                                    </Slider>

                                    :
                                    <Image quality={95} alt='BitsWits' src={secImg} className='img-fluid my-4' />

                                }


                                <h3 className='white font40 f-700'>We Get It and We've Got Solutions</h3>
                                <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>Talk To An Expert</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hurdles
