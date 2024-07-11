import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WorkBanner.module.css'


const WorkBanner = () => {
    return (
        <>
            <section className={`${styles.banner}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.banSec}>
                                <h1>Our Portfolio</h1>
                                <p>We help our clients grow with cutting-edging technologies, extravagant <br /> designs, and innovative software solutions.</p>
                                <div className={styles.pont}>
                                    <a className={styles.about} href="tel:8335006007">LET'S CONNECT</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WorkBanner
