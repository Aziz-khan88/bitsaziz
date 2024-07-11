import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import styles from "@/styles/futureReadyDubai.module.css"
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";

const FutureReady = ({ content }) => {
    const { subtitle, title, para, subPara, accordionData } = content;

    // Modal 
    const [show, setShow] = useState(false);
    function modal(e) {
        e.preventDefault();
        setShow(true);
    }

    function closemodal() {
        setShow(false);
    }

    return (
        <>
            <section id='services' className={styles.futureSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className={`${styles.txt} text-center`}>
                                <h4>
                                    {subtitle}
                                </h4>
                                <h2>
                                    {title}
                                </h2>
                                <p className="fontsfregular mb-3">
                                    {para}
                                </p>
                                <p className="fontsfregular mb-3 mb-md-0">
                                    {subPara}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-md-5'>
                        <div className={styles.cardsRow}>
                            {accordionData.map((item, index) => (
                                <div key={index} className={`${styles.cardMain} p-2`}>
                                    <div className={`${styles.iosCard} ${styles.card}`}>
                                        <div className='txt'>
                                            <div className={styles.cardTop}>
                                                <h3>{item.question}</h3>
                                            </div>
                                            <div className="cardContent">
                                                <p>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.btn}>
                                            <button onClick={modal} className='pink'>{item.btn}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal Start*/}
            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body>
                    <Bitswitspopup formsaspire="popquote" />
                    <span onClick={closemodal} className={styles.cross}>
                        <RxCross2 />
                    </span>
                </Modal.Body>
            </Modal>
            {/* Modal Start*/}
        </>
    )
}

export default FutureReady
