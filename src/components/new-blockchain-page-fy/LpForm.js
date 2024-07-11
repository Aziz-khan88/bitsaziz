import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm.module.css";


const LpForm = (props) => {
    return (
        <>
            <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
                <Container className={styles.appios}>
                    <Row className='align-items-start'>
                        <Col lg={12}>
                            <div className={styles.make}>
                                <form className={styles.formsbanner}>
                                    <div className={`mb-lg-4 pb-1 text-center`}>
                                        <h4 className='letterspaceblock text-white font-bold mb-3'>Turn Your App Idea Into An App </h4>
                                    </div>
                                    <Row>
                                        <Col lg={3}>
                                            <div>
                                                <input type='text' className={styles.forminput} placeholder='Name' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='email' className={styles.forminput} placeholder='Email' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <button className={`${styles.book} bitsForm`}>Submit</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>

                    <div className={styles.para}>
                        <p className='mb-0 fontgilroygilroygilroyregular'>
                            At Bitswits, we're pioneers in blockchain innovation. Our dedicated team crafts cutting-edge solutions that redefine the digital landscape. From smart contracts to decentralized apps, we turn your vision into a global powerhouse. Join us for a transformative journey where technology meets excellence, and your success in the blockchain realm is our priority.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpForm
