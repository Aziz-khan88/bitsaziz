import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/blockchain/leftContent.module.css';
//
import CTA from '../../components/blockchain/cta';

const LeftContent = (props) => {
    const starVid = {
        video: "https://player.vimeo.com/progressive_redirect/playback/961503901/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9c55ca5ebe05612901f5f5092d0cef7bffdc817bee58cf5f660c5d15574008c1"
    }
    return (
        <>
            <div className={`${styles[props.whychooseclass]}  ${styles.secPad}`}>
                <Container>
                    <Row className={`${styles.middle} gy-4`}>
                        <Col lg={6}>
                            <div className={styles.cube}>
                                <h2 className="fw700 f40 text-white mb-2">{props.title}</h2>
                                <p className='f15 text-white mt-3'>{props.text}</p>
                                {props.subtext ?
                                    <p className='font15 text-white mt-3'>{props.subtext}</p>
                                    :
                                    ''
                                }
                                <CTA number="1 312 379 5987"
                                    discuss="Hire Blockchain Developer" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.image}>
                                <div className='text-center'>
                                    {starVid && (
                                        <video className={`${styles.bgVideo} img-fluid`} width={500} autoPlay muted loop src={starVid.video} type="video/mp4"></video>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LeftContent