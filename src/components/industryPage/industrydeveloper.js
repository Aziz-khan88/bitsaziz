"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/industry/banner.module.css"
import Slider from "react-slick";
import IMG01 from "media/industry/img_01.svg"
import IMG02 from "media/industry/img_02.svg"
import IMG03 from "media/industry/img_03.svg"
import IMG04 from "media/industry/img_04.svg"
import Image from 'next/image';
import Link from 'next/link';

const industrydeveloper = () => {

    const data = [
        { title: `Customized Medical Solutions`, text: 'We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater efficiency in', img: IMG01 },
        { title: `Robust Patient Data Management`, text: 'We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater efficiency in', img: IMG02 },
        { title: `Enhanced Patient-Doctor Communication`, text: 'We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater efficiency in', img: IMG03 },
        { title: `Medical Treatment Automation`, text: 'We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater efficiency in', img: IMG04 },
    ];
    var industrySlider = {
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4.6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3.8,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3.4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.8,
                }
            },
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 3.6,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.8,
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 1.9,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className={styles.IndustrySec}>
            <Container fluid>
                <Row>
                    <Col xxl={7} xl={8} lg={12} md={12} className="text-center m-auto">
                        <h2 className="manrope font-bold mb-xl-3">Software/Apps We Develop For Industries</h2>
                        <p className="font16 fw500 manrope mb-4 mb-md-5 pb-xxl-3">We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX  app design. We bring your iOS app ideas to life by using our comprehensive</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slider {...industrySlider} className={`industrySlider ${styles.industrySlider}`}>
                            {data.map((item, index) => (
                                <div className={styles.industry_items} key={index}>
                                    <div className={styles.item_list}>
                                        <div className={styles.img_item}>
                                            <Image src={item?.img} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <div className={styles.txt_item}>
                                            <h4 className="font-bold manrope">{item?.title}</h4>
                                            <p className="font16 fw500 manrope">{item?.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
                <Row>
                    <Col className='m-auto'>
                        <Link href='#' className={`${styles.button_main}`}>Let’s Discuss Your Project</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default industrydeveloper