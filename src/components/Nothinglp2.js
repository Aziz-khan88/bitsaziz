import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Nothinglp2.module.css";
//images
import banImg1 from '/public/images/nothing/map.png'
import news1 from '/public/images/nothing/1.png'
import news2 from '/public/images/nothing/1.png'
import news3 from '/public/images/nothing/1.png'
import news4 from '/public/images/nothing/1.png'
import news5 from '/public/images/nothing/1.png'
import verified from '/public/newHomePage/images/pageLp6/verified.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Nothinglp2(props) {

    var bannerslider = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    };


    return (
        <>
            <section className={styles[props.Nothing]}>
                <Container className='newfoldlp'>
                    <Row className='  align-items-center'>
                        <Col lg={12}>
                            <h3 className="white f-30 f-700 center">Our Client’s Feedback Has Been</h3>
                            <h2 className="white font50 f-700 center mb-5">Nothing Short Of Amazing!</h2>
                        </Col>
                        <Col lg={8}>
                            <Image src={banImg1} alt='BitsWits' className='img-fluid' />
                        </Col>
                        <Col lg={4}>
                            <div>
                                <Slider {...bannerslider} className={` ${styles.startSlide} Serbannerslider`}>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news1} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. Their comprehensive work, from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                                        <div className='d-flex align-items-center gap-2 my-1'>
                                            <h4 className='white font20 mb-0'>Joseph</h4>
                                            <Image src={verified} width={15} height={15} alt='BitsWits' className={`img-fluid`} />
                                        </div>
                                        <p className='white font12'>CTO / Pronftdesign.com</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news2} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firm's workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.</p>
                                        <div className='d-flex align-items-center gap-2 my-1'>
                                            <h4 className='white font20 mb-1'>Daniel Gonzalez</h4>
                                            <Image src={verified} width={15} height={15} alt='BitsWits' className={`img-fluid`} />
                                        </div>
                                        <p className='white font12'>CTO / Jumpto1.com</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news3} className="img-fluid " />
                                        <p className='white font12 mt-4 mb-1'>Bitswits delivered an efficient solution that significantly improved processing speed, productivity, and accuracy. Their proactive engagement, soliciting of feedback, and implementing improvements ensured a successful partnership. The team's versatility and adaptability were commendable.</p>
                                        <div className='d-flex align-items-center gap-2 my-1'>
                                            <h4 className='white font20 mb-1'>Ryan Jaden</h4>
                                            <Image src={verified} width={15} height={15} alt='BitsWits' className={`img-fluid`} />
                                        </div>
                                        <p className='white font12'>iTRans.ai</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news4} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>We decided to hire app developers from Bitswits on their hourly package and it turned out to be a perfect fit for our project's needs. Their team's expertise and efficiency were impressive, delivering high-quality work within our budget. The app they developed is exactly what we envisioned, both innovative and user-friendly.</p>
                                        <div className='d-flex align-items-center gap-2 my-1'>
                                            <h4 className='white font20 mb-1'>Jordan</h4>
                                            <Image src={verified} width={15} height={15} alt='BitsWits' className={`img-fluid`} />
                                        </div>
                                        <p className='white font12'>Tech Startup Founder</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news5} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>Working with Bitswits was a game-changer for our retail chain. They developed an AI-assisted inventory management system that automates stock level tracking and predictive ordering. The accuracy and efficiency it brings to our supply chain management are phenomenal. It's a prime example of how AI can transform traditional retail operations.</p>
                                        <div className='d-flex align-items-center gap-2 my-1'>
                                            <h4 className='white font20 mb-1'>Emily</h4>
                                            <Image src={verified} width={15} height={15} alt='BitsWits' className={`img-fluid`} />
                                        </div>
                                        <p className='white font12'>Retail Chain Manager</p>
                                    </div>

                                </Slider>
                                <div className='mt-5'>
                                    <a href="tel:8335006007" className={styles.btnpost}>Begin Your Success Story : Connect Now</a>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}

