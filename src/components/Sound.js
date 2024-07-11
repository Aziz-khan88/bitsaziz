import React from 'react'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Sound.module.css";

const Sound = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className={styles.match}> <span>Sound</span> Like A Match?</h2>
                            <a href="javascript:$zopim.livechat.window.show();" className={styles.caht}>Let's Chat</a>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Sound