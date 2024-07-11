import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/InnerBanner.module.css"
// Images
import Banner from "media/newblogs/innerbanner.png"
import Client from "media/newblogs/innerclient.png"
import verified from "media/newblogs/blog-verify.png"
import experience from "media/newblogs/experience.png"
import Link from 'next/link'

const InnerBanner = () => {
    return (
        <>
            <section className={styles.innerBannerSec}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h4>Blockchain</h4>
                            <h1 className='fontsfregular'>
                                Conquer Tech With Bitswits: <br />
                                Your Path To Unstoppable Progress!
                            </h1>
                            <p className='fontsfregular'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth</p>

                            <p className='fontsfregular'>Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing You To Rethink Possibilities And Ensure Long-Term Growth.</p>
                        </Col>
                        <Col lg={6}>
                            <Image src={Banner} alt='Bitswits' className='img-fluid w-100' />
                        </Col>
                        <Col lg={12}>
                            <div className={styles.blogdesc}>
                                <div className={styles.clientImage}>
                                    <Image src={Client} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className={styles.content}>
                                    <ul className='p-0'>
                                        <li className={styles.name}>
                                            <p className='fontsfregular mb-0'>By <span>Nick Willford</span></p>
                                        </li>
                                        <li className={`${styles.verified} d-flex align-items-center`}>
                                            <p className='fontsfregular mb-0'> Verified Expert In Development
                                                <Image src={verified} alt='Bitswits' width={16} height={16} className='ms-3' />
                                            </p>
                                        </li>
                                        <li className={`${styles.experience} d-flex align-items-center`}>
                                            <Image src={experience} alt='Bitswits' width={16} height={16} className='me-3' />
                                            <p className='fontsfregular mb-0'> 3 Years Of Experience</p>
                                        </li>
                                    </ul>

                                    <div className={styles.desc}>
                                        <p className='fontsfregular'>We've Helped Businesses Cross The Chasm With Our Data-Driven Approach Toward App Development, And We've Brought The Same Passion For Disruption And Growth To UAE. Having Expertise And First-Hand Experience In Multiple Tangents Of Mobile App Development In Dubai, Our Mobile Apps Development Company Rev Up Your Growth Engine By Building New Revenue Streams Allowing</p>
                                    </div>

                                    <div className={styles.expertise}>
                                        <span className={`${styles.expertisePara} fontsfregular`}>EXPERTISE</span>
                                        <Link href="javascript:;" className={`fontsfregular text-black ${styles.btn}`}>Animation</Link>
                                        <Link href="javascript:;" className={`fontsfregular text-black ${styles.btn}`}>Development</Link>
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

export default InnerBanner
