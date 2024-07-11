"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/industry/banner.module.css"
import Link from 'next/link';


const HealthCareServices = () => {

    const data = [
        { title: `Native<br />Mobile App Development`, text: 'We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its' },
        { title: `Progressive<br />Web App Development`, text: 'We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its' },
        { title: `Wearables<br />& Embedded Software`, text: 'We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its' },
        { title: `Hybrid<br />Mobile App Development`, text: 'We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its' },
        { title: `Native<br />Mobile App Development`, text: 'We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its' },
        { title: `Progressive<br />Web App Development`, text: 'We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its' },
    ];




    return (
        <section className={styles.IndustrySec}>
            <Container>
                <Row>
                    <Col xxl={9} xl={10} lg={12} md={12} className="text-center m-auto">
                        <h2 className="manrope font-bold mb-xl-3">Healthcare App Development Services We Offer</h2>
                        <p className="font16 fw500 manrope mb-4 mb-md-5 pb-xxl-3">We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX  app design. We bring your iOS app ideas to life by using our comprehensive.</p>
                    </Col>
                </Row>
                <Row>
                    {data.map((item, index) => (
                        <Col xl={4} lg={4} md={6} key={index}>
                            <div className={styles.services_item} >
                                <h4 className="font-bold manrope" dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p className="font16 fw500 manrope">{item.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col className='m-auto'>
                        <Link href='#' className={styles.button_main}>Let’s Discuss Your Project</Link>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default HealthCareServices