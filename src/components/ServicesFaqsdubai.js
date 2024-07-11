import React, { useState } from "react";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/NewhomeFaqslp.module.css";
//
import close from "/public/newHomePageImages/close.png";
import open from "/public/newHomePageImages/open.png";

const ServicesFaqsdubai = (props) => {
    const [faqStates, setFaqStates] = useState(Array(props.faqsData.length).fill(false));
    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
    };
    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={12}>
                            <h2 className={`white newchoose f-700 mb-3 mb-sm-5`}>
                                FAQs
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq" : ""} mb-4 mb-lg-0`}>
                                    <div onClick={() => toggleFaq(index)} className={`${styles.heading} p-3`}>
                                        <h3>
                                            {faq.question} {faqStates[index] ? <Image quality={75} src={open} className="img-fluid" alt="Bitswits" /> : <Image quality={75} src={close} className="img-fluid" alt="Bitswits" />}
                                        </h3>
                                    </div>

                                    <div className={faqStates[index] ? "d-block" : "d-none"}>
                                        <p>{faq.answer}</p>
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

export default ServicesFaqsdubai;
