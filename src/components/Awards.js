import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Awards.module.css";
//
import icon23 from '/public/images/newawards/1.webp'
import icon24 from '/public/images/newawards/2.webp'
import icon25 from '/public/images/newawards/3.webp'
import icon26 from '/public/images/newawards/44.png'
import icon27 from '/public/images/newawards/5.webp'


const Awards = () => {

    return (
        <>

            <section className={styles.newHomeBg}>
                <Container className={styles.col1}>
                    <Row>
                        <h2 className='center mb-5'> <span className='grdiant'>Results</span> that speak for themselves</h2>
                        <div className={styles.fill}>
                            <div>
                                <Image src={icon23} className='img-fluid' alt='BitsWits' />
                                <h3 className='white font20 center mt-4 mb-3 line3'>Best of Consumer <br></br> Electronics Show (CES)</h3>
                                <h4 className='white font16  center fw300'>DroneRush, 2023</h4>
                            </div>
                            <div>
                                <Image src={icon24} className='img-fluid' alt='BitsWits' />
                                <h3 className='white font20 center mt-4 mb-3 line3'>Best Mobile App <br></br> Developers in LA</h3>
                                <h4 className='white font16  center fw300'>Expertise, 2022</h4>
                            </div>
                            <div>
                                <Image src={icon25} className='img-fluid' alt='BitsWits' />
                                <h3 className='white font20 center mt-4 mb-3 line3'>Top 100 Companies <br></br>
                                    on Clutch</h3>
                                <h4 className='white font16  center fw300'>Clutch, 2021</h4>
                            </div>
                            <div>
                                <Image src={icon26} className='img-fluid' alt='BitsWits' />
                                <h3 className='white font20 center mt-4 mb-3 line3'>Forbes <br></br>Business Award</h3>
                                <h4 className='white font16  center fw300'>Forbes, 2023</h4>
                            </div>
                            <div>
                                <Image src={icon27} className='img-fluid' alt='BitsWits' />
                                <h3 className='white font20 center mt-4 mb-3 line3'>Top Creative & Design <br></br> Agencies in California</h3>
                                <h4 className='white font16  center fw300'>Clutch, 2019</h4>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Awards