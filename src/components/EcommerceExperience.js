import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/EcommerceExperience.module.css'
///
import ExperienceOne from '/public/ecommerce/experience1.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import { useEffect } from 'react'


const EcommerceExperience = () => {

    const [isSliderActive, setIsSliderActive] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // slider 


    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      
    };


    return (
        <>
            <section className={styles.ExperienceSec}>
                <Container>
                    <Row>
                        <Col lg={6} xl={3} className={styles.linpost}>
                            <h2 className='font35 textGray font-extrabold'>Experience Our <br /> <span className='text-white'>CMMI DEV/3 expertise,</span> <br /> with bug-free <br /> development, <br /> timely deliveries <br /> and smooth execution. Are <br /> you <span className='grdiant '>curious about our process? <br /> check it out <br /> and hire us for <br /> your ecommerce <br /> development <br /> project!</span>
                            </h2>
                        </Col>


                        {isSliderActive ?
                            <Slider {...awardslogo} >
                                

                                    <div className={styles.contentTwo}>
                                        <Image src={ExperienceOne} alt='Bitswits' />
                                        <h3 className='text-white font-bold font25 pt-2'>CONCEPTUALIZATION</h3>
                                        <h4 className='text-white font20 font-bold'>Foundation Phase</h4>
                                        <p className='text-white font14 ling25'>We begin with a thorough assessment of your requirements and addressing all your queries from the outset. Then, our team develops a comprehensive scope of work for your project.</p>
                                        <h4 className='text-white font20 font-bold'>Proposal</h4>
                                        <p className='text-white font14 ling25'>We provide a detailed proposal with cost estimates and a well-defined project timeline for your evaluation. No pressure, just transparency. When you're fully satisfied, the project is sent to production!</p>
                                    </div>

                                    <div className={styles.contentThree}>
                                        <Image src={ExperienceOne} alt='Bitswits' />
                                        <h3 className='text-white font-bold font25 pt-2'>PRODUCTION</h3>
                                        <h4 className='text-white font20 font-bold'>Visualization</h4>
                                        <p className='text-white font14 ling25'>Our mobile app designers create a visually appealing and simplified user interface (UI) design that aligns with your brand identity, industry best practices, and your guideline.</p>
                                        <h4 className='text-white font20 font-bold'>Designing & Prototyping</h4>
                                        <p className='text-white font14 ling25'>Wireframes, mockups, and prototypes are developed to visualize the app's structure and functionality and are sent to you for feedback and approval.</p>
                                        <h4 className='text-white font20 font-bold'>Development</h4>
                                        <p className='text-white font14 ling25'>Our mobile app developers select the appropriate tech stack and begin coding the app ensuring a strong and flexible application.</p>
                                        <h4 className='text-white font20 font-bold'>Quality Assurance</h4>
                                        <p className='text-white font14 ling25'>The app goes through thorough testing to identify and resolve any bugs, errors, or usability issues. QA processes ensure that the app meets your desired standards and performs without any faults.</p>
                                    </div>

                                    <div className={styles.contentFour}>
                                        <Image src={ExperienceOne} alt='Bitswits' />
                                        <h3 className='text-white font-bold font25 pt-2'>DELIVERY</h3>
                                        <h4 className='text-white font20 font-bold'>Deployment and Launch</h4>
                                        <p className='text-white font14 ling25'>Once the app is thoroughly tested and approved, it is prepared for deployment to the respective app stores or distribution platforms.</p>
                                        <h4 className='text-white font20 font-bold'>Post-Launch Support</h4>
                                        <p className='text-white font14 ling25'>After the app is launched, ongoing support, maintenance, and updates are provided to ensure its smooth operation.</p>
                                    </div>

                                
                            </Slider>
                            :
                            <>
                                <Col lg={6} xl={3}>
                                    <div className={styles.contentTwo}>
                                        <Image src={ExperienceOne} alt='Bitswits' />
                                        <h3 className='text-white font-bold font25 pt-2'>CONCEPTUALIZATION</h3>
                                        <h4 className='text-white font20 font-bold'>Foundation Phase</h4>
                                        <p className='text-white font14 ling25'>We begin with a thorough assessment of your requirements and addressing all your queries from the outset. Then, our team develops a comprehensive scope of work for your project.</p>
                                        <h4 className='text-white font20 font-bold'>Proposal</h4>
                                        <p className='text-white font14 ling25'>We provide a detailed proposal with cost estimates and a well-defined project timeline for your evaluation. No pressure, just transparency. When you're fully satisfied, the project is sent to production!</p>
                                    </div>
                                </Col>
                                <Col lg={6} xl={3}>
                                    <div className={styles.contentThree}>
                                        <Image src={ExperienceOne} alt='Bitswits' />
                                        <h3 className='text-white font-bold font25 pt-2'>PRODUCTION</h3>
                                        <h4 className='text-white font20 font-bold'>Visualization</h4>
                                        <p className='text-white font14 ling25'>Our mobile app designers create a visually appealing and simplified user interface (UI) design that aligns with your brand identity, industry best practices, and your guideline.</p>
                                        <h4 className='text-white font20 font-bold'>Designing & Prototyping</h4>
                                        <p className='text-white font14 ling25'>Wireframes, mockups, and prototypes are developed to visualize the app's structure and functionality and are sent to you for feedback and approval.</p>
                                        <h4 className='text-white font20 font-bold'>Development</h4>
                                        <p className='text-white font14 ling25'>Our mobile app developers select the appropriate tech stack and begin coding the app ensuring a strong and flexible application.</p>
                                        <h4 className='text-white font20 font-bold'>Quality Assurance</h4>
                                        <p className='text-white font14 ling25'>The app goes through thorough testing to identify and resolve any bugs, errors, or usability issues. QA processes ensure that the app meets your desired standards and performs without any faults.</p>
                                    </div>
                                </Col>
                                <Col lg={6} xl={3}>
                                    <div className={styles.contentFour}>
                                        <Image src={ExperienceOne} alt='Bitswits' />
                                        <h3 className='text-white font-bold font25 pt-2'>DELIVERY</h3>
                                        <h4 className='text-white font20 font-bold'>Deployment and Launch</h4>
                                        <p className='text-white font14 ling25'>Once the app is thoroughly tested and approved, it is prepared for deployment to the respective app stores or distribution platforms.</p>
                                        <h4 className='text-white font20 font-bold'>Post-Launch Support</h4>
                                        <p className='text-white font14 ling25'>After the app is launched, ongoing support, maintenance, and updates are provided to ensure its smooth operation.</p>
                                    </div>
                                </Col>
                            </>
                        }


                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceExperience