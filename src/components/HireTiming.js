import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/HireTiming.module.css'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import time1 from '/public/images/hire-page/mobile/full-time.png'
import time2 from '/public/images/hire-page/mobile/half-time.png'
import time3 from '/public/images/hire-page/mobile/hour-hire.png'


const timeData = [
    {
        imageSrc: time1,
        title: 'Full Time Hiring',
    },
    {
        imageSrc: time2,
        title: 'Part Time Hiring',
    },
    {
        imageSrc: time3,
        title: 'Hourly Hiring',
    },
];

const contentData = [
    {
        title: 'Duration',
        options: ['8 Hours', '4 Hours', 'Hour Basis'],
    },
    {
        title: 'Hiring Period (Min)',
        options: ['1 Week', '48 hours', '24 hours'],
    },
    {
        title: 'Methodology',
        options: ['', 'Agile', ''],
    },
    {
        title: 'Communication',
        options: ['', 'Phone, Chat, E-mail', ''],
    },
    {
        title: 'Skills',
        options: ['', '', 'Programming Languages, Mobile App Frameworks, UI/UX Design', ''],
    },
];


const HireTiming = () => {

    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={`${styles.timing}`}>
                <Container fluid>
                    <Row>
                        <Col lg={10} className='mx-auto'>
                            <h2 className='newchoose'>Engagement Models to Hire <br /> <span>Mobile App Developers</span></h2>
                            <p>The NineHertz has variety of engagement models of hiring mobile app developers as per your convenience. Our sole purpose is to build the perfect solutions for your requirements.</p>
                        </Col>
                    </Row>

                    <section className={`${styles.timingBox}`}>
                        <Row className='justify-content-end'>
                            {timeData.map((option, index) => (
                                <Col lg={3} className='col-4' key={index}>
                                    <div className='text-center'>
                                        <Image src={option.imageSrc} alt='BitsWits' className='img-fluid' />
                                        <h4>{option.title}</h4>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <div className='mt-4 d-none d-lg-block'>
                            {contentData.map((content, index) => (
                                <Row className={styles.contentRow} key={index}>
                                    <Col lg={3}>
                                        <div className={styles.title}>{content.title}</div>
                                    </Col>
                                    {content.options.map((option, optionIndex) => (
                                        <Col lg={3} key={optionIndex}>
                                            <div className={`${styles.txt}`}>{option}</div>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </div>
                        {/* ======== Mobile =========== */}
                        <div className='mt-4 d-block d-lg-none'>
                            <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                                {contentData.map((content, index) => (
                                    <div key={index}>
                                        <Row className={styles.contentRow}>
                                            <Col lg={3}>
                                                <div className={styles.title}>{content.title}</div>
                                            </Col>
                                            {content.options.map((option, optionIndex) => (
                                                <Col lg={3} key={optionIndex}>
                                                    <div className={styles.txt}>{option}</div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </section>
                </Container>
            </section>

        </>
    )
}

export default HireTiming
