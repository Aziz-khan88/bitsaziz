import React from 'react' 
import Image from 'next/image';
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiDevelopmentUAE.module.css"
// Images
import CardTitle from "/public/newdubai/cardOneTitle.png"
import Share from "/public/newdubai/share.png"
import USToday from "/public/newdubai/ustoday.png"
import WireCutter from "/public/newdubai/wirecutter.png"
import Forbes from "/public/newdubai/forbes.png"
import NewYork from "/public/newdubai/newyork.png"

const DubaiDevelopmentUAE = ({content}) => {
    const {title, desc} = content
    var dubaiDevelopmetOne = {
        arrows: false,
        dots: false,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        centerMode: true,
        // variableWidth: true,
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    var dubaiDevelopmetTwo = {
        arrows: false,
        dots: false,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        centerMode: true,
        // variableWidth: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    var dubaiDevelopmetThree = {
        arrows: false,
        dots: false,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        centerMode: false,
        // variableWidth: true,
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.developmentSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <h2>
                               {title}
                            </h2>
                            {/* <p className='fontsfregular mb-4'>
                                {desc}
                            </p>  */}
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col lg={12}>
                        <Slider {...dubaiDevelopmetOne} className={`pt-4 pt-lg-5 ${styles.dubaiSlider}`}>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardOne}>
                                    <h5>"HAPPIFYIS PERHAPS THE MOST SOPHISTICATED POSITIVE VIBES APP AVAILABLE NOW."</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <Image src={CardTitle} width={221} height={50} className={styles.rotateImg} alt='Bitswits' />
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardTwo}>
                                    <h5>RAMEET CHAWLA, EVEN SUGGESTED THAT COINBASE MAY INCREASE THE STRENGTH OFTHE ORIGINAL BITCOIN.</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <p className='text-center mb-0'>BUSSINESS <br />INSIDER</p>
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardThree}>
                                    <h5>Ranked #1 For “Entertainment App Development Companies In Europe”</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <p className='mb-0'>Top Tech Biz</p>
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <Slider {...dubaiDevelopmetTwo} className={`pt-4 pt-xl-5 ${styles.dubaiSlider}`}>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardFour}>
                                    <h5>Named Comparably’s Best Ceos For <br /> Women</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <Image src={USToday} width={90} height={30} className={styles.rotateImg} alt='Bitswits' />
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardFive}>
                                    <h5>Featured On Wirecutter’s “Guide To The Iphone 8, 8 Plus, 7, 7 Plus, 6S, 6S Plus, And SE”</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <Image src={WireCutter} width={135} height={30} className={styles.rotateImg} alt='Bitswits' />
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardSix}>
                                    <h5>Qwake Technologies Featured On Forbes</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <Image src={Forbes} width={121} height={30} className={styles.rotateImg} alt='Bitswits' />
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <Slider {...dubaiDevelopmetThree} className={`pt-4 pt-xl-5 ${styles.dubaiSlider}`}>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardSeven}>
                                    <h5>Ranked #1 For “Entertainment App<br /> Development Companies In Europe”</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <p className='mb-0'>Top Tech Biz</p>
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardEight}>
                                    <h5>"HAPPIFYIS PERHAPS THE MOST <br /> SOPHISTICATED POSITIVE VIBES APP <br /> AVAILABLE NOW."</h5>
                                    <div className={`${styles.cardBottom} pt-4 d-flex align-items-center justify-content-between`}>
                                        <Image src={NewYork} width={221} height={30} className={styles.rotateImg} alt='Bitswits' />
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-3 px-xl-4'>
                                <div className={styles.cardNine}>
                                    <h5>RAMEET CHAWLA, EVEN SUGGESTED<br /> THAT COINBASE MAY INCREASE THE<br /> STRENGTH OFTHE ORIGINAL BITCOIN.</h5>
                                    <div className={`${styles.cardBottom} pt-2 d-flex align-items-center justify-content-between`}>
                                        <p className='text-center mb-0'>BUSSINESS <br />INSIDER</p>
                                        <Image src={Share} width={30} height={30} alt='Bitswits' />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default DubaiDevelopmentUAE
