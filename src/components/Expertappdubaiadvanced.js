import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertappdubaiadvanced.module.css";


export default function Expertappdubaiadvanced(props) {
    return (
        <>
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2'>
                        <Col lg={12} className={styles.newtown}>
                            <h2 className='text-black  f-700 center mb-3 mb-md-5'>
                                {props.title}
                            </h2>
                        </Col>
                        {props.appData.map((app, index) => (
                            <Col lg={4} key={index}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <Image alt='BitsWits' loading='lazy' sizes="100vw" src={app.imageSrc} className='img-fluid' />
                                        <h3 className='fw700'>{app.title}</h3>
                                    </div>
                                    <p className='m-0'>{app.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row> 
                </Container>

            </section>
        </>
    )
}

