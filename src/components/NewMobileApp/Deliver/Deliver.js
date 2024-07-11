import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/NewMobileApp/Deliver.module.css';
import icon1 from 'media/newmobileapp/icon1.png';
import icon2 from 'media/newmobileapp/icon2.png';
import icon3 from 'media/newmobileapp/icon3.png';
import Slider from 'react-slick';

const CardComponent = ({ activeIndex, setActiveIndex }) => {
    const [isMobile, setIsMobile] = useState(false);
    const cards = [
        {
            title: 'Clear Communication',
            content:
                'We have a transparent policy where we keep a direct and open line of communication. Trust and integrity are paramount for maximum ROI generation.',
        },
        {
            title: 'Customer-Centric Approach',
            content:
                'We empower you in all aspects of the process, thereby reinforcing the adage, ‘The customer is always right.’',
        },
        {
            title: 'Innovation and Excellence',
            content:
                'We pride ourselves on being industry-leading pioneers. Our software development services are second to none.',
        },
    ];

    const handleCardHover = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`d-flex align-items-center ${styles.cardContainer}`}>
            {cards.map((card, index) => (
                <div className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
                    key={index}
                    onMouseEnter={() => handleCardHover(index)}>
                    <div className={styles.imgBox}>
                        {index === 0 && <Image src={icon1} alt='BitsWits' className='img-fluid' />}
                        {index === 1 && <Image src={icon2} alt='BitsWits' className='img-fluid' />}
                        {index === 2 && <Image src={icon3} alt='BitsWits' className='img-fluid' />}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                </div>
            ))}
        </div>
    );
};

const Deliver = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    var deliverSlider = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        pauseOnHover: true,
    };
    return (
        <section className={styles.deliver}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>How  <span>Bitswits</span>  Guarantees Excellence</h2>
                    </Col>
                    <Col lg={12}>
                        <div className={`d-none d-md-block ${styles.mainDeliver}`}>
                            <CardComponent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                        </div>
                        <Slider {...deliverSlider} className='d-block d-md-none'>
                            <div>
                                <div className={`${styles.card}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon1} alt='BitsWits' className='img-fluid' /> 
                                    </div>
                                    <h3>Clear Communication</h3>
                                    <p>We have a transparent policy where we keep a direct and open line of communication. Trust and integrity are paramount for maximum ROI generation.</p>
                                </div>
                            </div>
                            <div>
                                <div className={`${styles.card}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Customer-Centric Approach</h3>
                                    <p>We empower you in all aspects of the process, thereby reinforcing the adage, ‘The customer is always right.’</p>
                                </div>
                            </div>
                            <div>
                                <div className={`${styles.card}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon3} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Innovation and Excellence</h3>
                                    <p>We pride ourselves on being industry-leading pioneers. Our software development services are second to none.</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.btns}>
                            <a href="#form" className='pink'>Let’s Discuss Your Project</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Deliver;