import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerlp2.module.css";
//
import BannerImage from "@/public/images/lpmobile2/img2.png"
import banImg1 from '/public/images/people/people.png'
import star from '/public/images/people/star2.png'
import star1 from '/public/images/people/1.png'
import star2 from '/public/images/people/2.png'

const Bannerlp2 = (props) => {

    return (
        <>

            <section className={styles[props.newHomeBgprops]} >

                <Container className={` ${styles.conform}`}>

                    <Row className='gx-5 w-100'>
                        <Col xl={6}>
                            <div className={styles.oppp}>
                                <h2 className='f-60 white fw700'>Top <br></br>
                                    Mobile App Development  <br></br>
                                    Company</h2>
                                <p className='font16 white fw500 mt-4 mb-lg-5'>We deliver mobile app experiences that get your mobile app trending on the app stores.We design & build frontend apps for brands who want to break barriers and accelerate growth.</p>
                                <a href='javascript:$zopim.livechat.window.show();' className={styles.deliver}>Take The First Step - Sign Up Now!</a>
                            </div>
                            <div className={styles.comple}>
                                <Image alt='BitsWits' src={banImg1} className='img-fluid w-25' />
                                <div className={styles.comple1}>
                                    <Image alt='BitsWits' src={star} className='img-fluid' />
                                    <p className='mb-0'>4.8 out of 5 (review rating) <br></br>
                                        Over 1,200+ reviews</p>
                                </div>
                            </div>

                            <div className={styles.posty}>
                                <div className={styles.comple3}>
                                    <Image alt='BitsWits' src={star2} className='img-fluid' />
                                    <div className={styles.comple5}>
                                        <p className='mb-0'>US TOP 3 BEST RATED</p>
                                        <p className='mb-0'>App & Software Development Company</p>
                                    </div>
                                </div>
                                <div className={styles.comple3}>
                                    <Image alt='BitsWits' src={star1} className='img-fluid' />
                                    <div className={styles.comple5}>
                                        <p className='mb-0'>HIGH PERFORMER</p>
                                        <p className='mb-0'>Top App Development Company</p>
                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col xl={6}>
                            <div className={styles.postimg}>
                                <Image alt='BitsWits' src={BannerImage} className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Bannerlp2