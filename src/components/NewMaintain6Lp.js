import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMaintain6Lp.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewMaintain6Lp = () => {

    var servSlider = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row className='d-none d-lg-flex g-3'>
                        <Col lg={12}>
                            <p className={`font24 font-extrabold text-center mb-0 ${styles.changered1}`}>How We Make App Creation Simple and Effective
                            </p>
                            <h1 className='text-white font50 font-bold text-center mb-2'>Our Mobile App Development Solutions</h1>
                            <p className='m-0 text-white text-center'>Our comprehensive services cover everything from design to development, ensuring your journey to create an app  </p>
                            <p className='m-0 text-white text-center mb-4'>is smooth and successful. With our support, the process of app-making is not just easy. It's a journey of innovation. </p>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Mobile App Development</h3>
                                    <p className={'text-white'}>
                                        In our Mobile App Development world, we turn your ideas into amazing apps, creating and developing experiences that stand out in the market. Ready to make your app a reality?<span className={styles.changered}> Let's start building today!</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Game Development</h3>
                                    <p className={'text-white '}>
                                        In our realm of Mobile Game Development, we transform your concepts into extraordinary games. Are you eager to see your game idea come to life?<span className={styles.changered}> Join us in shaping the future of gaming! </span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Blockchain Development</h3>
                                    <p className={'text-white '}>
                                        Dive into Blockchain Development. We excel in creating secure, innovative blockchain platforms. Join us to shape the future of digital transactions. <span className={styles.changered}>Let's innovate together!</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold '>Artificial Intelligence (Ai)</h3>
                                            <p className={styles.para1}>
                                                In AI Development, we're not just participants – we're pioneers. Our expertise in developing advanced AI solutions and creating intelligent systems sets us apart. Ready to lead the AI revolution? <span className={styles.changered}>Partner with us for next-gen innovations.</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}></Col>
                                </Row>

                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.possibilities}>
                                        Web App Development Experts. We blend creativity with cutting-edge technology to build web apps that are not just functional, but phenomenal. Ready to set new benchmarks in the digital world?<span className={styles.changered}> Partner with us to craft your web masterpiece</span>
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>UI/UX App Design</h3>
                                    <p className={styles.possibilities}>
                                        Crafting Artful Experiences in UI/UX App Design: We blend aesthetic elegance with user-centric functionality for mesmerizing app interfaces. Are you eager to enchant your users with seamless design? <span className={styles.changered}>Let's create digital artistry together.</span>
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={8}>

                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white font25 font-bold'>AR/VR</h3>
                                        <p className={`text-white f-14 ${styles.contentPara}`}>
                                            Shaping New Realities with AR/VR Development: Our expertise fuses cutting-edge technology with immersive experiences. Ready to redefine the boundaries of virtual and augmented worlds?<span className={styles.changered}> Let's innovate beyond imagination.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app7}>
                                <div className={styles.mblApp7}>
                                    <h3 className='text-white font25 font-bold text-center'>Internet of Things</h3>
                                    <p className={styles.para9}>
                                        Innovating in IoT Development: We connect the dots between technology and usability to create innovative, integrated solutions.<span className={styles.changered}> Let's lead the IoT evolution together. </span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* ======================================================= */}

                    <div className='d-block d-lg-none'>
                        <Row>
                            <Col lg={12}>
                                <p className={` f-20 font-bold text-white text-center mb-0`}>Delivering Excellence Daily</p>
                                <h1 className='text-white f-55 font-bold text-center'>Trusted Development Company For Tech Solutions</h1>
                                <p className='m-0 text-white text-center'>We, at BitsWits, are dedicated to being innovative and making our clients happy.</p>
                                <p className='text-white text-center pb-3'>We specialize in customizing services for digital business evolution and bring the following services to the table.</p>
                            </Col>
                        </Row>
                        <Slider {...servSlider} className={`${styles.servSlider} servSlider`}>
                            <div className={`${styles.app} ${styles.app1}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Mobile App Development</h3>
                                    <p className={styles.para}>
                                        We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app2}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Game Development</h3>
                                    <p className={styles.para}>
                                        Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app3}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Blockchain Development</h3>
                                    <p className={styles.para}>
                                        We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app4}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold '>Artificial Intelligence (Ai)</h3>
                                    <p className={styles.para1}>
                                        Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app5}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.para}>
                                        Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app6}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold text-center'>UI/UX App Design</h3>
                                    <p className={styles.para}>
                                        Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app7}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>AR/VR</h3>
                                    <p className={`text-white f-16 ${styles.para}`}>
                                        BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app8}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold text-center'>Internet of Things</h3>
                                    <p className={styles.para}>
                                        We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NewMaintain6Lp