import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/EcommerceService.module.css'
////
import service1 from '/public/ecommerce/service1.svg'
import service2 from '/public/ecommerce/service2.svg'
import service3 from '/public/ecommerce/service3.svg'
import service4 from '/public/ecommerce/service4.svg'
import service5 from '/public/ecommerce/service5.svg'
import service6 from '/public/ecommerce/service6.svg'
import service7 from '/public/ecommerce/service7.svg'
import service8 from '/public/ecommerce/service8.svg'

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const EcommerceService = () => {

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
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      
    };


    return (
        <>
            <section className={styles.Services}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className="font20 text-white font-bold mb-0">Our</h4>
                            <h2 className="font220 text-white font-bold mb-3 mb-md-0">
                                <span className='grdiant'>Ecommerce App </span>
                                Development Service</h2>
                            <p className='text-white font15'>BitsWits is trusted for shopping app design, development, and <br /> integration on ecommerce platforms. Our team transforms your <br /> visionary designs into flawless, standout apps. We go beyond the <br /> ordinary, adding various functionalities that make your app stand out <br /> among competition and provide an enjoyable user experience to your <br /> customers.</p>
                            <p className='text-white font15'>Ready to dominate the app store with our eCommerce app<br /> development? Let's Connect and Make It Happen!</p>
                            <div className={`d-flex align-items-center pt-2 gap-2 pb-4 ${styles.btns}`}>
                                <a href="tel:8335006007" className="px-4">
                                    Call Now: +1 833 500 6007
                                </a>
                                <a href="javascript:$zopim.livechat.window.show();" className="px-4">
                                    Start Live Chat
                                </a>
                            </div>
                        </Col>
                        <Col xl={7} className='gap-y-2 mt-4 mt-lg-0'>
                            <Row className={styles.lists}>
                                {isSliderActive ?
                                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`} >
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service1} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Personalized <br />
                                                    User Profiles</p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service2} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Preferred
                                                    <br />
                                                    Products Feature</p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service3} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Login With
                                                    <br />
                                                    Social-Media</p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service4} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Efficient
                                                    <br />
                                                    Product Organization </p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service5} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Multiple
                                                    <br />
                                                    Payment Methods</p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service6} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Digital
                                                    <br />
                                                    Wallet Integration</p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service7} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Post
                                                    <br />
                                                    Purchase Support</p>
                                            </div>
                                        
                                      
                                            <div className={`${styles.box} center d-block m-auto`}>
                                                <Image src={service8} alt='service1' className='d-block m-auto w-75 mb-3' />
                                                <p className='font14 font-medium pt-1'>Shopping
                                                    <br />
                                                    History</p>
                                            </div>
                                        
                                    </Slider>
                                    :
                                    <>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service1} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Personalized <br />
                                                    User Profiles</p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service2} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Preferred
                                                    <br />
                                                    Products Feature</p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service3} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Login With
                                                    <br />
                                                    Social-Media</p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service4} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Efficient
                                                    <br />
                                                    Product Organization </p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service5} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Multiple
                                                    <br />
                                                    Payment Methods</p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service6} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Digital
                                                    <br />
                                                    Wallet Integration</p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service7} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Post
                                                    <br />
                                                    Purchase Support</p>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className={styles.box}>
                                                <Image src={service8} alt='service1' />
                                                <p className='font14 font-medium pt-1'>Shopping
                                                    <br />
                                                    History</p>
                                            </div>
                                        </Col>
                                    </>
                                }

                            </Row>
                        </Col>
                        <Col xl={5}>
                            <div className={styles.circleBox}>
                                <h4 className='grdiant font70 font-bold text-center'>
                                    1200+
                                </h4>
                                <p className='text-white font15 text-center'>BitsWits, the best eCommerce app development<br /> company in the US has helped more than twelve<br /> hundred ecommerce businesses to double their<br /> revenue with our web and app design, development,<br /> and integration services.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceService