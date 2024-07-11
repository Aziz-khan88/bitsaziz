import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/CaseBanner.module.css'


const CaseBanner = (props) => {
    return (
        <>
            <section className={`${styles.banner} ${styles[props.bannerClass]}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.banSec}>
                                <Image quality={90} src={props.banLogo} alt="BitsWits" className={`img-fluid`} />
                                <h1>{props.title}</h1>
                                <Image quality={90} src={props.banImg} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseBanner
