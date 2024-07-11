import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WorkBody.module.css'
//
import ourportfolio1 from '/public/images/ourwork/folio1.png'
import ourportfolio2 from '/public/images/ourwork/folio2.png'
import ourportfolio3 from '/public/images/ourwork/folio3.png'
import ourportfolio4 from '/public/images/ourwork/folio4.png'
import ourportfolio5 from '/public/images/ourwork/folio5.png'
import ourportfolio6 from '/public/images/ourwork/folio6.png'
import ourportfolio7 from '/public/images/ourwork/folio7.png'
import ourportfolio8 from '/public/images/ourwork/folio8.png'
import ourportfolio9 from '/public/images/ourwork/folio9.png'
import ourportfolio10 from '/public/images/ourwork/folio10.png'
import ourportfolio11 from '/public/images/ourwork/folio11.png'
import ourportfolio12 from '/public/images/ourwork/folio12.png'
import ourportfolio13 from '/public/images/ourwork/folio13.png'


const WorkBody = () => {
    return (
        <>
            <section className={`${styles.workBg} ${styles.travel}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>TRAVEL APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio1} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.estate}`}>
                <Container>
                    <Row className={`align-items-center gy-4`}>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>REAL ESTATE APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.workImg}`}>
                                <Image quality={75} src={ourportfolio2} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.ecommerce}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>ECOMMERCE APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio3} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.scribe}`}>
                <Container>
                    <Row className={`align-items-center gy-4`}>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>SCRIBE APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.workImg}`}>
                                <Image quality={75} src={ourportfolio4} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.grease}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>GREASE APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio5} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.sponsord}`}>
                <Container>
                    <Row className={`align-items-center gy-4`}>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>SPONSORD APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.workImg} ${styles.workImg3}`}>
                                <Image quality={75} src={ourportfolio6} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.health}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>HEALTH CARE APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio7} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.ride}`}>
                <Container>
                    <Row className={`align-items-center gy-4`}>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>RIDER APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.workImg}`}>
                                <Image quality={75} src={ourportfolio8} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.fit}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>FITNOW APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio9} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.ready}`}>
                <Container>
                    <Row className={`align-items-center gy-4`}>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>READY APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.workImg}`}>
                                <Image quality={75} src={ourportfolio10} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.crave}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>CRAVE APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio11} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.home}`}>
                <Container>
                    <Row className={`align-items-center gy-4`}>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>HOMECONNECT PRO</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.workImg}`}>
                                <Image quality={75} src={ourportfolio12} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.beats}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <h4>BEATS APP</h4>
                                <p>
                                    The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                </p>
                                <a className={`${styles.btns}`} href="tel:8335006007">Book a Call</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <Image quality={75} src={ourportfolio13} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WorkBody
