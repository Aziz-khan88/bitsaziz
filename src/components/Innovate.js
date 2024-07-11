import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Innovate.module.css'
//
import icon20 from '/public/images/mobilelpfinal/layout.png'
import layout1 from '/public/images/mobilelpfinal/1.png'
import layout2 from '/public/images/mobilelpfinal/2.png'
import layout3 from '/public/images/mobilelpfinal/3.png'
import layout4 from '/public/images/mobilelpfinal/4.png'
import layout5 from '/public/images/mobilelpfinal/5.png'
//
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css";


const Innovate = () => {
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

            <section className={`overflow-hidden ${styles.innovate}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <h2 className={styles.lead}>Innovate Today, Lead Tomorrow</h2>
                                <h4 className={styles.excellence}>Your App's Journey To Excellence Starts Now!</h4>
                                <p className={styles.launching}>Whether launching a startup or elevating an established brand, your target is clear.</p>
                                <p className={styles.just}>USER ADOPTION, TECHNICAL BRILLIANCE & MARKET DOMINANCE.</p>
                                <p className={styles.potential}>The key to unlocking these? An app that's not just good, but groundbreaking.</p>
                                <p className={styles.need}>Pause for a Moment...</p>
                                <p className={styles.turn}>What's Holding Back Your App's Potential?</p>


                                {isSliderActive ?
                                    <Slider {...awardslogo}>
                                        <Image src={layout1} className='img-fluid mb-5' alt='BitsWits' />
                                        <Image src={layout2} className='img-fluid mb-5' alt='BitsWits' />
                                        <Image src={layout3} className='img-fluid mb-5' alt='BitsWits' />
                                        <Image src={layout4} className='img-fluid mb-5' alt='BitsWits' />
                                        <Image src={layout5} className='img-fluid mb-5' alt='BitsWits' />

                                    </Slider>

                                    :
                                    <div>
                                        <Image src={icon20} className='img-fluid mb-5' alt='BitsWits' />
                                    </div>
                                }




                                <p className={styles.journey}>Sound familiar? Then, you're exactly where you need to be!</p>
                                <p className={styles.exactly}>Our Mobile App Development Solutions is at the forefront of technological innovation, renowned for:</p>
                                <p className={styles.solutions}>CUSTOMIZED APP STRATEGIES, CUTTING-EDGE TECHNOLOGIES, & UNRIVALED USER JOURNEYS.</p>
                                <p className={styles.whether}>The time to act is now. Embark on your journey to turn your app into a market sensation with us, where every challenge is an opportunity for greatness.</p>
                                <p className={styles.journey}>Step into the Limelight: Let’s Build Apps That Set Trends</p>
                                <h3 className={styles.build}>We Get It and We've Got Solutions</h3>
                            </div>
                            <div>
                                <a className={styles.expert} href='javascript:$zopim.livechat.window.show();'>Talk To An Expert</a>
                            </div>

                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Innovate