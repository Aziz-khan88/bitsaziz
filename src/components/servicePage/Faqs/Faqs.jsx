"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/servicepage/Faqs.module.css";
//
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Faqs = (props) => {
    const [faqStates, setFaqStates] = useState(Array(props.faqsData.length).fill(false));
    const [isClassAdded, setClassAdded] = useState(false);
    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
        setClassAdded(true);
    };

    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble newlevel`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h6 className="manrope center">Asked Questions With Value</h6>
                            <h2 className="text-black manrope center pb-md-3 pb-xxl-5 mb-lg-4">
                                Frequently Asked Questions
                            </h2>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.txt}>
                                <h3 className="manrope mb-3">Have Any Queries?</h3>
                                <p className="manrope font-medium">Have a word with our expert consultants about your next project to get suggestive guidance & proposal.</p>
                                <div className={styles.secBtn}>
                                    <a href="javascript:;" className="manrope">
                                        Get A Free Consultation Now
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq activefapost servicesFaqs" : ""} mb-2 mb-md-4 mb-lg-0`}>
                                    <div>
                                        <div onClick={() => toggleFaq(index)} className={`${styles.heading} newfoldpost p-3`}>
                                            <h3 className={`${faqStates[index] ? "text-black" : "text-black"} manrope `}>
                                                {faq.question} {faqStates[index] ? <FaAngleUp className={styles.activeArrow} /> : <FaAngleDown />}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className={faqStates[index] ? `d-block ${styles.mostimg}` : "d-none"}>
                                        <div>
                                            <p className="manrope font-medium">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Faqs;
