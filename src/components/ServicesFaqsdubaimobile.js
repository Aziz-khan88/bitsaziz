import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/NewhomeFaqslpdubai.module.css";
//
import close from "/public/newHomePageImages/close.png";
import open from "/public/newHomePageImages/open.png";

const ServicesFaqsdubaimobile = (props) => {
    const [faqStates, setFaqStates] = useState(Array(props.faqsData.length).fill(false));
    const [isClassAdded, setClassAdded] = useState(false);
    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
        setClassAdded(true);

    };
    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={12}>
                            <h4 className="f-25 f-700 mb-0 mb-sm-1 newfycolr">Safeguarding Your Blockchain Operations</h4>
                            <h2 className={`white newchoose f-700 mb-3`}>
                                Blockchain Security Services
                            </h2>
                            <p>With a track record of empowering startups and established brands through cutting-edge app development solutions, we've garnered attention from credible platforms globally, including Zawya and Lovin Dubai in Dubai. Recognized in the mobile app development industry, we've evolved into an end-to-end solution provider with a team of highly talented individuals ready to elevate your mobile app development project to new heights.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq activefapost" : ""} mb-4 mb-lg-0`}>
                                    <div>
                                        <div onClick={() => toggleFaq(index)} className={`${styles.heading} newfoldpost p-3`}>
                                            <h3>
                                                {faq.question} {faqStates[index] ? <Image quality={75} src={open} className="img-fluid" alt="Bitswits" /> : <Image quality={75} src={close} className="img-fluid" alt="Bitswits" />}
                                            </h3>
                                            <p className={`mt-2 mb-0 ${styles.siop}`}> {faq.ques2} </p>
                                        </div>
                                    </div>
                                    <div className={faqStates[index] ? `d-block ${styles.mostimg}` : "d-none"}>
                                        <div>
                                            <p>{faq.answer}</p>
                                            <a href="javascript:$zopim.livechat.window.show();">{faq.btnText}</a>
                                        </div>
                                        <Image className="img-fluid" src={faq.imggodd} />
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

export default ServicesFaqsdubaimobile;
