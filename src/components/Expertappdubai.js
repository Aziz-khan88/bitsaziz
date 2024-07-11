import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertappdubai.module.css";
//images
import banImg1 from '/public/dubailp/services/1.png'
import banImg2 from '/public/dubailp/services/2.png'
import banImg3 from '/public/dubailp/services/3.png'
import banImg4 from '/public/dubailp/services/4.png'
import banImg5 from '/public/dubailp/services/5.png'
import banImg6 from '/public/dubailp/services/6.png'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const appData = [
    {
        title: 'Blockchain',
        description: 'At BitsWits, we implement cutting-edge blockchain solutions to safeguard your data. Our advanced encryption techniques and robust security protocols ensure that your information remains invulnerable to cyber threats and unauthorized access, providing you with peace of mind and regulatory compliance.',
        imageSrc: banImg1,
    },
    {
        title: 'IoT (Internet of Things)',
        description: 'We empower your business by connecting and managing devices through our IoT solutions. By optimizing device interactions, we enhance your operational efficiency and provide you with real-time insights into your processes, enabling informed decision-making and improved performance.',
        imageSrc: banImg2,
    },
    {
        title: 'AI/ML (Artificial Intelligence/Machine Learning)',
        description: 'Our AI/ML solutions are tailored to your specific requirements. We automate tasks, facilitate data-driven decision-making, and enhance overall efficiency by integrating AI and ML technologies into your processes, allowing you to stay competitive and agile in your industry.',
        imageSrc: banImg3,
    },
    {
        title: 'AR/VR (Augmented Reality/Virtual Reality)',
        description: 'BitsWits redefines customer engagement through immersive AR/VR applications. We create experiences that captivate your audience, drive conversions, and establish your brand as an innovator, leaving a lasting impression on your customers.',
        imageSrc: banImg4,
    },
    {
        title: 'Cloud Computing',
        description: (<> Leveraging the cloud's power, we optimize your operations. Our cloud solutions enhance security, scalability, and performance, ensuring uninterrupted operations at any scale. With BitsWits, you can focus on your core business while we take care of your cloud infrastructure.</>),
        imageSrc: banImg5,
    },
    {
        title: 'Staff Augmentation',
        description: (<> We offer flexible staffing solutions, allowing you to scale your team up or down as needed. With BitsWits, you have access to a pool of skilled professionals, ensuring that you always have the right talent to drive your projects forward, no matter the size or complexity. </>),
        imageSrc: banImg6,
    },
];


export default function Expertappdubai(props) {


    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };


    return (
        <>
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2 d-none d-lg-flex'>
                        <Col lg={12} >

                            <h2 className='white font50 f-700 center mb-5'>Cutting-edge technology Solutions by  <br></br> Mobile Application Developers in Dubai</h2>

                            <p className="font16 font-normal white text-center mb-5">BitsWits, a leading mobile application development company in Dubai, offers a comprehensive range of cutting-edge <br /> technology solutions to empower entrepreneurs and businesses. Our diverse toolkit includes:</p>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                    <h3 className=' white fw700'>Blockchain</h3>
                                </div>
                                <p className=' white fw400 m-0'>At BitsWits, we implement cutting-edge blockchain solutions to safeguard your data. Our advanced encryption techniques and robust security protocols ensure that your information remains invulnerable to cyber threats and unauthorized access, providing you with peace of mind and regulatory compliance.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                    <h3 className=' white fw700'>IoT (Internet of Things)</h3>

                                </div>
                                <p className=' white fw400 m-0'>We empower your business by connecting and managing devices through our IoT solutions. By optimizing device interactions, we enhance your operational efficiency and provide you with real-time insights into your processes, enabling informed decision-making and improved performance.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                    <h3 className=' white fw700'>AI/ML (Artificial Intelligence/Machine Learning)</h3>

                                </div>
                                <p className=' white fw400 m-0'>Our AI/ML solutions are tailored to your specific requirements. We automate tasks, facilitate data-driven decision-making, and enhance overall efficiency by integrating AI and ML technologies into your processes, allowing you to stay competitive and agile in your industry.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                    <h3 className=' white fw700'>AR/VR (Augmented Reality/Virtual Reality)</h3>

                                </div>
                                <p className=' white fw400 m-0'>BitsWits redefines customer engagement through immersive AR/VR applications. We create experiences that captivate your audience, drive conversions, and establish your brand as an innovator, leaving a lasting impression on your customers.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                    <h3 className=' white fw700'>Cloud Computing</h3>

                                </div>
                                <p className=' white fw400 m-0'>Leveraging the cloud's power, we optimize your operations. Our cloud solutions enhance security, scalability, and performance, ensuring uninterrupted operations at any scale. With BitsWits, you can focus on your core business while we take care of your cloud infrastructure.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                    <h3 className=' white fw700'>Staff Augmentation</h3>

                                </div>
                                <p className=' white fw400 m-0'>We offer flexible staffing solutions, allowing you to scale your team up or down as needed. With BitsWits, you have access to a pool of skilled professionals, ensuring that you always have the right talent to drive your projects forward, no matter the size or complexity.</p>
                            </div>
                        </Col>

                    </Row>

                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>

                        <Col lg={12} >

                            <h2 className='white font50 f-700 center mb-5'>Advanced Technology Solutions for <br></br> Entrepreneurs & Businesses </h2>

                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {appData.map((app, index) => (
                                <Col lg={4} key={index}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <Image alt='BitsWits' src={app.imageSrc} className='img-fluid mb-3' />
                                            <h3 className=' white fw700'>{app.title}</h3>
                                        </div>
                                        <p className=' white fw400 m-0'>{app.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Slider>
                    </Row>
                </Container>

            </section>
        </>
    )
}

