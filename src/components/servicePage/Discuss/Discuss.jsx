import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Discuss.module.css"

const Discuss = () => {
    return (
        <section className={styles.discussSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center">
                            <h2 className='manrope font-bold mb-3'>Have A Project To Discuss?</h2>
                            <p className='font16 fw500 manrope mb-4 mb-md-5 pb-xxl-3'>We’re a software development company that ensures its expertise extends to offer <br className='d-lg-block d-none ' /> a seamlessly productive and growth-oriented partnership</p>
                        </div>
                        <div className={styles.form}>
                            <form action="javascript:;">
                                <div className={`${styles.mainDiv} name`}>
                                    <input type="text" placeholder='Name' className='manrope' />
                                </div>
                                <div className={`${styles.mainDiv} email`}>
                                    <input type="email" placeholder='Email' className='manrope' />
                                </div>
                                <div className={`${styles.mainDiv} phone`}>
                                    <input type="number" placeholder='Phone Number' className='manrope' />
                                </div>
                                <div className={`${styles.mainDiv} button`}>
                                    <button className='manrope bitsForm'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Discuss
