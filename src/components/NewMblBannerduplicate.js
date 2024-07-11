import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblBannerdulicate.module.css";
//
import BannerImage from "@/public/andriodapplication/andriod.png"
//
import NewAddress2 from './NewAddress2';
import HomeBannerSlider from './HomeBannerSlider';


const NewHomeBanner = () => {
    return (
        <>
            <section className={`${styles.newHomeBg} overflow-hidden`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} ${styles.just2} text-center font25 font-regular mb-2 mb-lg-0`}>A TOP</p>
                            <h3 className={`${styles.develop} text-center f-50 font-bold mb-1`}>
                                <span className='grdiant d-block'>MOBILE APP DEVELOPMENT</span>
                                <span className='d-block'>Company At Your Service</span>
                            </h3>
                            <p className={`${styles.just} text-center f-13 font-medium mb-4 mb-lg-0`}>We deliver great results, on time and on budget. Contact us to start talking about your project today!</p>
                            <div className={styles.pont}>
                                <a className={styles.about} href="tel:8335006007">LET'S CONNECT</a>
                            </div>
                            <div className={styles.secImage}>
                                <Image quality={75} alt='BitsWits' src={BannerImage} className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={styles.postnuture}>
                    <HomeBannerSlider />
                </div>
                <div className={`${styles.bannerform} blkgrdiant pt-4 pt-lg-5 pb-lg-3 pb-4`}>
                    <NewAddress2 />
                </div>
            </section>
        </>
    )
}

export default NewHomeBanner