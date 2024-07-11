import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/DubaiClients.module.css"
// Images
import ClientOne from "/public/newDubaiPagev1/client1.png"
import ClientTwo from "/public/newDubaiPagev1/client2.png"
import ClientThree from "/public/newDubaiPagev1/client3.png"
import Star from "/public/newDubaiPagev1/star.png"
import ClientIcon from "/public/newdubai/client-icon.png"

const DubaiClients = ({ content }) => {
    const { title, desc } = content
    var dubaiClients = {
        infinite: false,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles.clientSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>{title}</h2>
                                <p className='fontsfregular mb-5 mb-lg-4 pb-lg-5'>{desc}</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={styles.trustPilot}>
                                <div className='image'>
                                    <Image src={ClientOne} alt='Bitswits' loading='lazy' sizes="100vw" width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 20+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={`${styles.trustPilot} mt-5 mt-md-0`}>
                                <div className='image'>
                                    <Image src={ClientTwo} alt='Bitswits' loading='lazy' sizes="100vw" width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 40+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={4}>
                            <div className={`${styles.trustPilot} mt-5 mt-lg-0`}>
                                <div className='image'>
                                    <Image src={ClientThree} alt='Bitswits' loading='lazy' sizes="100vw" width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>5.0 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 66+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Slider {...dubaiClients} className='dubaiClientSlider pt-5 mt-3'>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Emily Chen</p>
                                                <span>Chief Technology Officer</span>
                                                <span>HealthTech Solutions</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                BitsWits transformed our app vision into reality seamlessly. Their expertise and professionalism exceeded our expectations. Highly recommend their services for anyone seeking top-notch app development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>John Smith</p>
                                                <span>CEO</span>
                                                <span>Tech Innovations Inc.</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Working with BitsWits was a game-changer for our business. Their commitment to excellence and innovative approach ensured a successful app launch. We couldn't be happier with the results!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Sarah Johnson</p>
                                                <span>Marketing Director</span>
                                                <span>E-Commerce Solutions Co.</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                BitsWits truly understands their clients' needs. Their tailored approach and attention to detail resulted in an app that surpassed our expectations. Highly recommend their services for anyone looking for top-tier app development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Emily Chen</p>
                                                <span>Chief Technology Officer</span>
                                                <span>HealthTech Solutions</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                BitsWits transformed our app vision into reality seamlessly. Their expertise and professionalism exceeded our expectations. Highly recommend their services for anyone seeking top-notch app development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>John Smith</p>
                                                <span>CEO</span>
                                                <span>Tech Innovations Inc.</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Working with BitsWits was a game-changer for our business. Their commitment to excellence and innovative approach ensured a successful app launch. We couldn't be happier with the results!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`card ${styles.card}`}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name d-flex flex-column'>
                                                <p>Sarah Johnson</p>
                                                <span>Marketing Director</span>
                                                <span>E-Commerce Solutions Co.</span>
                                            </div>
                                            <div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <Image src={ClientIcon} alt='Bitswits' loading='lazy' sizes="100vw" className={`icon ${styles.icon}`} width={19} height={22} />
                                                    <p className='mb-0'>4.9. / 5.0</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                    <Image src={Star} alt='Bitswits' loading='lazy' sizes="100vw" width={18} height={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                BitsWits truly understands their clients' needs. Their tailored approach and attention to detail resulted in an app that surpassed our expectations. Highly recommend their services for anyone looking for top-tier app development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiClients
