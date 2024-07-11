import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Partners.module.css"
// ==== Images
import Partners from 'media/videoexplainer/trusted-logo.png'

const Partner = () => {
    return (
        <>
            <section className={styles.partnerSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <Image src={Partners} alt='Bitswits' className='d-block mx-auto' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Partner
