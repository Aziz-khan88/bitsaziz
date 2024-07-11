import React, { useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import styles from '@/styles/blockchain/leftContent.module.css';
// 
import usa from '@/public/blockchain/images/usa.png';
import uae from '@/public/blockchain/images/uae.png';
import maleshia from '@/public/blockchain/images/maleshia.png';
import pakistan from '@/public/blockchain/images/pakistan.png';
import mapusa from '@/public/blockchain/images/mapusa.png';


const FireUp = (props) => {
    const [key, setKey] = useState('home');
    return (
        <>
            <section className='pt-5'>
                <div className={styles[props.whychooseclass]}>
                    <Container>
                        <Row className={`${styles.middle} gy-4`}>
                            <Col lg={6}>
                                <div className={styles.cube}>
                                    <h2 className="fw700 f50 text-white mb-2">Let’s <span className='fw700 grdiant'>Fire Up</span>  Your <span className='fw700'> Business!</span></h2>
                                    <p className='f15 text-white mt-3'>Team Up With Us Today For An Unforgettable Service Experience</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.image}>

                                </div>
                            </Col>
                        </Row>

                        <Tab.Container id="lefttabsexample" defaultActiveKey="first">
                            <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <Image quality={75} src={usa} alt="Blockchain" className='img-fluid' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <Image quality={75} src={uae} alt="Blockchain" className='img-fluid' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <Image quality={75} src={maleshia} alt="Blockchain" className='img-fluid' />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        <Image quality={75} src={pakistan} alt="Blockchain" className='img-fluid' />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className='pt-4'>
                                        <Col lg={6}>
                                            <h3 className='f40 fw700 text-white mb-4 mt-4'>USA</h3>
                                            <div className='mb-4'>
                                                <h4 className='fw500 f24 text-white'>DELAWARE</h4>
                                                <p className='text-white'>8 The Green STE 300, Dover DE 19901.</p>
                                                <p className='mt-4'> <a className='text-white' href="tel:8335006007">+1 833 500 6007</a></p>
                                                <p><a className='text-white' href="tel:3123795987">+1 312 379 5987</a></p>
                                            </div>
                                            <div className='mb-4'>
                                                <h4 className='fw500 f24 text-white'>CALIFORNIA</h4>
                                                <p className='text-white'>350 South Grand Avenue, Los Angeles, CA 90071.</p>
                                                <p className='mt-4'> <a className='text-white' href="tel:3123795987">+1 312 379 5987</a></p>
                                                <p><a className='text-white' href="tel:8335006007">+1 833 500 6007</a></p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <Image quality={75} src={mapusa} alt="Blockchain" className='img-fluid' />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className='pt-4'>
                                        <Col lg={6}>
                                            <h3 className='f40 fw700 text-white mb-4 mt-4'>UAE</h3>
                                            <div className='mb-4'>
                                                <h4 className='fw500 f24 text-white'>SHARJAH</h4>
                                                <a className='text-white' href='https://maps.app.goo.gl/ebo8RKEPUPVkDfZu9'>Office #101, 32 Street, Al Mujarrah, Sharjah</a>
                                                <p className='mt-4'> <a className='text-white' href="tel:8335006007">+1 833 500 6007</a></p>
                                                <p><a className='text-white' href="tel:+971555031266">+97 155 503 1266</a></p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <Image quality={75} src={mapusa} alt="Blockchain" className='img-fluid' />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className='pt-4'>
                                        <Col lg={6}>
                                            <h3 className='f40 fw700 text-white mb-4 mt-4'>USA</h3>
                                            <div className='mb-4'>
                                                <h4 className='fw500 f24 text-white'>MALAYSIA</h4>
                                                <p className='text-white'>Office 13 A - Main Office Tower - Financial Park , Labuan , Malaysia.</p>
                                                <p className='mt-4'> <a className='text-white' href="tel:8335006007">+1 833 500 6007</a></p>
                                                <p><a className='text-white' href="tel:3123795987">+1 312 379 5987</a></p>
                                            </div>

                                        </Col>
                                        <Col lg={6}>
                                            <Image quality={75} src={mapusa} alt="Blockchain" className='img-fluid' />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row className='pt-4'>
                                        <Col lg={6}>
                                            <h3 className='f40 fw700 text-white mb-4 mt-4'>PAKISTAN</h3>
                                            <div className='mb-4'>
                                                <h4 className='fw500 f24 text-white'>KARACHI</h4>
                                                <a className='text-white' href='https://maps.app.goo.gl/rnCBvBgv9SdWXUHL7'>12th Floor Caesar's Tower, Karachi, Pakistan</a>
                                                <p className='mt-4'> <a className='text-white' href="tel:+923468280101">+92 346 828 0101</a></p>
                                                <p><a className='text-white' href="3123795987">+92 312 379 5987</a></p>
                                            </div>

                                        </Col>
                                        <Col lg={6}>
                                            <Image quality={75} src={mapusa} alt="Blockchain" className='img-fluid' />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default FireUp