import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/NewDubiaAwards.module.css"
// Images     
import Slider1 from "/public/newDubaiPagev1/award1.png"
import Slider2 from "/public/newDubaiPagev1/award2.png"
import Slider3 from "/public/newDubaiPagev1/award3.png"
import Slider4 from "/public/newDubaiPagev1/award4.png"
import Slider5 from "/public/newDubaiPagev1/award5.png"
import Slider6 from "/public/newDubaiPagev1/award6.png"
import Slider7 from "/public/newDubaiPagev1/award7.png"
import Slider8 from "/public/newDubaiPagev1/award8.png"
import Slider9 from "/public/newDubaiPagev1/award9.png"
import Slider10 from "/public/newDubaiPagev1/award10.png"
import Slider11 from "/public/newDubaiPagev1/award11.png"
import Slider12 from "/public/newDubaiPagev1/award12.svg"
import Slider13 from "/public/newDubaiPagev1/award13.svg"
import ClientTwo from "/public/newDubaiPagev1/client2.png"
import Star from "/public/newDubaiPagev1/star.png"

const NewDubaiAwards = ({ content }) => {
    const { title, desc } = content;

    var awardSlider = {
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 14000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
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
            <section className={styles.awardSec}>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <div>
                                <div className={styles.txt}>
                                    <h2 className={styles.awardsHeading}>
                                        {title}
                                    </h2>
                                    <p className='fontsfregular'>
                                        {desc}
                                    </p>
                                </div>
                                <div className={`${styles.trustPilot} mt-5 mt-md-0`}>
                                    <div className='image'>
                                        <Image sizes="100vw" loading='lazy' src={ClientTwo} alt='Bitswits' width={101} height={28} />
                                    </div>
                                    <div>
                                        <div className='txt d-flex align-items-center'>
                                            <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                            <div className='d-md-none d-lg-flex align-items-center'>
                                                <Image sizes="100vw" loading='lazy' src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image sizes="100vw" loading='lazy' src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image sizes="100vw" loading='lazy' src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image sizes="100vw" loading='lazy' src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image sizes="100vw" loading='lazy' src={Star} alt='Bitswits' width={13} height={13} />
                                            </div>
                                        </div>
                                        <p className={`${styles.clientsPara} fontsfregular`}>based on 40+ clients</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='mt-4 mt-md-0'>
                                <Slider {...awardSlider}>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider2} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Dot Comm</h6>
                                                <p className='mb-0 fontsfregular'>Excellence in Web Creativity &  Digital Communication</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider3} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>INC. 5000</h6>
                                                <p className='mb-0 fontsfregular'>America's Fastest Growing Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider1} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Gold Award Winner <br className="d-lg-block d-none" /> 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider5} alt="Bitswits" width={120} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Silver Awards Winner
                                                    <br className="d-lg-block d-none" /> 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider6} alt="Bitswits" width={123} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Clutch</h6>
                                                <p className='mb-0 fontsfregular'>Top 1000 <br className="d-lg-block d-none" />
                                                    Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider7} alt="Bitswits" width={90} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Right firms</h6>
                                                <p className='mb-0 fontsfregular'>Top Mobile App Development Company 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider12} alt="Bitswits" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>The Manifest</h6>
                                                <p className='mb-0 fontsfregular'>Most Reviewed App Development Company</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider13} alt="Bitswits" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>The Manifest</h6>
                                                <p className='mb-0 fontsfregular'>Most Reviewed App Development Company</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider8} alt="Bitswits" width={102} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Developers</h6>
                                                <p className='mb-0 fontsfregular '>Top Entertainment App
                                                    Developers  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider9} alt="Bitswits" width={102} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Expertise</h6>
                                                <p className='mb-0 fontsfregular'>Best Mobile App <br className="d-lg-block d-none" />
                                                    Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider10} alt="Bitswits" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Rated</h6>
                                                <p className='mb-0 fontsfregular'>Top App Development Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image sizes="100vw" loading='lazy' src={Slider1} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Gold Award Winner <br className="d-lg-block d-none" /> 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default NewDubaiAwards