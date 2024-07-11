import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Static.module.css"
import Image from 'next/image'
// Images
import staticPartical from "media/videoexplainer/statistic-side-img.png"

const Static = () => {
    return (
        <>
            <section className={styles.staticSec}>
                <div className={`${styles.mainDiv} container`}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>Proven Statistics of Explainer Videos LLC</h2>
                                <p>There is an immense amount of product animation & graphic content out there but here at Video Explain Art , we make sure our animation service & work stands out.</p>
                            </div>
                            <div className={styles.counterSec}>
                                <Row className={styles.rowGap}>
                                    <Col md={6} lg={3}>
                                        <div className={styles.statsCounter}>
                                            <h5><span class="count">4</span><sup>+</sup></h5>
                                            <h4>Years Of<br />Experience</h4>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <div className={styles.statsCounter}>
                                            <h5><span class="count">1600</span><sup>+</sup></h5>
                                            <h4>Videos <br /> Delivered</h4>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <div className={styles.statsCounter}>
                                            <h5><span class="count">1200</span><sup>+</sup></h5>
                                            <h4>Clients<br />Across The World</h4>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <div className={styles.statsCounter}>
                                            <h5><span class="count">15</span><sup>+</sup></h5>
                                            <h4>Million Views</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.secPartical}>
                                <Image src={staticPartical} alt='Bitswits' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Static
