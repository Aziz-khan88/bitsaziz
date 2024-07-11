import React from "react";
import styles from "./NewHomeMaintain.module.css";
import { Container, Row, Col } from "react-bootstrap";

const NewMaintain = (props) => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    {props.subtitle &&
                        <h3 className={`font24 white font-bold text-center mb-0 mb-sm-2 ling15`}>
                            {props.subtitle}
                        </h3>
                    }
                    {props.title1new &&
                        <h2 className="text-white font50 f-700 text-center mb-0 mb-sm-2">
                            {props.title1new}
                        </h2>
                    }
                    <Row className="g-3">
                        <Col lg={12}>
                            <h3 className={` f-30 font-bold text-center mb-0 newfycolr`}>
                                {props.title1}
                            </h3>
                            <h2 className="text-white font50  f-700  text-center">
                                {props.title2}
                            </h2>
                            <p className="m-0 text-white text-center pb-4">{props.text}</p>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className="text-white newservefy font-bold">
                                        Mobile App Development
                                    </h3>
                                    <p className={styles.para}>
                                        We develop custom mobile apps from initial consultation to
                                        deployment, driving business growth across various
                                        industries.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className="text-white newservefy font-bold">
                                        Game Development
                                    </h3>
                                    <p className={styles.para}>
                                        Hire our game development company to captivate your audience
                                        and transport them to thrilling virtual worlds.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className="text-white newservefy font-bold">
                                        Blockchain Development
                                    </h3>
                                    <p className={styles.para}>
                                        We specialize in developing solutions that fuels enterprise
                                        growth and efficiency through blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={12}>
                            <div className={styles.app3}>
                                <Row className="align-items-center">
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className="text-white newservefy font-bold ">
                                                Artificial Intelligence (Ai)
                                            </h3>
                                            <p className={styles.para1}>
                                                Hire BitsWits as your trusted ally for AI development,
                                                and experience the revolution of your project through
                                                Artificial Intelligence that raises its potential.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className="text-white newservefy font-bold text-center">
                                        Web App Development
                                    </h3>
                                    <p className={styles.possibilities}>
                                        Our top app developers excel in web app development,
                                        showcasing expert skills to ensure client satisfaction and
                                        punctual project delivery.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className="text-white newservefy font-bold text-center">
                                        UI/UX App Design
                                    </h3>
                                    <p className={styles.possibilities}>
                                        Our team comprises professional responsive app designers who
                                        develop prototypes aimed at guiding users to meaningful
                                        interactions and achieving impactful user experiences.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={8}>
                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className="text-white newservefy font-bold">AR/VR</h3>
                                        <p className={`text-white f-16 ${styles.contentPara}`}>
                                            BitsWits serves as your AR/VR portal. We specialize in
                                            creating imaginative concepts into compelling digital
                                            realities that captivate, entertain, and inspire your
                                            audience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app7}>
                                <div className={styles.mblApp7}>
                                    <h3 className="text-white newservefy font-bold text-center">
                                        Internet of Things
                                    </h3>
                                    <p className={styles.para9}>
                                        We lead in IoT innovation delivering smart, connected
                                        solutions drive automation, efficiency, and connectivity
                                        across industries.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default NewMaintain;
