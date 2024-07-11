import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/CaseServices.module.css";
//
import tick from '/public/images/case-studies/tick.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CaseServices = (props) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.services}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <div className={styles.content}>
                                <h3 className='newchoose'>{props.title}</h3>
                                <p>
                                    <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                    <span>{props.point1}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                    <span>{props.point2}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                    <span>{props.point3}</span>
                                </p>
                            </div>
                        </Col>
                        {isMobile ? (
                            <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                                <div className={styles.servImg}>
                                    <Image quality={90} src={props.service1} alt="BitsWits" className={`img-fluid`} />
                                </div>
                                <div className={styles.servImg}>
                                    <Image quality={90} src={props.service2} alt="BitsWits" className={`img-fluid`} />
                                </div>
                                <div className={styles.servImg}>
                                    <Image quality={90} src={props.service3} alt="BitsWits" className={`img-fluid`} />
                                </div>
                                <div className={styles.servImg}>
                                    <Image quality={90} src={props.service4} alt="BitsWits" className={`img-fluid`} />
                                </div>
                                <div className={styles.servImg}>
                                    <Image quality={90} src={props.service5} alt="BitsWits" className={`img-fluid`} />
                                </div>
                            </Slider>
                        ) : (
                            <Col lg={12}>
                                <div className={styles.servImg}>
                                    <Image quality={90} src={props.service1} alt="BitsWits" className={`img-fluid`} />
                                    <Image quality={90} src={props.service2} alt="BitsWits" className={`img-fluid`} />
                                    <Image quality={90} src={props.service3} alt="BitsWits" className={`${styles.serImg3} img-fluid`} />
                                    <Image quality={90} src={props.service4} alt="BitsWits" className={`img-fluid`} />
                                    <Image quality={90} src={props.service5} alt="BitsWits" className={`img-fluid`} />
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseServices
