import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Banner.module.css"
import { FaCheckCircle } from 'react-icons/fa'
// Images
import BannerLogos from "media/videoexplainer/bnr-logo.png"
import chatIcon from "media/videoexplainer/chat-icon.png"
const Banner = () => {
    return (
        <>
            <section className={`${styles.bannerSec}`}>
                <div className='container'>
                    <Row>
                        <Col lg={7}>
                            <h1>EXPAND YOUR BRAND’S REACH WITH AN ENGAGING CUSTOM EXPLAINER VIDEO</h1>
                            <p>
                                We are a leading video animation company in the USA that has helped <br className='d-xl-block d-none' />thousands of brands to broaden their product reach via fascinating<br className='d-xl-block d-none' /> explainer videos.
                            </p>
                            <ul>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span> Full HD Animations</span>
                                </li>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span>Appealing Designs</span>
                                </li>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span>Latest Technology</span>
                                </li>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span>Award-Winning Agency</span>
                                </li>
                            </ul>
                            <Image src={BannerLogos} alt='banner-logos' className='' />
                            <div className='d-flex align-items-center gap-4 pt-4'>
                                <Link href="javascript:;" className={styles.btn}>
                                    Get Started
                                </Link>
                                <Link href="javascript:;" className='d-flex align align-items-center'>
                                    <Image src={chatIcon} alt='chat-icon' className='me-2' />
                                    <div>
                                        <span className={styles.spanOne}>Talk to our Expert</span>
                                        <span className={styles.spanTwo}>Live Chat</span>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <form action="javascript:;" className={styles.form}>
                                <div className={styles.txt}>
                                    <h3>
                                        Share Your <br className='block' />
                                        <strong>
                                            Animation Idea
                                        </strong>
                                    </h3>
                                </div>
                                <div className={styles.formFeilds}>
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' required />
                                    </div>
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter Email' required />
                                    </div>
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter Phone Number' required />
                                    </div>
                                    <div className="relative">
                                        <textarea name='message' type="text" placeholder='Message' required ></textarea>
                                    </div>
                                    <button className='bitsForm'>Get a free quote</button>
                                </div>
                                <div className={`form_partical ${styles.discountbg}`}>
                                    <h6 className={`${styles.headingParticle}`}>Special Offer</h6>
                                    <h4 className={`text-black`}>50%</h4>
                                    <h5 className=''>Discount</h5>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Banner
