import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Creative.module.css";
//
import BannerImage from "@/public/images/projectprocess/nopot.png"


const Creative = () => {

    return (
        <>
            <section className={styles.newHomeBg}>

                <Container className={styles.posting}>

                    <Row>
                        <Col xl={12} className={styles.toge}>
                            <h2 className="black f-40 f-600 center">Let's <span className="f-700">Works</span> Together <br></br> Let's <span className="f-700">Creative</span> </h2>
                        </Col>
                        <div className={` ${styles.flip} d-flex justify-content-center align-items-center`}>
                            <Image src={BannerImage} className="img-fluid dropshadow" alt="BitsWits" />
                        </div>
                        <div className={styles.btncall}>
                            <h4>START <br></br> A PROJECT?</h4>
                            <a href="tel:8335006007" className={styles.call}>Call Now: (833) 500-6007</a>
                            <div className="pt-3">
                                <a href="javascript:$zopim.livechat.window.show();" className={styles.chat}>Start Live Chat</a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Creative