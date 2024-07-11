import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/CaseWants.module.css'
//
import tick from '/public/images/case-studies/tick.png'


const CaseWants = (props) => {

    return (
        <>
            <section className={`${styles.wants} ${styles[props.wantsClass]}`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            {props.sections1.map((section, index) => (
                                <div key={index} className={styles.content}>
                                    <h3 className='newchoose'>{section.title}</h3>
                                    {section.textArray.map((text, textIndex) => (
                                        <p key={textIndex}>
                                            <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                            <span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={6}>
                            <div className={styles.wantImg}>
                                <Image quality={90} src={props.wantImg1} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.midRow} align-items-center my-0 my-lg-5 py-5`}>
                        <Col lg={6}>
                            <div className={styles.wantImg2}>
                                <Image quality={90} src={props.wantImg2} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            {props.sections2.map((section, index) => (
                                <div key={index} className={styles.content}>
                                    <h3 className='newchoose'>{section.title}</h3>
                                    {section.textArray.map((text, textIndex) => (
                                        <p key={textIndex}>
                                            <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                            <span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            {props.sections3.map((section, index) => (
                                <div key={index} className={styles.content}>
                                    <h3 className='newchoose'>{section.title}</h3>
                                    {section.textArray.map((text, textIndex) => (
                                        <p key={textIndex}>
                                            <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                            <span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={6}>
                            <div className={styles.wantImg}>
                                <Image quality={90} src={props.wantImg3} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                        <Col lg={11} className='mx-auto'>
                            <div className={styles.lastPara}>
                                <p>{props.lastPara}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CaseWants;
