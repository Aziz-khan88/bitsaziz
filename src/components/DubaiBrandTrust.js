import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/DubaiBrandTrust.module.css"
// Swiper
import { register } from 'swiper/element/bundle';
import 'swiper/css';
// Images
import BrandOne from "media/newdubai/single-brands.png"
import BrandTwo from "media/newdubai/single-brands1.png"

const DubaiBrandTrust = () => {

    return (
        <>
            <section className={styles.brandTrustSec}>
                <div className={`${styles.overFlow} container`}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <p>World-Renowned</p>
                                <h2>Brands Trust Us</h2>
                            </div>
                            <div className={styles.brands}>
                                <div>
                                    <Image src={BrandOne} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                    <Image src={BrandTwo} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                    <Image src={BrandOne} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                    <Image src={BrandTwo} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiBrandTrust
