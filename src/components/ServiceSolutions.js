import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ServiceSolutions.module.css'


const ServiceSolutions = (props) => {

    return (
        <>
            <section className={`${styles.home} ${props.paddingTop} ${styles[props.addClass]}`}>
                <Container className='qtech'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h3 className='white font20'>{props.subTitle}</h3>
                            <h2 className='newchoose font-bold mb-3 text-white'>{props.title}</h2>
                            <p className='text-white f-16 pb-2 lheight23'>{props.text}</p>
                            <a className={styles.about} href="javascript:$zopim.livechat.window.show();">LET's CONNECT</a>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.solImg} ${props.marginTop}`}>
                                <Image quality={75} alt='BitsWits' src={props.Solution} className='img-fluid mt-5 mt-lg-0' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceSolutions