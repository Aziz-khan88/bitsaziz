import React from 'react'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/DigitalBranding.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// ==== Images
import Icon1 from "media/videoexplainer/why-ex-icon1.png"
import Icon2 from "media/videoexplainer/why-ex-icon2.png"
import Icon3 from "media/videoexplainer/why-ex-icon3.png"

const DigitalBranding = () => {
    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <>
            <section className={styles.DigitalBranding}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>
                                    Why Explainer Videos Are Key to Digital Branding
                                </h2>
                                <p>
                                    Simple words or symbols do not attract as many people as video animation does. If you're about to introduce a product or service, animated videos are the perfect way to make a shout out on the digital landscapes.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-lg-block d-none'>
                        <Row>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Icon1} alt='Icon 1' className='mx-auto d-block' />
                                    <h3>Brand Video</h3>
                                    <p>We craft animated videos to improve your brand’s presence and it requires a differentapproach to adopt.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Icon2} alt='Icon 1' className='mx-auto d-block' />
                                    <h3>2D, 3D Animated Videos</h3>
                                    <p>We make compelling and highly engaging 2D and 3D videos in a variety of styles and at various levels of difficulty.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Icon3} alt='Icon 1' className='mx-auto d-block' />
                                    <h3>Commercial Videos</h3>
                                    <p>We produce exceptional commercial videos that will keep your clients hooked and boost your brand engagement.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-lg-none d-block'>
                        <Slider {...testiSlider} className="explainSlider">
                            <div>
                                <div className={styles.card}>
                                    <Image src={Icon1} alt='Icon 1' className='mx-auto d-block' />
                                    <h3>Brand Video</h3>
                                    <p className='mb-4'>We craft animated videos to improve your brand’s presence and it requires a differentapproach to adopt.</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.card}>
                                    <Image src={Icon2} alt='Icon 1' className='mx-auto d-block' />
                                    <h3>2D, 3D Animated Videos</h3>
                                    <p className='mb-4'>We make compelling and highly engaging 2D and 3D videos in a variety of styles and at various levels of difficulty.</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.card}>
                                    <Image src={Icon3} alt='Icon 1' className='mx-auto d-block' />
                                    <h3>Commercial Videos</h3>
                                    <p className='mb-4'>We produce exceptional commercial videos that will keep your clients hooked and boost your brand engagement.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DigitalBranding
