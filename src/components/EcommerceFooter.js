import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/EcommerFooter.module.css'
//
import Award from '/public/ecommerce/award.svg'
import Envelop from '/public/ecommerce/envelop.svg'
import Phone from '/public/ecommerce/phone.svg'
import LinkedIn from '/public/ecommerce/linkedin.svg'
import Twitter from '/public/ecommerce/twitter.svg'
import Youtube from '/public/ecommerce/youtube.svg'
import Instagram from '/public/ecommerce/instagram.svg'
import Pinterest from '/public/ecommerce/pinterest.svg'


const EcommerceFooter = () => {
    return (
        <>
            <section className={styles.footer}>
                <Container>
                    <Row className={styles.borderbottom}>
                        <Col lg={12}>
                            <div className={styles.award}>
                                <Image src={Award} alt='Award' />
                                <div className={styles.footerpara}>
                                    <p className='font15 font-bold mb-0'>No#1 Top Application Development Company</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <h5 className={`text-white font18 font-bold pb-2 ${styles.borderbottom}`}>Services</h5>
                            <Row>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>iPhone App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/cross-platform-app-development" className='font12 lightgrey'>Cross Platform App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/android-application-development" className='font12 lightgrey'>Android App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/react-native-mobile-development" className='font12 lightgrey'>React Native App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/flutter-mobile-development" className='font12 lightgrey'>Flutter App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Wearable App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/ui-&-ux-design-and-development-services" className='font12 lightgrey'>UI / UX App Design</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Mobile App Development USA</Link>
                                        </li>
                                        <li>
                                            <Link href="/mobile-application" className='font12 lightgrey'>Mobile App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/web-app-development" className='font12 lightgrey'>Web App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/game-application-development" className='font12 lightgrey'>Game Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/2d-game-development-company" className='font12 lightgrey'>2D Game Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/3d-game-development-company" className='font12 lightgrey'>3D Game Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/blockchain-game-development" className='font12 lightgrey'>Blockchain Game Development</Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5}>
                            <h5 className={`text-white font18 font-bold pb-2 ${styles.borderbottom}`}>On Demand Solutions</h5>
                            <Row>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>On Demand App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Taxi App Solution</Link>
                                        </li>
                                        <li>
                                            <Link href="/food-delivery-app-development-case-study" className='font12 lightgrey'>Food Delivering App Solutions</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Elearning App Solutions</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Lifestyle App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/healthcare-app-development-case-study" className='font12 lightgrey'>Healthcare App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>On Demand eWallet App Solutions</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Fantasy Sports App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Grocery Delivery App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/music-app-development-case-study" className='font12 lightgrey'>Live Streaming App Development</Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={2}>
                            <h5 className={`text-white font18 font-bold pb-2 ${styles.borderbottom}`}>Useful Links</h5>
                            <ul>
                                <li>
                                    <Link href="/about-us" className='font12 lightgrey'>About Us</Link>
                                </li>
                                <li>
                                    <Link href="/our-work" className='font12 lightgrey'>Works</Link>
                                </li>
                                <li>
                                    <Link href="javascrtipt:;" className='font12 lightgrey'>Testimonials</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className='font12 lightgrey'>Contact Us</Link>
                                </li>
                                <li className='mb-2'>
                                    <a href="mailto:info@BitsWits.co" className='font12 lightgrey'>
                                        <Image src={Envelop} alt='Envelope' />
                                        <span className='font12 lightgrey ms-2'>Contact Email</span>
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a href="tel:3123795987" className='font12 lightgrey'>
                                        <Image src={Phone} alt='Phone' className='mb-2' />
                                        <span className='font12 lightgrey ms-2'>+1 312 379 5987</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:8335006007" className='font12 lightgrey'>
                                        <Image src={Phone} alt='Phone' className='mb-2' />
                                        <span className='font12 lightgrey ms-2'>+1 833 500 6007</span>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div className={`d-flex align-items-center justify-content-between ${styles.official}`}>
                        <div className={`${styles.icons}`}>
                            <p className={`mb-0 font15   font-bold ${styles.borderRight}`}>Official Channels</p>

                            <div className='d-flex align-items-center gap-2'>
                                <a href='https://www.linkedin.com/company/officialBitsWits'><Image alt='Icons' src={LinkedIn} /> </a>
                                <a href='https://twitter.com/BitsWits_/'><Image alt='Icons' src={Twitter} /> </a>
                                <a href='https://www.youtube.com/@officialBitsWits'><Image alt='Icons' src={Youtube} /> </a>
                                <a href='https://www.instagram.com/officialBitsWits/'><Image alt='Icons' src={Instagram} /> </a>
                                <Link href='#'><Image alt='Icons' src={Pinterest} /> </Link>
                            </div>

                        </div>
                        <div className='d-flex align-items-center gap-2 justify-content-center pt-4 sm:pt-0'>
                            <Link href="/term-and-condition" className='font12 lightgrey'>Terms of Use.
                            </Link>
                            <Link href="/privacy-policy" className='font12 lightgrey'>Privacy Policy.
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={`${styles.copyright} ${styles.official} d-flex align-items-center justify-content-center`}>
                <p className='text-white font14 font-medium mb-0 me-2'>Copyright © 2024 BitsWits.</p>
                <Link href="javascript:;" className='text-white font13 font-medium'>Brand Of Bhaoo Incorporation Company</Link>
            </section>
        </>
    )
}

export default EcommerceFooter