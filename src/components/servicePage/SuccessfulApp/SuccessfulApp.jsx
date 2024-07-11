"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SuccessfulApp.module.css"
// Images 
import Success1 from "media/services/success-1.svg"
import Success2 from "media/services/success-2.svg"
import Success3 from "media/services/success-3.svg"
import Success4 from "media/services/success-4.svg"
import Success5 from "media/services/success-5.svg"

const SuccessfulApp = () => {
    const [progress, setProgress] = useState(2);
    const sliderRef = useRef(null);
    const successfulSlider = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 200,
        responsive: [
            {
                breakpoint: 1099,
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
        ],
        beforeChange: (current, next) => {
            const calc = ((next) / (sliderRef.current.props.children.length - 1)) * 100;
            setProgress(calc);
        }
    };

    return (
        <section className={styles.successfulSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center text-black manrope font-bold mb-3'>Take A Glimpse At Our Successful App Projects</h2>
                            <p className='font16 text-black font-medium text-center manrope mb-5 pb-md-2'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. <br className='d-lg-block d-none' /> We bring your iOS app ideas to life by using our comprehensive</p>
                        </div>
                    </Col>
                </Row>
                <div className="div">
                    <Slider {...successfulSlider} ref={sliderRef} className={`${styles.successfulSlider} successfulSlider`}>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success1} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.titleDesc}>
                                        <h3 className='font-bold manrope'>The Practice Pen App</h3>
                                        <div className={styles.hoverTxt}>
                                            <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                        </div>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>01/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success2} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Fitnow App</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>02/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success3} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Music App</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>03/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success4} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Soul Scribe</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>04/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success5} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Crave Cuisine</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>05/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success1} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.titleDesc}>
                                        <h3 className='font-bold manrope'>The Practice Pen App</h3>
                                        <div className={styles.hoverTxt}>
                                            <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                        </div>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>01/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success2} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Fitnow App</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>02/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success3} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Music App</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>03/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success4} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Soul Scribe</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>04/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-1 px-md-3'>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <div className={styles.imageOne}>
                                        <Image src={Success5} alt='Bitswits' className='img-fluid' />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className='font-bold manrope'>Crave Cuisine</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            View Full Casestudy
                                        </a>
                                    </div>
                                    <div className={styles.sliderNumber}>
                                        <p className='font-bold manrope'>05/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className={styles.progress} role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <div
                            className={styles.progressBar}
                            style={{ width: `${progress}%` }}
                            aria-valuenow={progress}
                        ></div>
                        {/* <span className={styles.slider__label}>{progress.toFixed(2)}% completed</span> */}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SuccessfulApp
