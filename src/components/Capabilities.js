import React from 'react'
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Capabilities.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import team1 from '/public/newHomePageImages/1.png'
import team2 from '/public/newHomePageImages/2.png'
import team3 from '/public/newHomePageImages/3.png'
import team4 from '/public/newHomePageImages/4.png'
import team5 from '/public/newHomePageImages/5.png'
import team6 from '/public/newHomePageImages/6.png'
import close from '/public/newHomePageImages/close.png'


const Capabilities = () => {

   const router = usePathname();
    var awardslogo = {
        dots: true,
        arrows: true,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]

    };


    return (
        <>
            <section className={router == '/mobile-application-duplicate' ? styles.home1 : styles.home}>
                <Container className='qtech'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <h2>Our App Development Process</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className={styles.connsct}>
                            <Row className={` mt-5 mb-5`}>
                                <Col lg={2}><div className={styles.line1}></div></Col>
                                <Col lg={2}><div className={styles.line2}></div></Col>
                                <Col lg={2}><div className={styles.line3}></div></Col>
                                <Col lg={2}><div className={styles.line4}></div></Col>
                                <Col lg={2}><div className={styles.line5}></div></Col>
                                <Col lg={2}><div className={styles.line6}></div></Col>
                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Ideation and Conceptualization</h3>
                                            <p>In this initial phase, we brainstorm and shape your app idea into a well-defined concept.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Conduct Market Research
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Define App Goals and Objectives
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Create User Personas
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Planning and Strategy</h3>
                                            <p>We outline the project plan, budget, and overall strategy to ensure a successful app development journey.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Develop a Project Roadmap
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Set a Budget and Timeline
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Define the Technology Stack
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team2} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Design and Wireframing</h3>
                                            <p>This stage involves creating the visual and structural design of your app.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Create Prototypes
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Design User Interfaces
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Ensure User Experience Optimization
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team3} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Development and Coding</h3>
                                            <p>Our development team turns your app's design into a functional, interactive application.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Write Clean and Efficient Code
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Implement Features and Functionality
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Conduct Regular Code Reviews
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team4} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Testing and Quality Assurance</h3>
                                            <p>Rigorous testing is carried out to identify and fix bugs, ensuring a smooth user experience.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Perform Functional Testing
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Conduct User Acceptance Testing
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Optimize Performance and Security
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team5} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}></div>
                                        <div className={styles.deter}>
                                            <h3>Launch and Deployment</h3>
                                            <p>We prepare your app for its official launch and make it available to users.</p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Prepare for App Store Submission
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Develop a Marketing and Launch Plan
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />
                                                Monitor Post-Launch Performance
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} alt='BitsWits' src={team6} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Capabilities