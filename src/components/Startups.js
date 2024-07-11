import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Startups.module.css";
//images
import startups from '/public/images/startups/startups.png'


export default function Startups(props) {
    return (
        <>
            <section className={styles[props.startups]}>
                <Container>
                    <Row className='align-items-center'>

                        <Col lg={6}>
                            <h2 className="white f-60 f-700">
                                <span className={styles.from}>Startups</span> From <br></br>
                                Ideas To IPO
                            </h2>
                        </Col>
                        <Col lg={6}>
                            <p className='white font16 f-400'>When it comes to startups we offer a complete range of services to help entrepreneurs succeed. From ground-zero to a booming IPO. Here’s how we do it:</p>
                        </Col>
                        <Col lg={12}>
                            <Image src={startups} alt='BitsWits' className='img-fluid' />
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}

