import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/GameTechnologies.module.css'
//
import icon1 from '/public/blockchaindevelopment/images/1.png'
import icon2 from '/public/blockchaindevelopment/images/2.png'
import icon3 from '/public/blockchaindevelopment/images/3.png'
import icon4 from '/public/blockchaindevelopment/images/4.png'
import icon5 from '/public/blockchaindevelopment/images/5.png'
import icon6 from '/public/blockchaindevelopment/images/6.png'
import icon7 from '/public/blockchaindevelopment/images/7.png'
import icon8 from '/public/blockchaindevelopment/images/8.png'


const GameTechnologies = () => {

    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className='fyColor2 text-center mb-0 font25 font-medium'>Technology Stack</p>
                            <h2 className={styles.work}>Unleash Your Gaming Creativity With Our Myriad Of Technology In Use</h2>
                        </Col>


                        <Col xl={12}>
                            <div className={styles.newyork}>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon1} className='img-fluid' />
                                    <p>ETHEREUM</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon2} className='img-fluid' />
                                    <p>EOS</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon3} className='img-fluid' />
                                    <p>TRON</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon4} className='img-fluid' />
                                    <p>BSC</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon5} className='img-fluid' />
                                    <p>SOLANA</p>
                                </div>

                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon6} className='img-fluid' />
                                    <p>TEZOS</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon7} className='img-fluid' />
                                    <p>COSMOS</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon8} className='img-fluid' />
                                    <p>MATIC</p>
                                </div>


                            </div>
                        </Col>
                    </Row>


                </Container>




            </section>


        </>
    )
}

export default GameTechnologies