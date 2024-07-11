import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SmartContract.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SmartContract = (props) => {

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

                            <Slider {...awardslogo} className="pt-4 mt-0">
                                {props.sec.map((item, index) => (
                                    <Col lg={4}>

                                        <div className={styles.deve} key={index}>

                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                <p className="font_13 white fontsfregular linehight_2">{item.para4}</p>
                                            </div>
                                            <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                        </div>


                                    </Col>
                                ))}
                            </Slider>
                            :
                            <>
                                {props.sec.map((item, index) => (
                                    <Col lg={4}>

                                        <div className={styles.deve} key={index}>

                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                <p className="font_13 white fontsfregular linehight_2">{item.para4}</p>
                                            </div>
                                            <Image src={item.img1} className="img-fluid" alt="bitswits" />
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

export default SmartContract;
