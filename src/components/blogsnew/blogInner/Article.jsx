import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from "media/newblogs/image.png"
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/InnerBanner.module.css"
// Images 
import Share from "media/newblogs/shareIcon.png"
import social1 from "media/newblogs/linkedin.png"
import social2 from "media/newblogs/twitter.png"
import social3 from "media/newblogs/facebook.png"
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"
import BlogImage1 from "media/newblogs/blog-1.png"
import BlogImage2 from "media/newblogs/blog-2.png"
import BlogImage3 from "media/newblogs/blog-3.png"
import profile from "media/newblogs/blog-client.svg"
import Blognavigations from '../blognavigations/Blognavigations'

const Article = () => {
    return (
        <>
            <section className={styles.articleSec}>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <ul className={`p-0 mb-4 ${styles.share}`}>
                                <li className={`d-flex align-items-center justify-content-center gap-3 ${styles.shareIcon}`}>
                                    <Image src={Share} alt='Bitswits' width={20} height={20} />
                                    <p className='mb-0'>Share This Article</p>
                                </li>
                                <li className={`${styles.icons}`}>
                                    <Link href="javascript:;"></Link>
                                    <Image src={social1} alt='Bitswits' width={20} height={20} />
                                </li>
                                <li className={`${styles.icons}`}>
                                    <Link href="javascript:;">
                                        <Image src={social2} alt='Bitswits' width={25} height={20} />
                                    </Link>
                                </li>
                                <li className={`${styles.icons}`}>
                                    <Link href="javascript:;">
                                        <Image src={social3} alt='Bitswits' width={10} height={20} />
                                    </Link>
                                </li>
                            </ul>
                            <p className='fontsfregular'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth. We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine </p>
                            <h2 className='fontsfregular mb-2' id='heading1'>Development Of A Crypto Exchange Platform App</h2>
                            <p className='fontsfregular'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth. We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine </p>

                            <div className={styles.blockchain}>
                                <h3 className='fontsfregular text-center'>Hire Expert Blockchain Developers <br /> From Bitswits In Just 24 Hours</h3>
                                <p className='fontsfregular text-center'>We've Helped Businesses Cross The Chasm With Our Data-Driven<br /> Approach Toward App Development, And We've Brought </p>
                                <div className={styles.btn}>
                                    <a href="javascript:;">
                                        Hire Now!
                                    </a>
                                </div>
                            </div>

                            <h2 className='fontsfregular mb-2' id='heading2'>Tech Stack For Development</h2>
                            <p className='fontsfregular'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth. We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth.</p>

                            <h3 className='fontsfregular'>Tech Stack For Development</h3>
                            <p className='fontsfregular'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine</p>
                            <h3 className='fontsfregular mb-3'>Tech Stack For Development</h3>
                            <ul className='mb-5'>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai,</p>
                                </li>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, </p>
                                </li>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion</p>
                                </li>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've</p>
                                </li>
                            </ul>
                            <h3 className='fontsfregular mb-3'>Tech Stack For Development</h3>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink</p>
                            <Image src={image} alt='Bitswits' className='img-fluid' />

                            <h2 className='fontsfregular mb-2 mt-5' id='heading3'>Tech Stack For Development</h2>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth. We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth.</p>
                            <p className='fontsfregular mb-5'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine</p>

                            <Image src={image} alt='Bitswits' className='img-fluid' />

                            <h2 className='fontsfregular mb-2 mt-4' id='heading4'>Security Measurements</h2>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth. We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE.</p>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine</p>

                            <h3 className='fontsfregular mb-3'>Tech Stack For Development</h3>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine</p>

                            <h3 className='fontsfregular mb-3'>Tech Stack For Development</h3>

                            <ul className='mb-5'>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai,</p>
                                </li>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, </p>
                                </li>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion</p>
                                </li>
                                <li>
                                    <p className='fontsfregular mb-0'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've</p>
                                </li>
                            </ul>

                            <h3 className='fontsfregular mb-3'>Tech Stack For Development</h3>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink</p>

                            <div className={styles.blockchain}>
                                <h3 className='fontsfregular text-center'>Hire Expert Blockchain Developers <br /> From Bitswits In Just 24 Hours</h3>
                                <p className='fontsfregular text-center'>We've Helped Businesses Cross The Chasm With Our Data-Driven<br /> Approach Toward App Development, And We've Brought </p>
                                <div className={styles.btn}>
                                    <a href="javascript:;">
                                        Hire Now!
                                    </a>
                                </div>
                            </div>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth. We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth.</p>
                            <h3 className='fontsfregular mb-3'>Tech Stack For Development</h3>
                            <p className='fontsfregular mb-4'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink</p>
                        </Col>
                        <Col lg={4}>
                            <Blognavigations />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.readSec}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='fontsfregular mb-5 text-center'>Read Next</h2>
                        </Col>
                        <Col md={6} lg={4} className='p-2'>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage1} alt='Bitswits' className='img-fluid w-100' />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className='fontsfregular'>Blockchain</p>
                                    <h5 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="javascript:;" className='text-black'>
                                            Read More
                                            <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                            <h3 className='fontsfregular'>Nick Willford</h3>
                                            <Image src={verifies} alt='bitswits' width={13} height={13} />
                                        </div>
                                        <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='p-2'>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage2} alt='Bitswits' className='img-fluid w-100' />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className='fontsfregular'>Mobile Application</p>
                                    <h5 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="javascript:;" className='text-black'>
                                            Read More
                                            <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                            <h3 className='fontsfregular'>Nick Willford</h3>
                                            <Image src={verifies} alt='bitswits' width={13} height={13} />
                                        </div>
                                        <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className='p-2'>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage3} alt='Bitswits' className='img-fluid w-100' />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className='fontsfregular'>General</p>
                                    <h5 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="javascript:;" className='text-black'>
                                            Read More
                                            <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className='d-flex align-items-center gap-2 pb-1'>
                                            <h3 className='fontsfregular'>Nick Willford</h3>
                                            <Image src={verifies} alt='bitswits' width={13} height={13} />
                                        </div>
                                        <p className='fontsfregular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Article
