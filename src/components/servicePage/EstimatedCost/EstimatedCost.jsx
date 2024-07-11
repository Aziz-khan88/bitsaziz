import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/EstimatedCost.module.css"
// Images 
import CardMobile from "media/services/cardMobile.svg"

const EstimatedCost = () => {
    return (
        <section className={styles.estimateSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={`${styles.txt} text-center`}>
                            <h2 className='font-bold manrope text-black mb-3'>Estimated Cost Of Mobile App Development <br className='d-lg-block d-none' />
                                Based On App Complexity</h2>
                            <p className='font16 font-medium text-black manrope mb-3 mb-lg-5 pb-xl-2'>Discover our ballpark estimates for <a href="javascript:;" className='manrope'>mobile app development cost </a> based on app complexity. Generally, developing a <br className='d-lg-block d-none' /> mobile app will cost between <span>$10,000 to $120,000+</span> depending on the complexity and the functionality of the app.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4 mt-lg-0'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>SIMPLE APPS</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>$5K - $30K</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>In general, simple mobile apps with limited features and functionalities can cost you in between $5k-$30k. Examples of these types of apps include calculator apps, time-tracking apps, & fitness tracking apps.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4 mt-lg-0'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>COMPLEX APPS</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>$100k-$200k</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>Normally, complex apps with endless features and functionalities can cost between $100k-$200k. Though, these type of apps take more time and money. Some of the most popular examples include e-Commerce apps, real-estate apps & gaming apps.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>MEDIUM APPS</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>$40K - 70k</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>Typically, medium-complex apps with intuitive graphics, complex features and functionalities will cost in between $30k-$70K. Some of the most common examples of mid-level apps are healthcare apps, booking apps, and food delivery apps.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <div className={styles.cardTwo}>
                            <div className="d-flex align-items-center h-100">
                                <div className={styles.cardDesc}>
                                    <h6 className='manrope font-bold text-white pt-5'>Intransition At A Glance</h6>
                                    <p className='mb-4 manrope font16 font-medium pe-2 text-white'>Normally, complex apps with endless features and functionalities can cost between $100k-$200k.</p>
                                    <div className={styles.cardBtn}>
                                        <a href="javascript:;" className='manrope'>
                                            Let’s Do This!
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <Image src={CardMobile} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EstimatedCost
