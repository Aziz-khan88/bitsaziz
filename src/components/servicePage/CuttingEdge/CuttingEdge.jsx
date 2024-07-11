import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/CuttingEdge.module.css"
// Images
import estimate from "media/services/estimate.svg"
import cuttingOne from "media/services/cutting1.png"
import cuttingTwo from "media/services/cutting2.png"
import cuttingThree from "media/services/cutting3.png"
import cuttingFour from "media/services/cutting4.png"
import cuttingFive from "media/services/cutting5.png"
import cuttingSix from "media/services/cutting6.png"
import cuttingSeven from "media/services/cutting7.png"
import cuttingEight from "media/services/cutting8.png"
import cuttingNine from "media/services/cutting9.png"
import cuttingTen from "media/services/cutting10.png"
import cuttingEleven from "media/services/cutting11.png"

const CuttingEdge = () => {
    return (
        <section className={styles.cuttingEdgeSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center text-white manrope font-bold mb-2 mb-lg-4'>Cutting-Edge Services We Offer As An <br className='d-xl-block d-none' />
                                App Development Company</h2>
                            <p className='font16 text-white font-medium text-center manrope mb-md-5 pb-3'>We’re a software development company that ensures its expertise extends to offer a seamlessly <br className='d-xl-block d-none' /> productive and growth-oriented partnership</p>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className={styles.services}>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>IOS Application Development</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingOne} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Android Application Development</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingTwo} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Progressive Web Application Development</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingThree} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Cross Platform Applications</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingFour} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>UX/UI Designing</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingFive} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Prototyping</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingSix} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Software Quality Testing</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingSeven} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Migration Services</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingEight} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Blockchain App Development</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingNine} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Wearables</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingTen} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Augmented Reality</h3>
                                        <div className={styles.edgeBtn}>
                                            <a href="javascript:;" className='manrope font-bold'>
                                                Let’s Do This!
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingEleven} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.etimate}>
                            <Image src={estimate} alt='Bitswits' className='img-fluid d-lg-block d-none' />
                            <div className={styles.estimateContent}>
                                <h3 className='font-bold manrope text-center text-white'>Estimate Your App <br /> Project's Cost Now!</h3>
                                <div className={`${styles.etimateBtn}`}>
                                    <a href="javascript:;">
                                        Let's Talk !
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CuttingEdge
