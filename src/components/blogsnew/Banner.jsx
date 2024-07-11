import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/blogNew/Banner.module.css"


const Banner = () => {
    return (
        <>
            <section className={styles.bannerSec}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h1 className='text-center text-white'>Conquer Tech With Bitswits: <br />
                                    Your Path To Unstoppable Progress!</h1>
                                <p className='text-white text-center fontsfregular'>We’re A Software Development Company That Ensures Its Expertise Extends To Offer A Seamlessly Productive And <br /> Growth-Oriented Partnership To Its Client’s Goals, And Internal Teams.</p>
                            </div>
                            <div className={styles.form}>
                                <form action="javascript:;">
                                    <input type="email" name='email' placeholder='Enter Your Email Address' className='fontsfregular' />
                                    <button type='submit' className='fontsfregular bitsForm'>Subscribe</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
