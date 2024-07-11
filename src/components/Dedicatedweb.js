import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/Dedicatedweb.module.css'
//
import right1 from '/public/images/unlocking/1.png'
import right2 from '/public/images/unlocking/2.png'
import right3 from '/public/images/unlocking/3.png'
import right4 from '/public/images/unlocking/4.png'
import right5 from '/public/images/unlocking/5.png'
import right6 from '/public/images/unlocking/6.png'


const Dedicated = () => {
    return (
        <>
            <section className={styles.capomt}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='newchoose f-700 white t-center'>Full-service <span className='newfycolr'>Web App Development<br></br>  Company</span> Dedicated 
                                To Unlocking Your<br></br> Business Potential</h2>
                            <p className='f-13 t-center white f-500'>BitsWits leave no stone unturned when it comes to developing websites that celebrate marketing features, customization, and robustness that add value to your business. When partnering with us, you knock the opportunity to outweigh the marketing investment you made initially. From developing B2B and B2C to B2E websites, there is nothing our industry-trained developers can't build.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.dev}>
                                <h2 className='f-28 f-700 white t-center'> <span className='white'>Front-End</span> Web Development</h2>
                                <p className='f-13 t-center '>We specialize in building innovative, complex, user-centric, responsive front-end web solutions that look incredible on mobile devices and desktop screens.</p>
                                <div className={styles.front}>
                                    <Image quality={75} alt='BitsWits' src={right1} className="img-fluid" />
                                    <Image quality={75} alt='BitsWits' src={right2} className="img-fluid" />
                                    <Image quality={75} alt='BitsWits' src={right3} className="img-fluid" />
                                </div>
                                <a className={styles.get} href='javascript:$zopim.livechat.window.show();'>LET'S CONNECT</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.dev}>
                                <h2 className='f-28 f-700 white t-center'> <span className='white'>Back End</span> Web Development</h2>
                                <p className='f-13 t-center '>BitsWits render customized back-end solutions that process a large amount of data, operate seamlessly under heavy loads, and show absolutely no latency issues.</p>
                                <div className={styles.front}>
                                    <Image quality={75} alt='BitsWits' src={right4} className="img-fluid" />
                                    <Image quality={75} alt='BitsWits' src={right5} className="img-fluid" />
                                    <Image quality={75} alt='BitsWits' src={right6} className="img-fluid" />
                                </div>
                                <a className={styles.get} href='javascript:$zopim.livechat.window.show();'>LET'S CONNECT</a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Dedicated