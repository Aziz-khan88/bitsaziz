import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../styles/HomeLocation.module.css'
const HomeLocation = () => {

    const video = {
        FooterVideo: "https://player.vimeo.com/progressive_redirect/playback/961449544/rendition/1080p/file.mp4?loc=external&log_user=0&signature=b0944fc2ff242ed106294e79016fae07366f84c63150fc864b42203ef7420740"
    }

    return (
        <>
            <section className={styles.locations}>
                <div className={styles.upside}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <p className="f-30 f-montserrat f-700 newfycolr f-uppercase mb-0 text-center">
                                    Areas We Serve
                                </p>
                                <h3 className="newchoose f-playfair white f-700 text-center mb-0">
                                    Our Locations Globally
                                </h3>
                            </Col>
                            <Col lg={12}>
                                {video && (
                                    <video autoPlay loop muted src={video.FooterVideo} type="video/mp4" className='w-100 h-100'></video>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default HomeLocation