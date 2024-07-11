import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '@/styles/NewMobileApp/NewHouston.module.css';
import BtnArrow from 'media/newmobileapp/right-arrow.png';
import appLong from 'media/newmobileapp/appLong.png';
import Image from 'next/image';
import Link from 'next/link';

const NewHouston = ({ content }) => {
    const { menus, sections } = content;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section id='process' className={styles.houston}>
                <Row className="m-0 align-items-center">
                    <Col lg={5}>
                        <div className={styles.txt}>
                            <h2>Proof in   <span style={{ color: "#F32F53" }} > Pudding </span> </h2>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className={`border bgGrdiant ${styles.topBorder}`}>
                            <p>We use agile and waterfall methodologies for all our mobile application development services to ensure effectiveness. This allows us to deliver quality services and share real-time updates upon the completion of each development milestone </p>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <nav className={styles.applicationlong}>
                                <Image src={appLong} alt="Bitswits" className="img-fluid d-lg-block d-none" />
                                <ul className="d-lg-block d-none">
                                    {menus.map((tab, index) => (
                                        <li key={index}
                                            className={`d-flex ${activeTab === index ? styles.active : ''}`}
                                            onMouseEnter={() => handleTabClick(index)}>
                                            <span className={`pe-4`}>0{index + 1}</span>
                                            <span className={styles.menusHeading}>{tab.label}</span>
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
                        <Col lg={6}>
                            {sections[activeTab] && (
                                <div className={styles.understand}>
                                    {sections[activeTab].map((item, index) => (
                                        <div key={index} >
                                            <div className={`text-center my-5 ${styles.understandContent}`}>
                                                <h4 className={styles.number}>{item.num}</h4>
                                                <h2 className="py-2">{item.title}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                                <div className={styles.btn}>
                                                    <a href="#form" className="d-flex gap-3 pink">
                                                        Free Consultation
                                                        <Image src={BtnArrow} alt="Bitswits" width={24} height={12} />
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
            </section>
        </>
    );
};

export default NewHouston;
