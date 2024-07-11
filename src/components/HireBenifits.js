import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/HireBenifits.module.css'
//
import { FaAngleDown } from 'react-icons/fa';


const HireBenifits = (props) => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleTabChange = (event) => {
        const selectedTabId = parseInt(event.target.value);
        setActiveTab(selectedTabId);
    };


    return (
        <>
            <section className={`${styles.benifits}`}>
                <Container>
                    <Row className='gy-3 gy-lg-5'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='newchoose'>{item.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <div>
                            <Row className={`${styles.benifitsBox} d-none d-lg-flex`}>
                                <Col lg={5} className={`${styles.tabs} tabs`}>
                                    {props.tabsData.map((tab, index) => (
                                        <div
                                            key={tab.id}
                                            className={activeTab === tab.id ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon} ${index === props.tabsData.length - 1 ? styles.last : ''}`}
                                            onClick={() => handleTabClick(tab.id)}
                                        >
                                            <Image src={tab.content.imageSrc} alt='BitsWits' className='img-fluid' />
                                            <h5>{tab.title}</h5>
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={7} className={`${styles.tabContent} tab-content`}>
                                    {props.tabsData.map((tab) => (
                                        <div key={tab.id} className={activeTab === tab.id ? styles.benifTxt : styles.hidden}>
                                            <h3 className='newchoose'>{tab.content.heading}</h3>
                                            {tab.content.text.map((para, index) => (
                                                <p key={index}>{para}</p>
                                            ))}
                                            <div className={styles.btns}>
                                                <a className={`${styles.btn} ${styles.btn1}`} href="tel:8335006007">Book A Call</a>
                                                <a className={`${styles.btn} ${styles.btn2}`} href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                            </Row>
                            {/*========= For mobile =========*/}
                            <Row className={`${styles.benifitsOpt} d-flex d-lg-none`}>
                                <Col lg={5} className={`${styles.tabs} tabs mb-4`}>
                                    <select value={activeTab} onChange={handleTabChange} className='form-select'>
                                        {props.tabsData.map((tab) => (
                                            <option key={tab.id} value={tab.id} className={styles.option}>
                                                {tab.title}
                                            </option>
                                        ))}
                                    </select>
                                    <FaAngleDown />
                                </Col>
                                <div className={`${styles.benifitsBox}`}>
                                    <Col lg={7} className={`${styles.tabContent} tab-content`}>
                                        {props.tabsData.map((tab) => (
                                            <div key={tab.id} className={activeTab === tab.id ? styles.benifTxt : styles.hidden}>
                                                <h3>{tab.content.heading}</h3>
                                                {tab.content.text.map((para, index) => (
                                                    <p key={index}>{para}</p>
                                                ))}
                                                <div className={styles.btns}>
                                                    <a className={`${styles.btn} ${styles.btn1}`} href="tel:8335006007">Book A Call</a>
                                                    <a className={`${styles.btn} ${styles.btn2}`} href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                                                </div>
                                            </div>
                                        ))}
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireBenifits
