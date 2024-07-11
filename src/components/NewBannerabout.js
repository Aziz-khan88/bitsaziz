import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewBannerabout.module.css";
//
import HomeBannerSlider from './HomeBannerSlider';

const NewBanner = () => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col lg={10} className='mx-auto'>
                            <div className={styles.content}>
                                <h1 className={`${styles.develop} text-center f-60 font-bold`}>About Us</h1>
                                <p className='white center mb-0'>For the past decades, BitsWits is creating smooth user experiences and app designs that drive profitability for the businesses nationwide.
                                    The top app developers in US provide the best web, mobile, and Web3 design and development solutions for better metrics and ROI.</p>
                                <p className='white center'>Got an App Idea? Start a Conversation with Our Experts!</p>
                                <div className={styles.pont}>
                                    <a className={styles.about} href="javascript:$zopim.livechat.window.show();">Let's Connect</a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <HomeBannerSlider />
        </>
    )
}

export default NewBanner