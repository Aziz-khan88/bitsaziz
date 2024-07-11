import React from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/ExplainerType.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// ===== Images 
import Card1 from "media/videoexplainer/ty-ex-icon-1.png"
import Card2 from "media/videoexplainer/ty-ex-icon-2.png"
import Card3 from "media/videoexplainer/ty-ex-icon-3.png"
import Card4 from "media/videoexplainer/ty-ex-icon-4.png"
import Card5 from "media/videoexplainer/ty-ex-icon-5.png"
import Card6 from "media/videoexplainer/ty-ex-icon-6.png"

const ExplainerType = () => {
    // Slider Setting
    const ExplainerSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.ExplainerTypeSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>
                                    Types of Explainer Videos
                                </h2>
                                <p>
                                    Explainer Videos LLC is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-lg-block d-none'>
                        <Row className={styles.secGap}>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Card1} alt='Bitswits' />
                                    <h3>Whiteboard Animation Video</h3>
                                    <p>
                                        Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Card2} alt='Bitswits' />
                                    <h3>Motion Graphics</h3>
                                    <p>
                                        Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off a wide variety of goods or services.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Card3} alt='Bitswits' />
                                    <h3>2D Character Animation Videos</h3>
                                    <p>
                                        2D animation is one of the most widely used and common animation forms today. Because of its versatility, 2D animation allows for a lot of artistic freedom when it comes to adding the next stage of customization.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Card4} alt='Bitswits' />
                                    <h3>3D Animation Video</h3>
                                    <p>
                                        Because of its high-end and high-quality finish, 3D animation has carved out a niche for itself. With a narrative focus on the action, the distinctive aesthetics of 3D animation make it easier for viewers to interact with what is being seen in the video.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Card5} alt='Bitswits' />
                                    <h3>Screencast Videos</h3>
                                    <p>
                                        It is a popular tool for startups in the technology world. It's a fantastic way to explain a procedure or film a demo video.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <Image src={Card6} alt='Bitswits' />
                                    <h3>Typography Videos</h3>
                                    <p>
                                        Typography animation can render a video by effectively underlining and memorably reinforcing the message with the use of clever fonts and animation.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-lg-none d-block'>
                        <Slider {...ExplainerSlider} className="typeSlider">
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <Image src={Card1} alt='Bitswits' />
                                    <h3>Whiteboard Animation Video</h3>
                                    <p>
                                        Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                    </p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <Image src={Card2} alt='Bitswits' />
                                    <h3>Motion Graphics</h3>
                                    <p>
                                        Again, motion graphics animation videos are known for being simple and engaging. It's the perfect animation style for businesses looking to show off a wide variety of goods or services.
                                    </p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <Image src={Card3} alt='Bitswits' />
                                    <h3>2D Character Animation Videos</h3>
                                    <p>
                                        2D animation is one of the most widely used and common animation forms today. Because of its versatility, 2D animation allows for a lot of artistic freedom when it comes to adding the next stage of customization.
                                    </p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <Image src={Card4} alt='Bitswits' />
                                    <h3>3D Animation Video</h3>
                                    <p>
                                        Because of its high-end and high-quality finish, 3D animation has carved out a niche for itself. With a narrative focus on the action, the distinctive aesthetics of 3D animation make it easier for viewers to interact with what is being seen in the video.
                                    </p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <Image src={Card5} alt='Bitswits' />
                                    <h3>Screencast Videos</h3>
                                    <p>
                                        It is a popular tool for startups in the technology world. It's a fantastic way to explain a procedure or film a demo video.
                                    </p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={styles.card}>
                                    <Image src={Card6} alt='Bitswits' />
                                    <h3>Typography Videos</h3>
                                    <p>
                                        Typography animation can render a video by effectively underlining and memorably reinforcing the message with the use of clever fonts and animation.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExplainerType
