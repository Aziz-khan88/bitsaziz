import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/Process.module.css';
import Slider from "react-slick";


const Process = (props) => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <section className={style.process}>
                <Container>
                    <Row className='mb-5'>
                        <Col lg={12}>
                            <h2 className='newchoose fw700 text-white text-center'>Result<span className=' fw700 text-white'>-Oriented</span><span></span> <span className='grdiant'>Blockchain Development Process</span> We Employ</h2>
                        </Col>
                    </Row>
                    <div className='d-none d-lg-block'>
                        <Row className='justify-content-center align-items-center'>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> <span className='grdiant'>Blockchain</span> Technology Consulting</h4>
                                            <p className='f11 fw400 text-white'>As the best blockchain development company we offer expert guidance to help you evaluate whether blockchain technology is the right fit for your business needs. If it is, we can help you plan and execute your project, as well as suggest ways to integrate blockchain into your existing business processes.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            1
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> <span className='grdiant'>Requirement</span> Analysis</h4>
                                            <p className='f11 fw400 text-white'>Our proficient team conducts a thorough requirement analysis to determine the problem that your blockchain application will solve and identifies all stakeholders involved. We then create a comprehensive roadmap for blockchain development.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            2
                                        </div>
                                    </div>


                                </div>
                            </Col>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> <span className='grdiant'>UI/UX design</span> & Prototype</h4>
                                            <p className='f11 fw400 text-white'>We create intuitive and user-friendly UI designs, ensuring the architecture is scalable and secure to accommodate future growth. Our team also selects the appropriate technology and creates a prototype.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            3
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> <span className='grdiant'>Blockchain</span> Development</h4>
                                            <p className='f11 fw400 text-white'>Our development team architects a high-quality blockchain product based on your specific needs. We tailor the development process to ensure that the end product meets your expectations.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            4
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> <span className='grdiant'>Support</span> and Maintenance</h4>
                                            <p className='f11 fw400 text-white'>Blocktech Brew offers full support and maintenance services after launch. This includes ongoing support for users, software updates, and ensuring the system remains secure.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            5
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> <span className='grdiant'>Quality</span> Assurance</h4>
                                            <p className='f11 fw400 text-white'>Our developers conduct thorough testing to ensure the final product is free of errors and meets users’ needs.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            6
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'>Deployment</h4>
                                            <p className='f11 fw400 text-white'>We follow standard protocols to ensure that the blockchain application is easily accessible to potential customers once deployed.</p>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            7
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-block d-lg-none'>
                        <Row className='justify-content-center align-items-center'>
                            <Slider {...settings}>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Blockchain Technology Consulting</h4>
                                                <p className='f11 fw400 text-white'>As the best blockchain development company we offer expert guidance to help you evaluate whether blockchain technology is the right fit for your business needs. If it is, we can help you plan and execute your project, as well as suggest ways to integrate blockchain into your existing business processes.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Requirement Analysis</h4>
                                                <p className='f11 fw400 text-white'>Our proficient team conducts a thorough requirement analysis to determine the problem that your blockchain application will solve and identifies all stakeholders involved. We then create a comprehensive roadmap for blockchain development.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                2
                                            </div>
                                        </div>


                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>UI/UX design & Prototype</h4>
                                                <p className='f11 fw400 text-white'>We create intuitive and user-friendly UI designs, ensuring the architecture is scalable and secure to accommodate future growth. Our team also selects the appropriate technology and creates a prototype.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                3
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Blockchain Development</h4>
                                                <p className='f11 fw400 text-white'>Our development team architects a high-quality blockchain product based on your specific needs. We tailor the development process to ensure that the end product meets your expectations.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Support and Maintenance</h4>
                                                <p className='f11 fw400 text-white'>Blocktech Brew offers full support and maintenance services after launch. This includes ongoing support for users, software updates, and ensuring the system remains secure.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Quality Assurance</h4>
                                                <p className='f11 fw400 text-white'>Our developers conduct thorough testing to ensure the final product is free of errors and meets users’ needs.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                6
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Deployment</h4>
                                                <p className='f11 fw400 text-white'>We follow standard protocols to ensure that the blockchain application is easily accessible to potential customers once deployed.</p>
                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                7
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Slider>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Process