import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/CaseOvercoming.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CaseOvercoming = (props) => {

    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.Overcoming}>
                <Container>
                    <Row className='align-items-center g-4 d-none d-lg-flex'>
                        {props.appData.map((data, index) => (
                            <Col lg={4} key={index}>
                                <div key={index} className={styles.app}>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* For Mobile */}
                    <div className='d-block d-lg-none'>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {props.appData.map((data, index) => (
                                <div key={index}>
                                    <div key={index} className={styles.app}>
                                        <h3>{data.title}</h3>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CaseOvercoming;
