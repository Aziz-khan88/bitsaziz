import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/SmallBannerSec.module.css"
// Images
import flagIcon from "/public/videoexplainer/flag-icon.png";
import CTAPart from "media/videoexplainer/cta-rht-img.png"
const SmallBanner = () => {
    return (
        <>
            <section className={styles.SmallBannerSec}>
                <div className='container'>
                    <Row>
                        <Col lg={9}>
                            <h2>
                                Start Displaying Your Brand with Amazing Animated Videos
                            </h2>
                            <p>
                                Spread profound message and scale up your business with our animated video services today!
                            </p>
                            <div className={styles.secBtns}>
                                <div className='btnOne'>
                                    <Link href="javascript:;" className={styles.btnOne}>
                                        Get Started
                                    </Link>
                                </div>
                                <div className='btnTwo'>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.btnTwo}>
                                        Live Chat
                                    </a>
                                </div>
                                <div className='number'>
                                    <a href="tel:833-666-6684" className={styles.number}>
                                        <span>
                                            <Image src={flagIcon} alt='Bitswits' className='me-2' />
                                        </span>
                                        +1-833-666-6684
                                    </a>
                                </div>
                            </div>
                            <div className={`${styles.partical} animation lg:block hidden`}>
                                <Image src={CTAPart} alt='particale-Image' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default SmallBanner
