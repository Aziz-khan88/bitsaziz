import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblSuccess.module.css"; 
//
import team1 from '/public/newMobilePageImages/bg-f.png'


const Newsuccess = (props) => {

    return (
        <>

            <section className={`${styles.happens} ${props.paddingTop} ${props.paddingBottom} ${styles[props.assignClass]}`}>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                                <h5 className='newfycolr mb-0 mb-sm-2'>{props.subtitle}</h5>
                                <h2 className='newchoose f-700 white center mb-3 mb-sm-5'>{props.maintitle}</h2>
                            </div>
                        </Col>
                        <Col xl={12} className='mx-auto d-none d-md-block'>
                            <div className={styles.mainBox}>
                                {props.successSteps.map((step, index) => (
                                    <div key={index} className={`${styles.sucssBox} ${index === 1 ? styles.box2 : ''}`}>
                                        <span className='f-60 font-bold newfycolr mb-0'>{step.number}</span>
                                        <span className='font30 font-bold white mb-0'>{step.title}</span>
                                        <span className='font16 white'>{step.text}</span>
                                        <a href={step.link} className={styles.sucssBtn}>{step.buttonText}</a>
                                    </div>
                                ))}
                                <Image quality={75} src={team1} alt='BitsWits' className={`${styles.befImg} img-fluid`} />
                            </div>
                        </Col>
                        {/* =============================== */}
                        <Col xl={12} className='mx-auto d-block d-md-none'>
                            <div className={styles.mainBox}>
                                {props.successSteps.map((step, index) => (
                                    <div key={index} className={`${styles.sucssBox} ${index === 1 ? styles.box2 : ''}`}>
                                        <span className='f-60 font-bold newfycolr mb-0'>{step.number}</span>
                                        <span className='font30 font-bold white mb-0'>{step.title}</span>
                                        <span className='font16 white'>{step.text}</span>
                                        <a href={step.link} className={styles.sucssBtn}>{step.buttonText}</a>
                                    </div>
                                ))}
                                <Image quality={75} src={team1} alt='BitsWits' className={`${styles.befImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Newsuccess