import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Everyone.module.css";
//images
import banImg1 from '/public/images/projectprocess/phon.png'


export default function Everyone() {

    return (
        <>
            <section className={styles.hook}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={10}>
                            <div className={styles.dev}>
                                <div className={styles.eve}>
                                    <h2 className="f-30  f-600 white">Mobile Application Development Company <br></br>
                                        <span className='fw800'>For Everyone Out There</span> </h2>
                                    <p>BitsWits provides mobile app development service in the USA for every industry with innovation and efficiency. We create customized mobile solutions for various industries, from e-commerce to the healthcare or gaming industry. Our skilled app developers are determined to come up with mobile apps that meet the unique needs of every client and their business.</p>
                                    <a className={styles.btnpost} href='javascript:$zopim.livechat.window.show();'>Let's Discuss</a>

                                </div>
                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

