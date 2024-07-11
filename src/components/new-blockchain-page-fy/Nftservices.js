import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Nftservices.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import videopic from '/public/nftpost/bg.png'


const Nftservices = (props) => {


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
                    <Row className="gx-5 gy-4 w-100">
                        <Col lg={12}>
                            <h3 className="font_30 fontsfheavy newfycolr">NFT Marketplace Development</h3>
                            <h2 className="newchoose letterspace_1 font-bold white">Custom NFT Marketplace Development</h2>
                            <p className="font_17 white fontsfregular pt-2 pb-2">We offer custom designs and development services for NFT marketplaces where digital assets of users are minted to NFTs and sold or <br /> auctioned to other individuals.</p>
                        </Col>

                        {isSliderActive ?

                            <Slider {...awardslogo} className="pt-4 mt-0">
                                <div className={styles.blocknew}>

                                    <div>
                                        <h3 className="font_20 newfycolr font-bold">Blockchain Security</h3>
                                        <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.</p>
                                    </div>
                                </div>
                                <div className={`${styles.blocknew}`}>

                                    <div>
                                        <h3 className="font_20 newfycolr font-bold">Advanced NFT Functionality</h3>
                                        <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>Create an NFT Marketplace where cryptocurrency investors can access real-time data about the cost, payment methods, and the length of the auction during which bidding is allowed as well as the trading history. Our NFT developers create showcases of the top NFT’s being traded on your platform using custom categorization systems including trading volume, average price, and number of NFT investors.</p>
                                    </div>
                                </div>
                                <div className={`${styles.blocknew}`}>

                                    <div>
                                        <h3 className="font_20 newfycolr font-bold ">Opensea SDK</h3>
                                        <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We can develop marketplaces using the OpenSea SDK infrastructure enabling innovative functionality with your custom design and the ability to sell items for your own ERC 20. Our NFT developers build marketplaces that allow you to create ERC-721 or ERC-1155 (semi-fungible) items. With OpenSea SDK, you don’t have to deploy your own smart contracts.</p>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <>
                                <Col lg={6}>


                                    <div className={styles.blocknew}>

                                        <div>
                                            <h3 className="font_20 newfycolr font-bold">Blockchain Security</h3>
                                            <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.</p>
                                        </div>
                                    </div>
                                    <div className={`${styles.blocknew} pt-4`}>

                                        <div>
                                            <h3 className="font_20 newfycolr font-bold">Advanced NFT Functionality</h3>
                                            <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>Create an NFT Marketplace where cryptocurrency investors can access real-time data about the cost, payment methods, and the length of the auction during which bidding is allowed as well as the trading history. Our NFT developers create showcases of the top NFT’s being traded on your platform using custom categorization systems including trading volume, average price, and number of NFT investors.</p>
                                        </div>
                                    </div>
                                    <div className={`${styles.blocknew} pt-4`}>

                                        <div>
                                            <h3 className="font_20 newfycolr font-bold ">Opensea SDK</h3>
                                            <p className={`${styles.create} font_15 fontsfregular linehight_1 white`}>We can develop marketplaces using the OpenSea SDK infrastructure enabling innovative functionality with your custom design and the ability to sell items for your own ERC 20. Our NFT developers build marketplaces that allow you to create ERC-721 or ERC-1155 (semi-fungible) items. With OpenSea SDK, you don’t have to deploy your own smart contracts.</p>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        }

                        <Col lg={6}>
                            <div className={styles.intlong}>
                                <Image src={videopic} alt="bitswits" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Nftservices;
