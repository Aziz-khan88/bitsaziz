import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SmallBanner.module.css"
// Images
import Image from 'next/image'

const SmallBanner = ({ content }) => {
    console.log("aziz", content)
    return (
        <section className={styles.SmallBannerSec} >
            <Container>
                <div className={styles.gredientBg} >
                    <Row className='align-items-center'>
                        <Col lg={6} className='p-0'>
                            <div className={styles.txt}>
                                <h2 className='manrope font-bold text-white'>
                                    {content?.title}
                                </h2>
                                <p className='manrope font-medium font16 text-white'>
                                    {content?.txt}
                                </p>
                                <div className={styles.secBtn}>
                                    <a href="javascript:;" className='manrope'>
                                        Get Free Consultation
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='d-lg-block d-none'>
                            <div className={styles.secImg}>
                                <Image src={content?.img} alt='Bitswits' className='img-fluid ms-auto d-block' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default SmallBanner
