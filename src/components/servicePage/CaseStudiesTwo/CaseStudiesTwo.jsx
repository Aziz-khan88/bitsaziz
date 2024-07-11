"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/CaseStudies.module.css"
// Images
import CaseOne from "media/services/case-1.svg"
import CaseTwo from "media/services/case-2.svg"
import CaseThree from "media/services/case-3.svg"
import CaseFour from "media/services/case-4.svg"
import CaseFive from "media/services/case-5.svg"
import CaseSix from "media/services/case-6.svg"

const CaseStudies = () => {
    var caseSlider = {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <section className={`${styles.caseSec} overflow-hidden`}>
            <Row>
                <Col lg={12}>
                    <Slider {...caseSlider} className="caseSlider">
                        <div>
                            <Image src={CaseOne} alt='Bitswits' className='img-fluid w-100' />
                        </div>
                        <div>
                            <Image src={CaseTwo} alt='Bitswits' className='img-fluid w-100' />
                        </div>
                        <div>
                            <Image src={CaseThree} alt='Bitswits' className='img-fluid w-100' />
                        </div>
                        <div>
                            <Image src={CaseFour} alt='Bitswits' className='img-fluid w-100' />
                        </div>
                        <div>
                            <Image src={CaseFive} alt='Bitswits' className='img-fluid w-100' />
                        </div>
                        <div>
                            <Image src={CaseSix} alt='Bitswits' className='img-fluid w-100' />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </section>
    )
}

export default CaseStudies
