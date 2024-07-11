import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SmartTech.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SmartTech = (props) => {

    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 480) {
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
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    }
    var awardslogo1 = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    }
    return (
        <>
            <section className={`${styles[props.assignClass]}`}>
                <Container>
                    <Row className="gx-5 gy-4 w-100 mx-auto">
                        <Col lg={12}>
                            {props.title ?
                                props.title
                                :
                                ''
                            }
                            {props.bigtitle ?
                                props.bigtitle
                                :
                                ''
                            }
                            {props.para ?
                                props.para
                                :
                                ''
                            }
                        </Col>

                        {isSliderActive ?
                            <>
                                <Col lg={12} className={styles.newsize}>
                                    <p className="font_30 fontsfheavy white mb-0 mt-2">{props.sec1title}</p>
                                </Col>
                                <Slider {...awardslogo} className="pt-sm-4">
                                    {props.sec.map((item, index) => (
                                        <Col lg={4}>

                                            <div className={styles.deve} key={index}>
                                                <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                                <div>
                                                    <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                    <p className="font_13 white fontsfregular linehight_2">{item.para4}</p>
                                                </div>

                                            </div>


                                        </Col>
                                    ))}
                                </Slider>
                                <Col lg={12} className={styles.newsize}>
                                    <p className="font_30 fontsfheavy white mb-3 mt-3">{props.sec2title}</p>
                                </Col>
                                <Slider {...awardslogo1} className="pt-4">

                                    {props.sec2.map((item, index) => (
                                        <Col lg={4}>

                                            <div className={styles.deve} key={index}>
                                                <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                                <div>
                                                    <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                    <p className="font_13 white fontsfregular linehight_2 mb-0">{item.para4}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Slider>

                            </>
                            :
                            <>
                                <Col lg={12}>
                                    <p className="font_30 fontsfheavy white mb-0 mt-2">{props.sec1title}</p>
                                </Col>
                                {props.sec.map((item, index) => (
                                    <Col lg={4}>

                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.para4}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                <Col lg={12}>
                                    <p className="font_30 fontsfheavy white mb-3 mt-3">{props.sec2title}</p>
                                </Col>

                                {props.sec2.map((item, index) => (
                                    <Col lg={4}>

                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.para4}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </>
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default SmartTech;
