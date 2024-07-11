import React from 'react'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "@/styles/video-explainer/Client.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images 
import Testi1 from "media/videoexplainer/testi-img1.png"
import Testi2 from "media/videoexplainer/testi-img2.png"
import Testi3 from "media/videoexplainer/testi-img3.png"
import clientImage from "media/videoexplainer/ftr-cl-logo-img.png"
const Client = () => {
    // Slider Setting
    const clientSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className={styles.clientSec}>
                <div className='container'>
                    <Row>
                        <Col>
                            <div className={styles.txt}>
                                <h2>How Our Clients Are Thanking Us</h2>
                                <p>Our experts leave no stone unturned in providing the desired outcome of our clients</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-lg-block d-none'>
                        <Row>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <span className={styles.quoteLeft}>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>From start to finish, the process was incredibly easy. It was a pleasure to work with the BitsWits squad. </p>

                                    <div className={styles.cardBottom}>
                                        <div className="img">
                                            <Image src={Testi1} alt='testi1' className='img-fluid' />
                                        </div>
                                        <div className={styles.content}>
                                            <h4>Jennifer Aswat</h4>
                                            <div className={styles.reviews}>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <span className={styles.quoteLeft}>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>
                                        The story of the business relationship started with a 30 second video in 2019, now Explainer Videos LLC team has produced 27 videos for our multiple brands for us. Glad to get a reliable company in the US
                                    </p>

                                    <div className={styles.cardBottom}>
                                        <div className="img">
                                            <Image src={Testi2} alt='testi1' className='img-fluid' />
                                        </div>
                                        <div className={styles.content}>
                                            <h4>David Manks</h4>
                                            <div className={styles.reviews}>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <span className={styles.quoteLeft}>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>
                                        The whole team of Explainer Videos LLC was extremely responsive and helpful. The videos were produced on time. The creatives were excellent and I personally liked the concept. Highly recommended.
                                    </p>

                                    <div className={styles.cardBottom}>
                                        <div className="img">
                                            <Image src={Testi3} alt='testi1' className='img-fluid' />
                                        </div>
                                        <div className={styles.content}>
                                            <h4>Jason Gawkwad</h4>
                                            <div className={styles.reviews}>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-lg-none d-block'>
                        <Slider {...clientSlider}>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <span className={styles.quoteLeft}>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>From start to finish, the process was incredibly easy. It was a pleasure to work with the BitsWits squad. </p>

                                    <div className={styles.cardBottom}>
                                        <div className="img">
                                            <Image src={Testi1} alt='testi1' className='img-fluid' />
                                        </div>
                                        <div className={styles.content}>
                                            <h4>Jennifer Aswat</h4>
                                            <div className={styles.reviews}>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <span className={styles.quoteLeft}>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>
                                        The story of the business relationship started with a 30 second video in 2019, now Explainer Videos LLC team has produced 27 videos for our multiple brands for us. Glad to get a reliable company in the US
                                    </p>

                                    <div className={styles.cardBottom}>
                                        <div className="img">
                                            <Image src={Testi2} alt='testi1' className='img-fluid' />
                                        </div>
                                        <div className={styles.content}>
                                            <h4>David Manks</h4>
                                            <div className={styles.reviews}>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <span className={styles.quoteLeft}>
                                        <FaQuoteLeft />
                                    </span>
                                    <p>
                                        The whole team of Explainer Videos LLC was extremely responsive and helpful. The videos were produced on time. The creatives were excellent and I personally liked the concept. Highly recommended.
                                    </p>

                                    <div className={styles.cardBottom}>
                                        <div className="img">
                                            <Image src={Testi3} alt='testi1' className='img-fluid' />
                                        </div>
                                        <div className={styles.content}>
                                            <h4>Jason Gawkwad</h4>
                                            <div className={styles.reviews}>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            {/* Client Small Section */}
            <section className={styles.smallClient}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2 className='text-black mb-3 mb-lg-5'>Our Clients</h2>
                            </div>
                            <Image src={clientImage} alt='Bitswits' className='d-block mx-auto' />
                        </Col>
                    </Row>
                </div>
            </section>
            {/* Client Small Section */}
        </>
    )
}

export default Client
