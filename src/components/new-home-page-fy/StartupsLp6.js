import React from 'react'
import Image from 'next/image';
import styles from "./Startups.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//images
import startups from '/public/images/startups/startups.png'


export default function StartupsLp6(props) {
    return (
        <>
            <section className={styles[props.startups]}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h2 className="white font50 f-700">
                                <span className={styles.from}>Startups</span> From <br></br>
                                Ideas To IPO
                            </h2>
                        </Col>
                        <Col lg={6}>
                            <p className='white font16 f-400'>When it comes to startups we offer a complete range of services to help entrepreneurs succeed. From ground-zero to a booming IPO. Here’s how we do it:</p>
                        </Col>
                        <Col lg={12}>
                            <Image src={startups} alt='BitsWits' className='img-fluid pb-1' />
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

