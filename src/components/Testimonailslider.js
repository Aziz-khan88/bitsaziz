import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Testimonailslider.module.css";
import Slider from 'react-slick'
//images
import slideImg1 from '/public/images/projectprocess/t1.png'
import slideImg2 from '/public/images/projectprocess/t2.png'
import slideImg3 from '/public/images/projectprocess/t3.png'
import left from '/public/images/projectprocess/left.png'
import right from '/public/images/projectprocess/right.png'


export default function Testimonailslider() {

    var clientsthink = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        nextArrow: <Image src={right} alt='BitsWits' className='img-fluid' />,
        prevArrow: <Image src={left} alt='BitsWits' className='img-fluid' />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.hook} id='testihook'>
                <div className={styles.first}></div>
                <Container>
                    <Row className={styles.posting}>
                        <Col xl={12}>
                            <h3 className='f-50 f-700 black center'>Testimonials</h3>
                            <p className='black font16 f-500 center'>Rave Reviews from Our  Valued Clients </p>
                        </Col>
                    </Row>
                    <Slider {...clientsthink} className={`${styles.clintSlider} clintSlider1`}>
                        <div>
                            <Image alt="BitsWits" className='img-fluid'
                                src={slideImg1}
                            />
                            <h3>Bryce Carlos</h3>
                            <h5>Soul Sound</h5>
                            <h4>Co-Founder</h4>
                            <p>
                                BitsWits was a lifesaver for our business. We needed to create an app that could be used
                                on multiple platforms, but we didn’t have a lot of technical know-how or additional
                                development resources. Their team made it easy for us and delivered exactly what we
                                needed. They stayed on top of our project and kept us informed throughout the process.
                            </p>
                        </div>
                        <div>
                            <Image alt="BitsWits" className='img-fluid'
                                src={slideImg2}
                            />
                            <h3>Aden Ward</h3>
                            <h5>EZ Ride</h5>
                            <h4>CEO</h4>
                            <p>
                                We hired mobile app developers to create a completely new mobile app for our company.
                                The team at BitsWits was really professional, efficient, and knowledgeable in the latest
                                technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.
                            </p>
                        </div>
                        <div>
                            <Image alt="BitsWits" className='img-fluid'
                                src={slideImg3}
                            />
                            <h3>Winnie Brooks</h3>
                            <h5>Mark Place</h5>
                            <h4>Founder and CEO</h4>
                            <p>
                                Hiring Flutter app developers from BitsWits was one of the best decisions I have ever
                                made. They are highly skilled and knowledgeable professionals who understand customer needs and deliver well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly recommend them to anyone looking for reliable and cost-effective Flutter solutions.
                            </p>
                        </div>
                    </Slider>
                </Container>
                <div className={styles.last}></div>
            </section>
        </>
    )
}

