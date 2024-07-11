import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/DubaiFooter.module.css'
//images
import call from '/public/images/icons/phone-icon.webp'
import mail from '/public/images/icons/email-icon.webp'
import fb from '/public/images/icons//fb-icon.webp'
import inta from '/public/images/icons/insta-icon.webp'
import tweet from '/public/images/icons/twitter-icon.webp'
import linkedin from '/public/images/icons/linkedin-icon.webp'
import youtube from '/public/images/icons/youtube-icon.webp'

const DubaiFooter = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footerNav}>
                        <Row>
                            <Col lg={5} className="mb-lg-0 mb-2 mb-lg-4">
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3 className="f-montserrat f-w f-22">Services</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <ul className='p-0 mb-0'>
                                            <li><Link href="/ios-app-development">Ios App Development</Link></li>
                                            <li><Link href="/top-mobile-app-development-company">Mobile App Development</Link></li>
                                            <li><Link href="/android-application-development">Android App Development</Link></li>
                                            <li><Link href="/flutter-mobile-development">Flutter App Development</Link></li>
                                            <li><Link href="/react-native-mobile-development">React Native App Development</Link></li>
                                            <li><Link href="/hybrid-mobile-apps-development">Hybrid Mobile Apps Development</Link></li>
                                            <li><Link href="/cross-platform-app-development">Cross Platform App Development</Link></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li><Link href="/web-app-development">Web App Development</Link></li>
                                            <li><Link href="/augmented-reality-apps-development-company">Augmented Reality Apps Development</Link></li>
                                            <li><Link href="/custom-mobile-development">Custom Mobile Development</Link></li>
                                            <li><Link href="/mobile-app-development-services">App Development services</Link></li>
                                            <li><Link href="/top-mobile-app-developers">Mobile App Developers</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} className="mb-lg-0 mb-2 mb-lg-4">
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3 className="f-montserrat f-w f-22">On Demand Solutions</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <ul className='p-0 mb-0'>
                                            <li><Link href="/game-application-development" className="modal-toggle">Game App Development</Link></li>
                                            <li><Link href="/2d-game-development-company" className="modal-toggle">2D Game Development</Link></li>
                                            <li><Link href="/3d-game-development-company" className="modal-toggle">3D Game Development</Link></li>
                                            <li><Link href="/nft-game-development" className="modal-toggle">NFT Game Development</Link></li>
                                            <li><Link href="/blockchain-game-development" className="modal-toggle">Blockchain Game Development</Link></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li>
                                                <Link href="/blockchain-development-lp" className="modal-toggle">Blockchain Development</Link>
                                                <Link href="/artificial-intelligence-development-company" className="modal-toggle">Artificial Intelligence</Link>
                                                <Link href="/social-media-app-development">Social Media App Development</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2}>
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3 className="f-montserrat f-w f-22">Useful Links</h3>
                                </div>
                                <ul className='p-0 mb-lg-1'>
                                    <li>
                                        <Link href="/contact-us">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-work">Works</Link>
                                    </li>

                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/term-and-condition">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blogs</Link>
                                    </li>

                                </ul>
                                <ul className={`${styles.contacts} ${styles.myLinks} p-0`}>
                                    <li className="mb-2">
                                        <a href="mailto:info@BitsWits.co">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={mail}

                                                loading="lazy"
                                            />
                                            <span className="email f-uppercase">Contact Email</span>
                                        </a>
                                    </li>
                                    <li className="fw-bold">
                                        <a href="tel:3123795987">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={call}

                                                loading="lazy"
                                            />
                                            <span className="number">+1 312 379 5987</span>
                                        </a>
                                    </li>
                                    <li className="fw-bold">
                                        <a href="tel:8335006007">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={call}

                                                loading="lazy"
                                            />
                                            <span className="number">+1 833 500 6007</span>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className={styles.footNotes}>
                    <Container>
                        <Row className="align-items-md-center">
                            <Col md={4} lg={3} className="mt-md-0 mt-4">
                                <ul className={`${styles.socials} mb-0 p-0`}>
                                    <li>
                                        <a href="https://www.facebook.com/officialBitsWits" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={fb}

                                                loading="lazy"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/officialBitsWits/" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={inta}

                                                loading="lazy"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/BitsWits_/" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={tweet}

                                                loading="lazy"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/officialBitsWits" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={linkedin}

                                                loading="lazy"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@officialBitsWits" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={youtube}

                                                loading="lazy"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={4} lg={6}>
                                <p className={`${styles.trmCon} f-montserrat f-12 white f-500 mb-0`}>
                                    Copyright © 2024 BitsWits. |
                                    <Link href="#" className="white ps-1" target="_blank">
                                        Brand Of Bhaoo Incorporation Company
                                    </Link>
                                </p>
                            </Col>
                            <Col md={4} lg={3}>
                                <div className={styles.termsMain}>
                                    <ul className={`${styles.termsCo} p-0 mb-0`}>
                                        <li>
                                            <Link href="/term-and-condition">Terms of Use</Link>
                                        </li>
                                        <li>
                                            <p className="f-montserrat f-12 white f-500 mb-0 white"> | </p></li>
                                        <li>
                                            <Link href="/privacy-policy">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default DubaiFooter