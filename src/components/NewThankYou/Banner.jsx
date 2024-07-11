"use client"
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// styles
import styles from "@/styles/NewThankyou/NewThankyou.module.css"
// Images
import BannerIcon from "media/new-thankyou/banner-icon.svg"
import Slide1 from "media/new-thankyou/slide-1.svg"
import Slide2 from "media/new-thankyou/slide-2.svg"
import Slide3 from "media/new-thankyou/slide-3.svg"
import Slide4 from "media/new-thankyou/slide-4.svg"
import Slide5 from "media/new-thankyou/slide-5.svg"
import Slide6 from "media/new-thankyou/slide-6.svg"
import Slide7 from "media/new-thankyou/slide-7.svg"
import Slide8 from "media/new-thankyou/slide-8.svg"
import Slide9 from "media/new-thankyou/slide-9.svg"
import Slide10 from "media/new-thankyou/slide-10.svg"
import Slide11 from "media/new-thankyou/slide-11.svg"
import Slide12 from "media/new-thankyou/slide-12.svg"
import Slide13 from "media/new-thankyou/slide-13.svg"
import Slide14 from "media/new-thankyou/slide-14.svg"
import Slide15 from "media/new-thankyou/slide-15.svg"

const Banner = () => {
    var bannerSlider = {
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 15000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    speed: 20000,
                }
            },
        ]
    };
    return (
        <section className={styles.ThankYouSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center mb-5">
                            <div className="icon">
                                <Image src={BannerIcon} className='img-fluid mb-4' />
                            </div>
                            <h1 className='manrope font-bold mb-3'>Thanks For Getting In Touch!</h1>
                            <p className='font16 fw500 manrope mb-4 mb-md-5'>Your online query has been recorded and forwarded to one of our account directors. Hang in <br className='d-lg-block d-none' /> there because, within a matter of 24 hours, we will reach out to you!</p>
                            <div className={styles.btn}>
                                <Link href="javascript:;">
                                    Go Back Home
                                </Link>
                            </div>
                        </div>
                        <Slider {...bannerSlider} className='thankyouSlider'>
                            <div>
                                <Image src={Slide1} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide2} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide3} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide4} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide5} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide6} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide7} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide8} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide9} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide10} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide11} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide12} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide13} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide14} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                            <div>
                                <Image src={Slide15} alt='BitswitsSlides' className='img-fluid mx-auto' />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
