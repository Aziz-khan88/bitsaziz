import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Nextproject2.module.css'
//
import icon1 from '/public/images/nextproject/icon1.png'
import icon2 from '/public/images/nextproject/icon2.png'
import icon3 from '/public/images/nextproject/icon3.png'
import icon4 from '/public/images/nextproject/icon4.png'
import icon5 from '/public/images/nextproject/icon5.png'
import icon6 from '/public/images/nextproject/icon6.png'
import icon7 from '/public/images/nextproject/icon7.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Nextproject = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop:true,
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
                    <Row>
                        <Col>
                            <h2 className='fontf font-bold white font65'>A Glimpse Of What’s  <br></br>
                            About To Come </h2>
                            <h2 className='fontf font-bold font75 grdiant'>At BitsWits!</h2>
                            <a className={styles.project} href="tel:(833) 500-6007">(833) 500-6007</a>
                        </Col>
                    </Row>
                    <div className={styles.nextalign}>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon1} className="img-fluid" />
                            <h3>Enterprise</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon2} className="img-fluid" />
                            <h3>MObile App Daily</h3>
                            <p>Top Mobile Application Development Company</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon3} className="img-fluid" />
                            <h3>App Futura</h3>
                            <p>Top Application Development Company</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon4} className="img-fluid" />
                            <h3>Clutch</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon5} className="img-fluid" />
                            <h3>Clutch</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon6} className="img-fluid" />
                            <h3>Good Firms</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon7} className="img-fluid" />
                            <h3>INC.5000</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                      

                    </div>

                    <Slider {...awardslogo} className={` ${styles.nextalign1} proclass `}>
                    
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon1} className="img-fluid" />
                            <h3>Enterprise</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon2} className="img-fluid" />
                            <h3>MObile App Daily</h3>
                            <p>Top Mobile Application Development Company</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon3} className="img-fluid" />
                            <h3>App Futura</h3>
                            <p>Top Application Development Company</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon4} className="img-fluid" />
                            <h3>Clutch</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon5} className="img-fluid" />
                            <h3>Clutch</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon6} className="img-fluid" />
                            <h3>Good Firms</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image  alt="BitsWits"      src={icon7} className="img-fluid" />
                            <h3>INC.5000</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                      

               

                    </Slider>


                </Container>

            </section>

        </>
    )
}

export default Nextproject