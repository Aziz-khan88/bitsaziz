import React from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Work.module.css"
// Images
import WorkImage from "media/videoexplainer/process-inner-bg.png"

const Work = () => {
    return (
        <>
            <section className={styles.workSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <h2>How We Work</h2>
                            <p>We've simplified our video production process as much as possible thanks to our years of experience. We have got field experts in each process of video making.</p>
                            <Image src={WorkImage} alt='Bitswits' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Work
