"use client"
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/DevelopmentProcess.module.css"
// Images
import Tab1 from "media/services/tab1.svg"
import Image from 'next/image'

const DevelopmentProcess = () => {
    // Tabs
    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <section className={styles.developmentSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center">
                            <h2 className='font-bold manrope text-white mb-3'>Our Mobile App Development Process</h2>
                            <p className='font16 font-medium text-white manrope mb-5'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining <br className='d-lg-block d-none' />
                                UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                        </div>
                        <div className="tabList">
                            <ul className={styles.tabList}>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab1" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab1")}>
                                    Discovery Session
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab2" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab2")}>
                                    Documentation
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab3" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab3")}>
                                    Design
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab4" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab4")}>
                                    Execution
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab5" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab5")}>
                                    Integration & Testing
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab6" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab6")}>
                                    Deployment
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab7" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab7")}>
                                    Maintenance & Updates
                                </li>
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            {activeTab1 == "tab1" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Ios App Development Consultation</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab2" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Document</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab3" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Design</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab4" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Executive</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab5" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Inegration</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab6" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Deployment</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab7" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Maintenance</h3>
                                            <p className='manrope text-white font16 font-medium'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="javascript:;">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DevelopmentProcess
