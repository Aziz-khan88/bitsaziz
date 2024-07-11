import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/EcommerceBenefits.module.css'


const EcommerceBenefits = () => {
    return (
        <>
            <section className={styles.benefits}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='font210 font-bold text-white'>Benefits</h2>
                            <p className='font20 text-white font-medium mb-3 ms-lg-3'>Of hiring the best eCommerce app builders in US;</p>

                            <div className={styles.lists}>
                                <div className={styles.itemsOne}>
                                    <h5 className='font24 font-bold text-center text-white'>Increased <br />
                                        Revenue</h5>
                                    <p className='font16 text-white'>Boosts financial growth</p>
                                </div>
                                <div className={styles.itemsSecond}>
                                    <h5 className='font24 font-bold text-center text-white'>Enhanced Customer <br />
                                        Experience</h5>
                                    <p className='font16 text-white'>Increases brand loyalty</p>
                                </div>
                                <div className={styles.itemsThree}>
                                    <h5 className='font24 font-bold text-center text-white'>Organized <br />
                                        Operations</h5>
                                    <p className='font16 text-white'>Improves Efficiency and Productivity</p>
                                </div>
                                <div className={styles.itemsfour}>
                                    <h5 className='font24 font-bold text-center text-white'>Higher Customer <br />
                                        Retention</h5>
                                    <p className='font16 text-white'>Ensures long-term relationships</p>
                                </div>
                                <div className={styles.itemsfive}>
                                    <h5 className='font24 font-bold text-center text-white'>Data-Driven <br />
                                        Insights</h5>
                                    <p className='font16 text-white'>Drives informed business decisions</p>
                                </div>
                                <div className={styles.itemsSix}>
                                    <h5 className='font24 font-bold text-center text-white'>Higher Conversion <br />
                                        Rate</h5>
                                    <p className='font16 text-white'>Maximizes sales performance</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceBenefits