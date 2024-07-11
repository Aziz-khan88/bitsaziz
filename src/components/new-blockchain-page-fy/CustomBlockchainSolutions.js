import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./CustomBlockchainSolutions.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import bestgloba11 from '/public/newport/1.png'
import bestgloba12 from '/public/newport/2.png'
import bestgloba13 from '/public/newport/3.png'
import bestgloba14 from '/public/newport/4.png'
import bestgloba15 from '/public/newport/5.png'
import bestgloba16 from '/public/newport/6.png'


const CustomBlockchainSolutions = (props) => {


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
                    <Row className="gx-2 gy-5">
                        <Col lg={12}>
                            <h3 className="font_30 fontsfheavy newfycolr center">Blockchain Solutions</h3>
                            <h2 className="newchoose letterspace_1 font-bold white center">Custom Blockchain Solutions</h2>
                            <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">We develop Custom Blockchain Solutions and cryptocurrency development from scratch or by integrating customized features & <br /> components into existing systems for finance & banking, supply chain, retail & e-commerce, healthcare, and gaming markets.</p>
                        </Col>

                        {isSliderActive ?

                            <Slider {...awardslogo} className="pt-4 mt-0">

                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Finance & Banking Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We develop Blockchain Finance & Banking Solutions, including high-speed algorithmic trading platforms for trading, risk management & RPA platforms for banking, and P2P & SME lending platforms for loan management, along with developing solutions for payment processing, international money transfers, and e-wallets.</p>
                                        </div>
                                        <Image src={bestgloba11} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Supply Chain Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We offer custom Blockchain Supply Chain Solutions to help supply chain & logistics enterprises enhance security, control expenses, monitor goods provenance, and flag inefficiencies within existing workflows using counterfeit detection software, document digitization & automation, and digital certification & logistics tracking.</p>
                                        </div>
                                        <Image src={bestgloba12} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Retail & E-Commerce Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We create custom Blockchain Retail & E-Commerce Solutions to help retailers ensure product authentication, execute secure payment transactions, and enhance their data capabilities. We implement features for crypto payments, chain-of-custody data access, and cost reduction transactions.</p>
                                        </div>
                                        <Image src={bestgloba13} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Healthcare Solutions </h4>
                                            <p className="font_13 white fontsfregular linehight_2">We engineer Blockchain Healthcare Solutions to maintain HIPAA compliance and protect sensitive patient data for intuitive outcome-based contracts, clinical trial management, and patient health data exchange, thus increasing the quality of care by enabling new healthcare business models and ecosystems to evolve.</p>
                                        </div>
                                        <Image src={bestgloba14} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain Development Services Company</h4>
                                            <p className="font_13 white fontsfregular linehight_2">Our Blockchain solutions for real estate industry, offer enhanced pre-purchase due diligence, liquid asset implementation, marketplace data encryption, and ownership verification using automation processes to accelerate & trace land sales transactions while reducing the number of intermediaries and eliminating existing database silos.</p>
                                        </div>
                                        <Image src={bestgloba15} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Gaming Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We create Blockchain Gaming Solutions that are cryptographically programmed to provide enhanced security and protection against cheating, DDoS attacks, and system failures. Our solutions also verify and secure digital items, tokenized assets, and in-game history, allowing players to freely buy, sell, and trade assets.</p>
                                        </div>
                                        <Image src={bestgloba16} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>

                            </Slider>

                            :

                            <>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Finance & Banking Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We develop Blockchain Finance & Banking Solutions, including high-speed algorithmic trading platforms for trading, risk management & RPA platforms for banking, and P2P & SME lending platforms for loan management, along with developing solutions for payment processing, international money transfers, and e-wallets.</p>
                                        </div>
                                        <Image src={bestgloba11} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Supply Chain Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We offer custom Blockchain Supply Chain Solutions to help supply chain & logistics enterprises enhance security, control expenses, monitor goods provenance, and flag inefficiencies within existing workflows using counterfeit detection software, document digitization & automation, and digital certification & logistics tracking.</p>
                                        </div>
                                        <Image src={bestgloba12} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Retail & E-Commerce Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We create custom Blockchain Retail & E-Commerce Solutions to help retailers ensure product authentication, execute secure payment transactions, and enhance their data capabilities. We implement features for crypto payments, chain-of-custody data access, and cost reduction transactions.</p>
                                        </div>
                                        <Image src={bestgloba13} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Healthcare Solutions </h4>
                                            <p className="font_13 white fontsfregular linehight_2">We engineer Blockchain Healthcare Solutions to maintain HIPAA compliance and protect sensitive patient data for intuitive outcome-based contracts, clinical trial management, and patient health data exchange, thus increasing the quality of care by enabling new healthcare business models and ecosystems to evolve.</p>
                                        </div>
                                        <Image src={bestgloba14} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain Development Services Company</h4>
                                            <p className="font_13 white fontsfregular linehight_2">Our Blockchain solutions for real estate industry, offer enhanced pre-purchase due diligence, liquid asset implementation, marketplace data encryption, and ownership verification using automation processes to accelerate & trace land sales transactions while reducing the number of intermediaries and eliminating existing database silos.</p>
                                        </div>
                                        <Image src={bestgloba15} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.deve}>
                                        <div>
                                            <h4 className="fontgilroybold white font_15">Custom Blockchain <br />
                                                Gaming Solutions</h4>
                                            <p className="font_13 white fontsfregular linehight_2">We create Blockchain Gaming Solutions that are cryptographically programmed to provide enhanced security and protection against cheating, DDoS attacks, and system failures. Our solutions also verify and secure digital items, tokenized assets, and in-game history, allowing players to freely buy, sell, and trade assets.</p>
                                        </div>
                                        <Image src={bestgloba16} className="img-fluid" alt='bitswits' />
                                    </div>
                                </Col>
                            </>
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CustomBlockchainSolutions;
