import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/NewMobileApp/Faqs.module.css";
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
                            <h2 className="text-black f-500 center pb-3 pb-md-4 pb-xxl-5 mb-0">A Few 
                                <span> FAQs</span></h2>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq activefapost ppcFaqs" : ""} mb-2 mb-md-4 mb-lg-0`}>
                                    <div>
                                        <div onClick={() => toggleFaq(index)} className={`${styles.heading} newfoldpost p-3`}>
                                            <h3 className={`${faqStates[index] ? "text-black" : "text-black"} `}>
                                                {faq.question} {faqStates[index] ? <FaAngleUp /> : <FaAngleDown />}
                                            </h3>

                                        </div>
                                    </div>
                                    <div className={faqStates[index] ? `d-block ${styles.mostimg}` : "d-none"}>
                                        <div>
                                            <p>{faq.answer}</p>
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
