"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '@/styles/servicepage/ApplicationOffer.module.css';
// Images
import BtnArrow from 'media/newmobileapp/right-arrow.png';
import appLong from 'media/newmobileapp/appLong.png';

const ApplicationOffer = ({ content, bg }) => {
    const { title, menus, sections } = content;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section id='process' className={bg === 'yes' ? `${styles.bgcolor_puple} ` : `${styles.houston}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2 className='manrope font-bold'>{title}</h2>
                                <p className='manrope font16 font-medium mb-2 mb-lg-5 pb-2'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. <br className='d-xl-block d-none' /> We bring your iOS app ideas to life by using our comprehensive We bring your iOS app ideas to life by using our</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={6} className='p-md-0'>
                            <nav className={styles.applicationlong}>
                                <ul className="d-lg-block d-none">
                                    {menus.map((tab, index) => (
                                        <li key={index}
                                            className={`d-flex ${activeTab === index ? styles.active : ''}`}
                                            onClick={() => handleTabClick(index)}>
                                            <span className={`manrope pe-4`}>0{index + 1}</span>
                                            <span className={`${styles.menusHeading} manrope`}>{tab.label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <select className="d-lg-none d-block" onChange={(e) => setActiveTab(parseInt(e.target.value))}>
                                    {menus.map((tab, index) => (
                                        <option key={index} value={index} label={tab.label}>{tab.label}</option>
                                    ))}
                                </select>
                            </nav>
                        </Col>
                        <Col lg={6} className='p-md-0'>
                            {sections[activeTab] && (
                                <div className={styles.understand}>
                                    {sections[activeTab].map((item, index) => (
                                        <div key={index} className='h-100'>
                                            <div className={`${styles.understandContent}`}>
                                                {/* <h4 className={styles.number}>{item.num}</h4> */}
                                                <h2 className="py-2 mb-0 mb-lg-3 manrope">{item.title}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                                <div className={styles.btn}>
                                                    <a href="#form" className="d-flex gap-3 manrope">
                                                        Let’s Discuss Your Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
};

export default ApplicationOffer;
