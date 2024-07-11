import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Nextproject2dubai.module.css'
//
import icon1 from '/public/dubailp/awards/1.png'
import icon2 from '/public/dubailp/awards/2.png'
import icon3 from '/public/dubailp/awards/3.png'
import icon4 from '/public/dubailp/awards/4.png'
import icon5 from '/public/dubailp/awards/5.png'
import icon6 from '/public/dubailp/awards/6.png'

import number from '/public/dubailp/number.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Nextproject2dubai = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
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

            <section className={styles.nextproject}>
                <Container>
                    <Row className={`gy-5 ${styles.quit}`}>
                        <Col lg={8}>
                            <h2 className='fontf font-bold white font55'>Awards And Recognitions</h2>
                            <p className='font16 font-normal white'>BitsWits, renowned for its high-quality Android applications, has been awarded numerous times, demonstrating its dedication to delivering exceptional solutions that consistently surpass industry standards. These accolades symbolize their commitment to delivering top-notch solutions that consistently meet and exceed industry standards.</p>
                            <Link className={styles.project} href="#newtown">Check Reviews</Link>
                        </Col>
                        <Col lg={3}>
                            <Image className={`img-fluid ${styles.newfing}`} src={number} />
                        </Col>
                    </Row>
                    <div className={styles.nextalign}>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon1} className="img-fluid" /> </div>
                            <h3>Horizon Award</h3>
                            <p>Gold Awards Winner <br></br>
                                2020</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon2} className="img-fluid" /> </div>
                            <h3>Dot Comm</h3>
                            <p>Excellence in Web Creativity & <br></br> Digital Communication</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon3} className="img-fluid" /> </div>
                            <h3>INC. 5000</h3>
                            <p>America's Fastest Growing <br></br> Companies</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon4} className="img-fluid" /> </div>
                            <h3>Rank Watch</h3>
                            <p>Top Web Development <br></br>
                                Agencies 2023</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon5} className="img-fluid" /> </div>
                            <h3>Horizon Award</h3>
                            <p>Silver Awards Winner <br></br>
                                2020</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon6} className="img-fluid" /> </div>
                            <h3>Clutch</h3>
                            <p>Top 1000 <br></br>
                                Companies</p>
                        </div>



                    </div>

                    <Slider {...awardslogo} className={` ${styles.nextalign1} proclass `}>

                        <div className={styles.mobile}>
                            <div className={styles.newfol}>       <Image alt="BitsWits" src={icon1} className="img-fluid" /> </div>
                            <h3>Horizon Award</h3>
                            <p>Gold Awards Winner <br></br>
                                2020</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon2} className="img-fluid" /> </div>
                            <h3>Dot Comm</h3>
                            <p>Excellence in Web Creativity & <br></br> Digital Communication</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon3} className="img-fluid" /> </div>
                            <h3>INC. 5000</h3>
                            <p>America's Fastest Growing <br></br> Companies</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon4} className="img-fluid" /> </div>
                            <h3>Rank Watch</h3>
                            <p>Top Web Development <br></br>
                                Agencies 2023</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon5} className="img-fluid" /> </div>
                            <h3>Horizon Award</h3>
                            <p>Silver Awards Winner <br></br>
                                2020</p>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.newfol}>   <Image alt="BitsWits" src={icon6} className="img-fluid" /> </div>
                            <h3>Clutch</h3>
                            <p>Top 1000 <br></br>
                                Companies</p>
                        </div>





                    </Slider>


                </Container>

            </section>

        </>
    )
}

export default Nextproject2dubai