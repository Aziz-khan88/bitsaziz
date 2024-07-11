import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/CaseGoal.module.css'


const CaseGoal = (props) => {
    return (
        <>
            <section className={`${styles.goal} ${styles[props.goalClass]}`}>
                <Container>
                    <Row className={`${styles.goalRow} align-items-center px-3`}>
                        <Col lg={7}>
                            <div className={`${styles.secTxt}`}>
                                <h3>{props.title}</h3>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={`${styles.secImg}`}>
                                <Image quality={90} src={props.golImg} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseGoal
