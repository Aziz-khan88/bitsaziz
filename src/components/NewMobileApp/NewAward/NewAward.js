
import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/NewMobileApp/NewAwards.module.css"
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
import Link from 'next/link';

const NewAward = ({ content, contentTwo, onAnchorClick }) => {
    const { title, desc } = content;
    var awardSlider = {
        arrows: false,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 14000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '20px',
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
                    speed: 20000,
                }
            },
        ]
    };
    return (
        <>
            <section className={styles.awardSec}>
                <Container className={styles.content}>
                    <Row className='align-items-center'>
                        <Col md={5}>
                            <div>
                                <div className={styles.txt}>
                                    <h2 className={styles.awardsHeading}>
                                        {title}
                                    </h2>
                                    <p className='fontsfregular'>
                                        {desc}
                                    </p>
                                    <div className={`${styles.btn} mt-5 mt-md-0`}>
                                        <a href="javascript:;" className='blackPulse' onClick={onAnchorClick}>
                                            Free Consultation
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className='mt-4 mt-md-0'>
                                <Slider {...awardSlider} className={styles.awardSlider}>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider2} alt="Bitswits" className='mx-auto' />
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
                                                <Image src={Slider3} alt="Bitswits" className='mx-auto' />
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
                                                <Image src={Slider1} alt="Bitswits" className='mx-auto' />
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
                                                <Image src={Slider5} alt="Bitswits" width={120} height={100} className='mx-auto' />
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
                                                <Image src={Slider6} alt="Bitswits" width={123} height={100} className='mx-auto' />
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
                                                <Image src={Slider7} alt="Bitswits" width={90} height={100} className='mx-auto' />
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
                                                <Image src={Slider12} alt="Bitswits" width={100} height={100} className='mx-auto' />
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
                                                <Image src={Slider13} alt="Bitswits" width={100} height={100} className='mx-auto' />
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
                                                <Image src={Slider8} alt="Bitswits" width={102} height={100} className='mx-auto' />
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
                                                <Image src={Slider9} alt="Bitswits" width={102} height={100} className='mx-auto' />
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
                                                <Image src={Slider10} alt="Bitswits" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Rated</h6>
                                                <p className='mb-0 fontsfregular'>Top App Development <br className="d-lg-block d-none" /> Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider1} alt="Bitswits" className='mx-auto' />
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
                                                <Image src={Slider2} alt="Bitswits" className='mx-auto' />
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
                                                <Image src={Slider3} alt="Bitswits" width={100} height={100} className='mx-auto' />
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
                                                <Image src={Slider5} alt="Bitswits" width={120} height={100} className='mx-auto' />
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
                                                <Image src={Slider6} alt="Bitswits" width={123} height={100} className='mx-auto' />
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
                                                <Image src={Slider7} alt="Bitswits" width={90} height={100} className='mx-auto' />
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
                                                <Image src={Slider8} alt="Bitswits" width={102} height={100} className='mx-auto' />
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
                                                <Image src={Slider9} alt="Bitswits" width={102} height={100} className='mx-auto' />
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
                                                <Image src={Slider10} alt="Bitswits" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Rated</h6>
                                                <p className='mb-0 fontsfregular'>Top App Development Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </section >
        </>
    )
}

export default NewAward