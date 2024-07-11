import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Packages.module.css"
// Images 
import Price from "media/videoexplainer/price-img-1.png"

const Packages = () => {
    return (
        <>
            <section className={styles.packagesSec}>
                <div className='container'>
                    <Row className={styles.rowGap}>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>Our Packages</h2>
                                <p>
                                    You've visited the right website if you're looking for top-of-the-line video animation experts in the US.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.cardOne} ${styles.card}`}>
                                <div className={styles.card_top}>
                                    <h3>STARTUP PACKAGE</h3>
                                    <Image src={Price} alt='Price_image' className='hidden md:block mx-auto mt-[20px] mb-[10px]' />
                                    <p className='text-[#231f20] montserrat text-[14px]'>Text & Image Compilation</p>
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins py-0 md:py-[10px]'>$199</h4>
                                </div>
                                <div className={`${styles.card_list} ${styles.listOne}`}>
                                    <ul>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            30 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom Artwork
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Background Music
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${styles.card_bottom}`}>
                                    <div className={styles.cardBtns}>
                                        <a href="tel:833 500 6007">
                                            speak with us
                                            <span>833 500 6007</span>
                                        </a>
                                        <a href="javascript:$zopim.livechat.window.show();">
                                            Want to Discuss
                                            <span>Live Chat Now</span>
                                        </a>
                                    </div>
                                    <div className={styles.cardCtas}>
                                        <Link href="javascript:;" className={styles.getStarted}>
                                            Get Started
                                        </Link>
                                        <a href="javascript:$zopim.livechat.window.show();" className={styles.liveChart}>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.cardTwo} ${styles.card}`}>
                                <div className={styles.card_top}>
                                    <h3>STARTUP PACKAGE</h3>
                                    <Image src={Price} alt='Price_image' className='hidden md:block mx-auto mt-[20px] mb-[10px]' />
                                    <p className='text-[#231f20] montserrat text-[14px]'>Text & Image Compilation</p>
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins py-0 md:py-[10px]'>$199</h4>
                                </div>
                                <div className={`${styles.card_list} ${styles.listTwo}`}>
                                    <ul>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            30 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom Artwork
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Background Music
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${styles.card_bottom}`}>
                                    <div className={styles.cardBtns}>
                                        <a href="tel:833 500 6007">
                                            speak with us
                                            <span>833 500 6007</span>
                                        </a>
                                        <a href="javascript:$zopim.livechat.window.show();">
                                            Want to Discuss
                                            <span>Live Chat Now</span>
                                        </a>
                                    </div>
                                    <div className={styles.cardCtas}>
                                        <Link href="javascript:;" className={styles.getStarted}>
                                            Get Started
                                        </Link>
                                        <a href="javascript:$zopim.livechat.window.show();" className={styles.liveChart}>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.cardThree} ${styles.card}`}>
                                <div className={styles.card_top}>
                                    <h3>STARTUP PACKAGE</h3>
                                    <Image src={Price} alt='Price_image' className='hidden md:block mx-auto mt-[20px] mb-[10px]' />
                                    <p className='text-[#231f20] montserrat text-[14px]'>Text & Image Compilation</p>
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins py-0 md:py-[10px]'>$199</h4>
                                </div>
                                <div className={`${styles.card_list} ${styles.listThree}`}>
                                    <ul>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            30 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom Artwork
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Background Music
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${styles.card_bottom}`}>
                                    <div className={styles.cardBtns}>
                                        <a href="tel:833 500 6007">
                                            speak with us
                                            <span>833 500 6007</span>
                                        </a>
                                        <a href="javascript:$zopim.livechat.window.show();">
                                            Want to Discuss
                                            <span>Live Chat Now</span>
                                        </a>
                                    </div>
                                    <div className={styles.cardCtas}>
                                        <Link href="javascript:;" className={styles.getStarted}>
                                            Get Started
                                        </Link>
                                        <a href="javascript:$zopim.livechat.window.show();" className={styles.liveChart}>
                                            Live Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Packages
