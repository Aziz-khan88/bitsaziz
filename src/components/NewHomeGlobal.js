import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeGlobal.module.css";
//
import bestglobal1 from '/public/images/bestglobal/1.png'
import bestglobal2 from '/public/images/bestglobal/2.png'
import bestglobal3 from '/public/images/bestglobal/3.png'
import bestgloba4 from '/public/images/bestglobal/4.png'
import bestglobal5 from '/public/images/bestglobal/5.png'
import bestglobal6 from '/public/images/bestglobal/6.png'
import bestglobal7 from '/public/images/bestglobal/7.png'
import bestgloba8 from '/public/images/bestglobal/8.png'
import bestglobal9 from '/public/images/bestglobal/9.png'
import bestglobal10 from '/public/images/bestglobal/10.png'
import bestglobal11 from '/public/images/bestglobal/11.png'
import bestgloba12 from '/public/images/bestglobal/12.png'


const NewHomeGlobal = (props) => {

    return (
        <>
            <section className={`${styles.team} ${styles[props.assignClass]}`}>
                <Container>
                    <Row>
                        <Col xl={9}>
                            <h3 className='f45 font-bold white'>World-Renowned</h3>
                            <h2 className={styles.success}>Brands Trust Us</h2>
                            <div className={styles.postpoint}>
                                <div>
                                    <Image quality={75} src={bestglobal1} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal2} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal3} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba4} className='img-fluid' alt='BitsWits' />
                                </div>

                                <div className={styles.pont}>
                                    <Image quality={75} src={bestglobal5} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal6} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal7} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba8} className='img-fluid' alt='BitsWits' />
                                </div>

                                <div >
                                    <Image quality={75} src={bestglobal9} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal10} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal11} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba12} className='img-fluid' alt='BitsWits' />
                                </div>
                            </div>

                            <div className={styles.lctnslide}>
                                <Image quality={75} src={bestglobal1} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal2} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal3} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestgloba4} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal5} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal6} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal7} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestgloba8} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal9} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal10} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestglobal11} className='img-fluid w-25' alt='BitsWits' />
                                <Image quality={75} src={bestgloba12} className='img-fluid w-25' alt='BitsWits' />
                            </div>
                        </Col>
                        <Col xl={3}>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewHomeGlobal