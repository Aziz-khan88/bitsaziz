import React from 'react'
import styles from './People.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
//images
import banImg1 from '/public/images/people/people.png'
import star from '/public/images/people/star.png'
import star1 from '/public/images/people/1.png'
import star2 from '/public/images/people/2.png'


const People = (props) => {

    return (
        <>

            <section className={`${styles[props.People]} pt-5 pt-lg-0`}>
                <Container>
                    <div className={styles.flot}>
                        <div className={styles.comple}>
                            <Image alt='BitsWits' src={banImg1} className='img-fluid d-none d-lg-block' />
                            <div className={styles.comple1}>
                                <Image alt='BitsWits' src={star} className='img-fluid' />
                                <p className='mb-0 fontgilroymediumitalic'> <span className='font-bold'>4.8 out of 5</span> <span className='fontitalic fontgilroymediumitalic'>(review rating) <br></br>
                                    Over 1,200+ reviews</span> </p>
                            </div>
                        </div>
                        <div className={styles.comple3}>
                            <Image alt='BitsWits' src={star1} className='img-fluid d-none d-lg-block' />
                            <div className={styles.comple5}>
                                <p className='mb-0 fontgilroygilroysemibold font-semibold'>HIGH PERFORMER</p>
                                <p className='mb-0 fontgilroygilroysemibold font-semibold'>Top App Development Company</p>
                            </div>
                        </div>
                        <div className={styles.comple3}>
                            <Image alt='BitsWits' src={star2} className='img-fluid d-none d-lg-block' />
                            <div className={styles.comple5}>
                                <p className='mb-0 fontgilroygilroysemibold font-semibold'>US TOP 3 BEST RATED</p>
                                <p className='mb-0 fontgilroygilroysemibold font-semibold'>App & Software Development Company</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default People