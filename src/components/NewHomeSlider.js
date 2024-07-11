import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Newslider.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import team1 from '/public/newHomePageImages/clutch.png'


const NewHomeSlider = () => {

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
            <section className={styles.team}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className='f-60 font-bold white center'> <span className='grdiant'>Bit</span> of what our clients have <br></br> to say about <span className='grdiant'>BitsWits</span> </h2>
                            <div className='center mt-5'>
                                <Image className='img-fluid' alt='BitsWits' src={team1} />
                            </div>
                            <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>
                                <div className={styles.high}>
                                    <p className='mt-3 mb-3'>BitsWits was a lifesaver for our business. We needed to create an app that could be used on multiple platforms, but we didn’t have a lot of technical know-how or additional development resources. Their team made it easy for us and delivered exactly what we needed. They stayed on top of our project and kept us informed throughout the process. We wouldn't hesitate to recommend them for any of your app development needs!</p>
                                    <h3>Bryce Carlos</h3>
                                    <p className={styles.digi}>CEO / FOUNDER SOUL SOUND</p>
                                </div>

                                <div className={styles.high}>
                                    <p className='mt-3 mb-3'>We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.</p>
                                    <h3>Aden Ward</h3>
                                    <p className={styles.digi}>CO-FOUNDER PRO HEALTH</p>
                                </div>

                                <div className={styles.high}>
                                    <p className='mt-3 mb-3'>Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They are highly skilled and knowledgeable professionals who understand customer needs and deliver well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly recommend them to anyone looking for reliable and cost-effective Flutter solutions.</p>
                                    <h3>Winnie Brooks</h3>
                                    <p className={styles.digi}>FOUNDER AND CEO GLOW SPA</p>
                                </div>

                                <div className={styles.high}>
                                    <p className='mt-3 mb-3'> We're very satisfied with the results of our working relationship with BitsWits. We were able to create a high-quality mobile app that not only met our specifications but exceeded them in every way. The entire team was friendly and professional throughout the entire process, and we would definitely recommend their services to anyone looking for a reliable custom app development company.</p>
                                    <h3>Chavi Miles</h3>
                                    <p className={styles.digi}>CO-FOUNDER BLISS TRAVEL</p>
                                </div>

                                <div className={styles.high}>
                                    <p className='mt-3 mb-3'> BitsWits have done a great job making an attractive and eye-catching IOS application. I am grateful to the team for delivering this application perfectly on very short notice. Thanks a lot.</p>
                                    <h3>Andrew Drake</h3>
                                    <p className={styles.digi}>FOUNDER / CEO MARK PLACE</p>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewHomeSlider