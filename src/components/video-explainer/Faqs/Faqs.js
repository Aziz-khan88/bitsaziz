import React, { useState } from 'react'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import styles from "@/styles/video-explainer/Faqs.module.css"
// Images 
import FaqsImage from "media/videoexplainer/faq-side-img.png"

const Faqs = ({ content }) => {
    const { accordionData, lists } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? true : index));
    };
    return (
        <>
            <section className={styles.faqsSec}>
                <div className='container'>
                    <Row>
                        <Col lg={7}>
                            <div className={styles.txt}>
                                <h2>FAQS</h2>
                                <p>We have piled up a list of common questions that are usually asked by new clients who show their interest in hiring our services. You may get your answer to the following questions if you have any in your mind.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`${styles.question} ${activeIndex === index ? styles.isActive : styles.nonActive}`}
                                        onClick={() => handleClick(index)}>
                                        <span className='me-2'>{activeIndex === index ? <HiChevronUp className={styles.icon} /> : <HiChevronDown className={styles.icon} />}</span>
                                        <h3>{item.question}</h3>
                                    </div>
                                    {activeIndex === index && (
                                        <div className='pt-3'>
                                            <div className={styles.answer}>{item.answer}</div>
                                            <ul>
                                                {accordionData.map((index) => (
                                                    <li key={index}>
                                                        <div className={styles.answer}>{item.item1}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Col>
                        <Col lg={5}>
                            <Image src={FaqsImage} alt='Bitswits' className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Faqs
