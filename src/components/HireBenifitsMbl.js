import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/HireBenifitsMbl.module.css";
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import secImg from "/public/images/hire-page/mobile/benifit-img.png"
import benif1 from '/public/images/hire-page/mobile/benifit-icon1.png'
import benif2 from '/public/images/hire-page/mobile/benifit-icon2.png'
import benif3 from '/public/images/hire-page/mobile/benifit-icon3.png'
import benif4 from '/public/images/hire-page/mobile/benifit-icon4.png'
import benif5 from '/public/images/hire-page/mobile/benifit-icon5.png'
import benif6 from '/public/images/hire-page/mobile/benifit-icon6.png'
import benif7 from '/public/images/hire-page/mobile/benifit-icon7.png'
import benif8 from '/public/images/hire-page/mobile/benifit-icon8.png'
import benif9 from '/public/images/hire-page/mobile/benifit-icon9.png'
import benif10 from '/public/images/hire-page/mobile/benifit-icon10.png'


const leftData = [
    {
        title: 'Quality assurance',
        imageSrc: benif1,
    },
    {
        title: 'In-app notifications',
        imageSrc: benif2,
    },
    {
        title: 'Flexible hiring model',
        imageSrc: benif3,
    },
    {
        title: 'High-end Secured Apps',
        imageSrc: benif4,
    },
    {
        title: 'Timely deliverables',
        imageSrc: benif5,
    },
];

const rightData = [
    {
        imageSrc: benif6,
        title: 'Enhanced user experience',
    },
    {
        imageSrc: benif7,
        title: 'Personalized content',
    },
    {
        imageSrc: benif8,
        title: 'Cost-effective hiring',
    },
    {
        imageSrc: benif9,
        title: '3x more returns',
    },
    {
        imageSrc: benif10,
        title: 'Competitive edge',
    },
];

const mblData = [
    {
        title: 'Quality assurance',
        imageSrc: benif1,
    },
    {
        title: 'In-app notifications',
        imageSrc: benif2,
    },
    {
        title: 'Flexible hiring model',
        imageSrc: benif3,
    },
    {
        title: 'High-end Secured Apps',
        imageSrc: benif4,
    },
    {
        title: 'Timely deliverables',
        imageSrc: benif5,
    },
    {
        imageSrc: benif6,
        title: 'Enhanced user experience',
    },
    {
        imageSrc: benif7,
        title: 'Personalized content',
    },
    {
        imageSrc: benif8,
        title: 'Cost-effective hiring',
    },
    {
        imageSrc: benif9,
        title: '3x more returns',
    },
    {
        imageSrc: benif10,
        title: 'Competitive edge',
    },
];


const HireBenifitsMbl = () => {

    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.benifitsMbl}>
                <Container>
                    <Row className='gy-3 align-items-center d-none d-lg-flex'>
                        <Col lg={12}>
                            <div>
                                <h2>Benefits</h2>
                                <p>To Hire Mobile Application Developers</p>
                                <div className={styles.btns}>
                                    <a className={`${styles.btn} ${styles.btn1}`} href="tel:8335006007">Book A Call</a>
                                    <a className={`${styles.btn} ${styles.btn2}`} href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.left}>
                                {leftData.map((benefit, index) => (
                                    <div className={styles.beniftIcon} key={index}>
                                        <h5>{benefit.title}</h5>
                                        <Image src={benefit.imageSrc} alt='BitsWits' className='img-fluid' />
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <Image quality={75} alt='BitsWits' src={secImg} className={styles.secImage} />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.right}>
                                {rightData.map((benefit, index) => (
                                    <div className={styles.beniftIcon} key={index}>
                                        <Image src={benefit.imageSrc} alt='BitsWits' className='img-fluid' />
                                        <h5>{benefit.title}</h5>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    {/* =========== Mobile =========== */}
                    <Row className='align-items-center d-block d-lg-none'>
                        <Col lg={12}>
                            <div>
                                <h2>Benefits</h2>
                                <p>To Hire Mobile Application Developers</p>
                                <div className={styles.btns}>
                                    <a className={`${styles.btn} ${styles.btn1}`} href="tel:8335006007">Book A Call</a>
                                    <a className={`${styles.btn} ${styles.btn2}`} href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.left}>
                                <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                                    {mblData.map((benefit, index) => (
                                        <div key={index}>
                                            <div className={styles.beniftIcon}>
                                                <h5>{benefit.title}</h5>
                                                <Image src={benefit.imageSrc} alt='BitsWits' className='img-fluid' />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <Image quality={75} alt='BitsWits' src={secImg} className={styles.secImage} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireBenifitsMbl
