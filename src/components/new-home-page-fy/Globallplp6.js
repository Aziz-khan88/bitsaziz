import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "./Globallplp6.module.css";
//
import bestglobal1 from '/public/new-home-page-fy/publications/1.png'
import bestglobal2 from '/public/new-home-page-fy/publications/2.png'
import bestglobal3 from '/public/new-home-page-fy/publications/3.png'
import bestgloba4 from '/public/new-home-page-fy/publications/4.png'
import bestglobal5 from '/public/new-home-page-fy/publications/5.png'
import bestglobal6 from '/public/new-home-page-fy/publications/6.png'
import bestglobal7 from '/public/new-home-page-fy/publications/7.png'
import bestgloba8 from '/public/new-home-page-fy/publications/8.png'
import bestglobal9 from '/public/new-home-page-fy/publications/9.png'
import bestglobal10 from '/public/new-home-page-fy/publications/10.png'
import bestglobal11 from '/public/new-home-page-fy/publications/11.png'
import bestgloba12 from '/public/new-home-page-fy/publications/12.png'


const NewHomeGlobal = () => {

    return (
        <>
            <section className={styles.team} id="partners">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 className='font30 fw800 newfycolr center'>Publications</h3>
                            <h2 className={`${styles.success} center`}> <span className='newfycolr'>Many Got Featured In Major Publications</span> <br />
                                Just By Working With Us.</h2>


                            <div className={styles.postpoint}>
                                <div className={styles.loop}>
                                    <Image quality={75} src={bestglobal1} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal2} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal3} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba4} className='img-fluid' alt='BitsWits' />
                                </div>
                                <br /><br />
                                <div className={styles.loop}>
                                    <Image quality={75} src={bestglobal5} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal6} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal7} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba8} className='img-fluid' alt='BitsWits' />
                                </div>
                                <br /><br />
                                <div className={styles.pont}>
                                    <Image quality={75} src={bestglobal9} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal10} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal11} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba12} className='img-fluid' alt='BitsWits' />
                                </div>
                            </div>

                            <div className={styles.lctnslide}>
                                <Image quality={75} src={bestglobal1} className={`${styles.minImg} img-fluid`} alt='BitsWits' />
                                <Image quality={75} src={bestglobal2} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal3} className={`${styles.minImg} img-fluid`} alt='BitsWits' />
                                <Image quality={75} src={bestgloba4} className={`${styles.minImg} img-fluid`} alt='BitsWits' />
                                <Image quality={75} src={bestglobal5} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal6} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal7} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestgloba8} className={`${styles.minImg} img-fluid`} alt='BitsWits' />
                                <Image quality={75} src={bestglobal9} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal10} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal11} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestgloba12} className='img-fluid' alt='BitsWits' />
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewHomeGlobal