import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "./Formnewlp.module.css";


const Formnewlp = () => {

    return (
        <>
            <section className={styles.team}>
                <Container>
                    <Row className='align-items-center gy-4 gy-md-5'>

                        <Col lg={12}>
                            <h2 className='newchoose fontf fw700 white mb-3 text-center'>
                                Start Your Mobile App Development <br /> Journey with Us?
                            </h2>
                            <p className='font_15 fontsfregular white text-center mb-0'>Excited to turn your app concept into reality? Get in touch for a detailed consultation. We're keen to explore your project and demonstrate how our assistance  can make a difference. Choosing Bitswits means partnering with a team dedicated to your app's success</p>
                        </Col>

                        <Col xl={6} className='mt-3 mt-sm-0'>
                            <div className={styles.star}>
                                <h3 className='font20 white fw800'>30 Minutes Strategy Session</h3>
                                <h2 className='font40 white fw600'> Get Your<span className='fw800 f45'> Free 30 Minute </span>  <br></br>  <span className='fw600'>Strategy Session With An <br></br>
                                    Experienced </span>  <span className='fw800 f45'> App Experts </span> <br></br> <span className='fw600'>Valued</span> At  <span className='fw800 f45'> $300 </span></h2>
                            </div>

                        </Col>
                        <Col xl={6} className='mt-3 mt-sm-5'>
                            <form className={styles.your}>
                                <h3 className='font25 white fw700'>Have a Project To Discuss?</h3>
                                <h2 className='f-60 mb-4 grdiant fw700'>We're Ready!</h2>
                                <input type='text' name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' name='first' required className='form-control  mt-3' placeholder="Last Name"></input>
                                <input type='number' name='phone' required className='form-control mt-3' placeholder="Enter your Phone No"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Enter your Email"></input>
                                <textarea placeholder='Comment' className='form-control mt-3'></textarea>
                                <input type='submit' name='submit' className={`bitsForm ${styles.value}`} placeholder="Submit"></input>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Formnewlp