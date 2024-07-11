import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Technologieswe.module.css";


const TechnologiesGames = (props) => {

    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }

    return (
        <>
            <section className={`${styles.tech} ${styles[props.addresClass]} ${props.paddingBottom}`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className={`${styles.work} newchoose`}>
                                <span className="newfycolr">Technologies </span>We Work With
                            </h2>
                        </Col>
                        <Col xl={12} className="mb-5 d-none d-lg-block">
                            <div className={styles.analpost}>
                                <div className={activeTab1 == "tab1" ? styles.active : ""} onClick={() => fun1("tab1")} href="#">
                                    {props.title}
                                </div>
                            </div>
                        </Col>

                        <Col xl={12} className="mb-5 d-block d-lg-none">
                            <div className={styles.analpost}>
                                <select onChange={(e) => setActiveTab1(e.target.value)}>
                                    <option className={styles.selOpt} value="tab1" label="Mobile">
                                        {props.title}
                                    </option>
                                </select>
                            </div>
                        </Col>

                        <Col xl={12}>
                            {activeTab1 == "tab1" && (
                                <div className={styles.newyork}>
                                    {props.platforms.map((platform, index) => (
                                        <div key={index}>
                                            <Image
                                                quality={75}
                                                alt="BitsWits"
                                                src={platform.icon}
                                                className="img-fluid"
                                            />
                                            <p>{platform.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TechnologiesGames