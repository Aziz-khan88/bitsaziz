"use client"
import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Banner.module.css"
// Images 
import BannerImg from "media/industry/imgSlider.webp"
import BgImg from "media/industry/bgImg.png"
import logos from "media/services/logos.svg"

const BannerIndustry = ({ content }) => {

    return (
        <section className={`${styles.bannerSec} ${styles.BannerThree} ${styles.bannerOne} ${styles.BannerIndustry}`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7} xl={6} className='p-lg-0'>
                        <div className="txt">
                            <h1 className='text-black mb-3 mb-lg-4 manrope font-bold'>Healthcare <span>App Development</span> Company</h1>
                            <p className='font16 text-black fw500 mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater efficiency in We tailor custom medical software solutions</p>
                            <div className="btn d-flex align-items-center gap-4 px-0">
                                <a href="javascript:;" className={`${styles.demoBtn} font-bold manrope`}>
                                    Get a Free Demo
                                </a>
                                <a href="javascript:;" className={`${styles.portfolioBtn} font-bold manrope`}>
                                    See Portfolio
                                </a>
                            </div>
                        </div>
                        <div className="logos pt-5">
                            <Image src={logos} alt='Bitswits' className='img-fluid' />
                        </div>
                    </Col>
                    <Col lg={5} xl={6}>
                        <Image src={BannerImg} alt='Bitswits' className='img-fluid d-lg-block d-none ms-auto' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerIndustry
