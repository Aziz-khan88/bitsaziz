"use client"
import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Banner.module.css"
// Images 
import BannerImg from "media/services/banner-img.svg"
import logos from "media/services/logos.svg"

const BannerThree = ({ content }) => {

    return (
        <section className={`${styles.bannerSec} ${styles.BannerThree} ${styles.bannerOne}`}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7} xl={6} className='p-lg-0'>
                        <div className="txt">
                            <p className={`mb-2 ${styles.firstPara} manrope font-bold`}>Quickly – Efficiently – Effortlessly</p>
                            <h1 className='text-black mb-3 mb-lg-4 manrope font-bold'>Empower Your Business With Top-Class Software Development</h1>
                            <p className='font16 text-black fw500 mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its client’s goals, and internal teams. We’re a software development company that ensures</p>
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
                        <Image src={BannerImg} alt='Bitswits' className='img-fluid d-lg-block d-none' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerThree
