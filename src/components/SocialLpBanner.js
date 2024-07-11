import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/SocialLpBanner.module.css";


const SocialLpBanner = (props) => {

    return (
        <>
            <section className={styles[props.newHomeBgprops]} >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.smTxt}>
                                <h3>Creative and Customized Solutions</h3>
                                <h1 className='font55home'>Social Media App Development</h1>
                                <p>Crafted To Perfection & Delivered With Precision</p>
                            </div>
                            <div className={styles.smImg}>
                                <video autoPlay loop muted src='https://player.vimeo.com/progressive_redirect/playback/961572827/rendition/720p/file.mp4?loc=external&log_user=0&signature=1797f6ba34e2cd58bfbd6dee6335a15753c8111912c2950d87e671a182496677' className={styles.BanVideo}></video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SocialLpBanner