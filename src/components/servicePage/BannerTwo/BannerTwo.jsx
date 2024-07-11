import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Banner.module.css"

const BannerTwo = () => {
    return (
        <section className={`${styles.bannerSec} ${styles.bannerTwo}`}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center">
                            <p className={`mb-2 ${styles.firstPara} manrope font-bold`}>Quickly – Efficiently – Effortlessly</p>
                            <h1 className='text-white mb-3 mb-lg-4 manrope font-bold'>Empower Your Business With <br className='d-lg-block d-none' />
                                Top-Class Software Development</h1>
                            <p className='font16 text-white font-medium mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>
                                We’re a software development company that ensures its expertise extends to offer a seamlessly productive <br className='d-lg-block d-none' /> and growth-oriented partnership to its client’s goals, and internal teams.
                            </p>
                            <div className="btn d-flex align-items-center justify-center gap-4 px-0">
                                <a href="javascript:;" className={`${styles.demoBtn} font-bold manrope mx-auto`}>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerTwo
