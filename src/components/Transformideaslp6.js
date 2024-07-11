import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Transformideaslp6.module.css";
//images
import banImg1 from '/public/images/lp-images/icon1.png'
import banImg2 from '/public/images/lp-images/icon2.png'
import banImg3 from '/public/images/lp-images/icon3.png'
import banImg4 from '/public/images/lp-images/icon4.png'
import banImg5 from '/public/images/lp-images/icon5.png'
import banImg6 from '/public/images/lp-images/icon6.png'
import banImg7 from '/public/images/lp-images/icon7.png'
import banImg8 from '/public/images/lp-images/icon8.png'
import banImg9 from '/public/images/lp-images/icon9.png'
//
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";


export default function Transformideaslp6(props) {

    var phoneSlider = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 480) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isSliderActive, setIsSliderActive] = useState(true);

    const items = [
        {
            image: banImg1,
            text: (<> Experienced  <br /> Professionals </>)
        },
        {
            image: banImg2,
            text: (<> On-Time <br /> Delivery </>)
        },
        {
            image: banImg3,
            text: (<> Cost-Effective <br /> Solutions </>)
        },
        {
            image: banImg4,
            text: (<> Scalable and <br /> Secure Apps </>)
        },
        {
            image: banImg5,
            text: (<> User-Centric <br /> Design </>)
        },
        {
            image: banImg6,
            text: (<> Customized <br /> Development </>)
        },
        {
            image: banImg7,
            text: (<> Error-Free <br /> Delivery </>)
        },
        {
            image: banImg8,
            text: (<> Transparent <br /> Communication </>)
        },
        {
            image: banImg9,
            text: (<> Support and <br /> Maintenance </>)
        }
    ];

    return (
        <>
            <section className={styles[props.transform]}>
                <Container>
                    {isSliderActive ?

                        <>
                            <Row className='align-items-center '>
                                <Col lg={6} className={styles.walk}>
                                    <h3>Why Choose Us</h3>
                                    <h2>For Your Mobile App Development
                                        Needs?</h2>
                                    <p className='mt-4'>Our <span>mobile app development services</span> turn your innovative ideas into success stories by crafting apps that stand out in the market. While you <span>focus on your business</span>, Bitswits will handle the technical aspects of developing your app.</p>
                                    <p>Did you know that a <span>poorly developed app</span> can negatively impact your brand's reputation? That's a risk you don't want to take. But with Bitswits, there's no need to worry. We ensure your app functions seamlessly and enhances your brand's digital presence.</p>
                                    <p>Unlike <span>Mobile app development firms</span>, we don't believe in a one-size-fits-all approach. We understand that the reason behind an underperforming app often lies in its development and user experience. That's where our expertise comes into play. With a <span>team of seasoned mobile app developers</span>, the latest technological resources, and a bespoke development strategy.</p>
                                    <p className='mt-4 mb-4'>Every app we develop undergoes thorough quality checks to ensure <span>IT'S NOT JUST GOOD, BUT GREAT</span>.</p>
                                    <div className={styles.ourt}>
                                        <a href="tel:8335006007" className={styles.dus}>Choose Expertise, Choose Bitswits – Let's Get Started </a>
                                    </div>
                                </Col>
                            </Row>

                            <Slider {...phoneSlider} className='mt-5 text-center' >



                                {items.map((item, index) => (

                                    <div className={styles.post}>
                                        <Image alt='BitsWits' src={item.image} className='img-fluid mb-3 m-auto pt-5' />
                                        <p>{item.text}</p>
                                    </div>

                                ))}





                            </Slider>
                        </>
                        :
                        <Row className='align-items-center'>

                            <Col lg={6} className={styles.walk}>
                                <h3>Why Choose Us</h3>
                                <h2>For Your Mobile App Development
                                    Needs?</h2>
                                <p className='mt-4'>Our <span>mobile app development services</span> turn your innovative ideas into success stories by crafting apps that stand out in the market. While you <span>focus on your business</span>, Bitswits will handle the technical aspects of developing your app.</p>
                                <p>Did you know that a <span>poorly developed app</span> can negatively impact your brand's reputation? That's a risk you don't want to take. But with Bitswits, there's no need to worry. We ensure your app functions seamlessly and enhances your brand's digital presence.</p>
                                <p>Unlike <span>Mobile app development firms</span>, we don't believe in a one-size-fits-all approach. We understand that the reason behind an underperforming app often lies in its development and user experience. That's where our expertise comes into play. With a <span>team of seasoned mobile app developers</span>, the latest technological resources, and a bespoke development strategy.</p>
                                <p className='mt-4 mb-4'>Every app we develop undergoes thorough quality checks to ensure <span>IT'S NOT JUST GOOD, BUT GREAT</span>.</p>
                                <div className={styles.ourt}>
                                    <a href="tel:8335006007" className={styles.dus}>Choose Expertise, Choose Bitswits – Let's Get Started </a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.cart}>
                                    <Row className='gy-4'>
                                        {items.map((item, index) => (
                                            <Col key={index} md={6} lg={4}>
                                                <div className={styles.post}>
                                                    <Image alt='BitsWits' src={item.image} className='img-fluid mb-3' />
                                                    <p>{item.text}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Col>

                        </Row>
                    }

                </Container>

            </section>
        </>
    )
}

