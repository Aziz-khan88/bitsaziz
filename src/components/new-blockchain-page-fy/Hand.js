import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hand.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import bestgloba11 from '/public/blockchainwallet/1.png'
import bestgloba12 from '/public/blockchainwallet/2.png'
import bestgloba13 from '/public/blockchainwallet/3.png'
import bestgloba14 from '/public/blockchainwallet/4.png'
import loop from '/public/blockchainwallet/loop.png'


const Hand = (props) => {


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
                    <Row className="">

                        {isSliderActive ?

                            <Slider {...awardslogo} className="pt-4">

                                <div className={styles.deve1}>
                                    <h4 className="fontgilroybold white font_15">Cryptocurrency Mining Software</h4>
                                    <div className={styles.deve2}>
                                        <div>

                                            <p className="font_13 white fontsfregular linehight_2">We integrate Application-Specific Integrated Circuit (ASIC) chips within existing cryptocurrency mining software to accelerate transaction verifications, along with designing decentralized networks for mining pools, creating miner performance dashboards, and providing architecture solutions for mining farms.</p>
                                        </div>
                                        <Image src={bestgloba11} className="img-fluid" alt='bitswits' />
                                    </div>
                                </div>


                                <div className={styles.deve1}>
                                    <h4 className="fontgilroybold white font_15">Blockchain Wallet & Exchange Software</h4>
                                    <div className={styles.deve2}>
                                        <div>

                                            <p className="font_13 white fontsfregular linehight_2">We develop Blockchain Wallet & Exchange Software equipped with features for trading blockchain tokens & multiple cryptocurrencies, auto-generating private & public keys, and participating in Initial Coin Offerings (ICO), Security Token Offerings (STO), and Digital Security Offerings (DSO)</p>
                                        </div>
                                        <Image src={bestgloba12} className="img-fluid" alt='bitswits' />
                                    </div>
                                </div>

                                <div className={styles.deve1}>
                                    <h4 className="fontgilroybold white font_15">Blockchain Smart Contract Development</h4>
                                    <div className={styles.deve2}>
                                        <div>
                                            <p className="font_13 white fontsfregular linehight_2">Our Blockchain Smart Contract Development is designed to supply decentralized web solutions for finance, healthcare, e-commerce, supply chain, and gaming markets for registering loan requests & intellectual properties, generating letters of credit for international transactions, and validating insurance eligibility.</p>
                                        </div>
                                        <Image src={bestgloba13} className="img-fluid" alt='bitswits' />
                                    </div>
                                </div>

                                <div className={styles.deve1}>
                                    <h4 className="fontgilroybold white font_15">Blockchain Cryptocurrency Exchange </h4>
                                    <div className={styles.deve2}>
                                        <div>

                                            <p className="font_13 white fontsfregular linehight_2">We develop highly scalable white-label Cryptocurrency Exchange Software for exchange operators, asset managers, token issuers, brokers & dealers, and custodians to manage cryptocurrency global trading and blockchain-based digital assets protected by a layered architecture to secure digital exchange data and assets.</p>
                                        </div>
                                        <Image src={bestgloba14} className="img-fluid" alt='bitswits' />
                                    </div>
                                </div>


                            </Slider>
                            :
                            <Col lg={8}>
                                <Row className="gx-2 gy-5">
                                    <Col lg={6}>
                                        <div className={styles.deve1}>
                                            <h4 className="fontgilroybold white font_15">Cryptocurrency Mining Software</h4>
                                            <div className={styles.deve2}>
                                                <div>

                                                    <p className="font_13 white fontsfregular linehight_2">We integrate Application-Specific Integrated Circuit (ASIC) chips within existing cryptocurrency mining software to accelerate transaction verifications, along with designing decentralized networks for mining pools, creating miner performance dashboards, and providing architecture solutions for mining farms.</p>
                                                </div>
                                                <Image src={bestgloba11} className="img-fluid" alt='bitswits' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.deve1}>
                                            <h4 className="fontgilroybold white font_15">Blockchain Wallet & Exchange Software</h4>
                                            <div className={styles.deve2}>
                                                <div>

                                                    <p className="font_13 white fontsfregular linehight_2">We develop Blockchain Wallet & Exchange Software equipped with features for trading blockchain tokens & multiple cryptocurrencies, auto-generating private & public keys, and participating in Initial Coin Offerings (ICO), Security Token Offerings (STO), and Digital Security Offerings (DSO)</p>
                                                </div>
                                                <Image src={bestgloba12} className="img-fluid" alt='bitswits' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.deve1}>
                                            <h4 className="fontgilroybold white font_15">Blockchain Smart Contract Development</h4>
                                            <div className={styles.deve2}>
                                                <div>
                                                    <p className="font_13 white fontsfregular linehight_2">Our Blockchain Smart Contract Development is designed to supply decentralized web solutions for finance, healthcare, e-commerce, supply chain, and gaming markets for registering loan requests & intellectual properties, generating letters of credit for international transactions, and validating insurance eligibility.</p>
                                                </div>
                                                <Image src={bestgloba13} className="img-fluid" alt='bitswits' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.deve1}>
                                            <h4 className="fontgilroybold white font_15">Blockchain Cryptocurrency Exchange </h4>
                                            <div className={styles.deve2}>
                                                <div>

                                                    <p className="font_13 white fontsfregular linehight_2">We develop highly scalable white-label Cryptocurrency Exchange Software for exchange operators, asset managers, token issuers, brokers & dealers, and custodians to manage cryptocurrency global trading and blockchain-based digital assets protected by a layered architecture to secure digital exchange data and assets.</p>
                                                </div>
                                                <Image src={bestgloba14} className="img-fluid" alt='bitswits' />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        }

                        <Col lg={4}>
                            <div className={styles.flod}>
                                <Image src={loop} className="img-fluid" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hand;
