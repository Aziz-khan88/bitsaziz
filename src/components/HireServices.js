import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/HireServices.module.css";
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import serv1 from "/public/images/hire-page/mobile/ios.png"
import serv2 from "/public/images/hire-page/mobile/android.png"
import serv3 from "/public/images/hire-page/mobile/native.png"
import serv4 from "/public/images/hire-page/mobile/hybrid.png"
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"


const serviceData = [
    {
        imageSrc: serv1,
        title: 'Hire iOS app developer',
        description: 'Trust our top iOS mobile app developers to create astonishing applications that work flawlessly on iOS devices. Leverage Swift and Object-C to create custom iOS apps to enrich user experience.',
    },
    {
        imageSrc: serv2,
        title: 'Hire Android App Developer',
        description: 'Hire our online Android app developers for cutting-edge service in the form of excellent Android applications. Our experts design feature-rich and robust applications saving you time and money.',
    },
    {
        imageSrc: serv3,
        title: 'Hire Native App Developer',
        description: 'Trust our top iOS mobile app developers to create astonishing applications that work flawlessly on iOS devices. Leverage Swift and Object-C to create custom iOS apps to enrich user experience.',
    },
    {
        imageSrc: serv4,
        title: 'Hire Hybrid App Developer',
        description: 'Trust our top iOS mobile app developers to create astonishing applications that work flawlessly on iOS devices. Leverage Swift and Object-C to create custom iOS apps to enrich user experience.',
    },
];


const HireServices = () => {

    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                },
            }
        ],
    };

    return (
        <>
            <section className={styles.service}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.servHead}>
                                <h2 className='text-white newchoose font-bold'>Hire <span>App Developers</span> for <br /> Cutting Edge Services</h2>
                                <p className={`${styles.wid} f-20 text-white`}>Build impactful mobile applications by hiring  app developers from The BitsWits to achieve new horizons of success in the business market. We provide end-to-end mobile app solutions from ideation to development and app maintenance. Our services will not only help you give your customers a brilliant user experience but also attract new ones. Dedicated mobile app developers at The BitsWits outshine the industry in the below-mentioned services:</p>
                            </div>
                            <div className={styles.sec_btn}>
                                <a href='tel:8335006007' className={`${styles.btn_txt} font-extrabold`}>
                                    Get to know us
                                    <span>
                                        <Image quality={75} alt='BitsWits' src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.servRow} d-none d-lg-flex`}>
                        {serviceData.map((service, index) => (
                            <Col lg={6} key={index}>
                                <div className={styles.servicBox}>
                                    <Image quality={75} alt='BitsWits' src={service.imageSrc} className={styles.secImage} />
                                    <h5>{service.title}</h5>
                                    <p>{service.description}</p>
                                    <div className={styles.btns}>
                                        <a className={`${styles.btn} ${styles.btn2}`} href="javascript:$zopim.livechat.window.show();">
                                            Hire Now
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {/* ========= Mobile ========== */}
                    <Slider {...mblSlider} className={`mblSlider mblSlider2 ${styles.mblSlider}`}>
                        {serviceData.map((service, index) => (
                            <div key={index}>
                                <Row className={`${styles.servRow} d-block d-lg-none`}>
                                    <Col lg={6}>
                                        <div className={styles.servicBox}>
                                            <Image quality={75} alt='BitsWits' src={service.imageSrc} className={styles.secImage} />
                                            <h5>{service.title}</h5>
                                            <p>{service.description}</p>
                                            <div className={styles.btns}>
                                                <a className={`${styles.btn} ${styles.btn2}`} href="javascript:$zopim.livechat.window.show();">
                                                    Hire Now
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default HireServices
