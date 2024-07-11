import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Intelligence.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import bestgloba11 from '/public/newpostlongserve/1.png'
import bestgloba12 from '/public/newpostlongserve/2.png'
import bestgloba13 from '/public/newpostlongserve/3.png'
import videopic from '/public/newpostlongserve/mobile.png'


const Intelligence = (props) => {

    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }

    return (
        <>
            <section className={`${styles[props.assignClass]}`}>
                <Container>
                    <Row className="gx-5 w-100">
                        <Col lg={12}>
                            <h2 className="font_30 fontsfheavy newfycolr">Custom Blockchain Applications</h2>
                            <h2 className="newchoose letterspace_1 font-bold white">We Build Custom Blockchain Applications</h2>
                            <p className="font_17 white fontsfregular pt-2 pb-2">Bitswits designs and integrates custom Blockchain Applications into existing enterprise systems for businesses to leverage a safe, <br /> secure environment for diverse business transactions.</p>
                        </Col>

                        {isSliderActive ?
                            <>
                                <h3 className="font_30 font-bold newfycolr">Blockchain Application Development</h3>
                                <p className="font_15 linehight_1 white fontsfregular pt-2">We leverage third-party blockchain software solutions to develop protected, trusted, and scalable Blockchain Applications designed to support a wide range of plugins, reduce losses, avoid fraud, eliminate expensive intermediary fees, boost local & international trade, distribute sensitive information, and so much more in a centralized platform.</p>


                                <Slider {...awardslogo} className="pt-4">
                                    <div className={styles.blocknew}>
                                        <div className="mb-4">
                                            <Image src={bestgloba11} alt="bitswits" />
                                        </div>
                                        <div>
                                            <h3 className="font_20 newfycolr font-bold pb-2">Strengthen Security</h3>
                                            <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We leverage blockchain’s peer-to-peer nature to create internal & external breach-resistant applications for preventing fraud & cyber-attacks while managing sensitive dat</p>
                                        </div>
                                    </div>
                                    <div className={styles.blocknew}>
                                        <div className="mb-4">
                                            <Image src={bestgloba12} alt="bitswits" />
                                        </div>
                                        <div>
                                            <h3 className="font_20 newfycolr font-bold pb-2">Bust Operational Bottlenecks</h3>
                                            <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We build Blockchain-as-a-Service (BaaS) solutions to replace error-prone, paper-heavy, and time-consuming processes by embedding automated workflows into existing applications.</p>
                                        </div>
                                    </div>
                                    <div className={styles.blocknew}>
                                        <div className="mb-4">
                                            <Image src={bestgloba13} alt="bitswits" />
                                        </div>
                                        <div>
                                            <h3 className="font_20 newfycolr font-bold pb-2">Cut Intermediary Costs</h3>
                                            <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We develop public and private blockchains for applications to exchange data records, status updates, payments, and other transaction information without added financial restraints.</p>
                                        </div>
                                    </div>

                                </Slider>
                            </>
                            :
                            <Col lg={7}>
                                <h3 className="font_30 font-bold newfycolr">Blockchain Application Development</h3>
                                <p className="font_15 linehight_1 white fontsfregular pt-2">We leverage third-party blockchain software solutions to develop protected, trusted, and scalable Blockchain Applications designed to support a wide range of plugins, reduce losses, avoid fraud, eliminate expensive intermediary fees, boost local & international trade, distribute sensitive information, and so much more in a centralized platform.</p>

                                <div className={styles.blocknew}>
                                    <div>
                                        <Image src={bestgloba11} alt="bitswits" />
                                    </div>
                                    <div>
                                        <h3 className="font_20 newfycolr font-bold pb-2">Strengthen Security</h3>
                                        <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We leverage blockchain’s peer-to-peer nature to create internal & external breach-resistant applications for preventing fraud & cyber-attacks while managing sensitive dat</p>
                                    </div>
                                </div>
                                <div className={styles.blocknew}>
                                    <div>
                                        <Image src={bestgloba12} alt="bitswits" />
                                    </div>
                                    <div>
                                        <h3 className="font_20 newfycolr font-bold pb-2">Bust Operational Bottlenecks</h3>
                                        <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We build Blockchain-as-a-Service (BaaS) solutions to replace error-prone, paper-heavy, and time-consuming processes by embedding automated workflows into existing applications.</p>
                                    </div>
                                </div>
                                <div className={styles.blocknew}>
                                    <div>
                                        <Image src={bestgloba13} alt="bitswits" />
                                    </div>
                                    <div>
                                        <h3 className="font_20 newfycolr font-bold pb-2">Cut Intermediary Costs</h3>
                                        <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We develop public and private blockchains for applications to exchange data records, status updates, payments, and other transaction information without added financial restraints.</p>
                                    </div>
                                </div>
                            </Col>
                        }
                        <Col lg={5}>
                            <div className={styles.longimg}>
                                <Image src={videopic} alt="bitswits" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Intelligence;
