import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Process.module.css";
import scr1 from '/public/dubailp/icons/1.jpg';
import scr2 from '/public/dubailp/icons/2.png';
import scr3 from '/public/dubailp/icons/3.png';
import scr4 from '/public/dubailp/icons/4.png';
import scr5 from '/public/dubailp/icons/5.png';
import scr6 from '/public/dubailp/icons/6.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Process = (props) => {

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        loop: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
        <>
            <section className={`${styles[props.tale]}`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className="white font50 f-700 center mb-3">Our Dynamic Mobile App Development Process</h2>
                            <p className="font16 font-normal white text-center mb-3">BitsWits simplifies UAE mobile app development by providing transparency and comprehensible processes, adapting to changing technology and user preferences, and ensuring clients have a clear understanding of project timelines and methodologies.</p>
                            <p className="font16 font-normal white text-center mb-5">
                                Our process comprises several key stages, ensuring a seamless journey from project scoping to launch and deployment:</p>
                        </Col>
                    </Row>

                    <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>01</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Project Scoping</h3>
                                        <p className="white">We begin by understanding your requirements, conducting market research, and analyzing the competition to define the project scope.</p>
                                        {/* <p className="white mt-3 mb-3">Requirement Analysis. Here's what the phase includes:</p>
                                        <ul className={styles.newlong}>
                                            <li>Market Research</li>
                                            <li>Streamlining Technologies</li>
                                            <li>Feasibility Study</li>
                                            <li>Competitor Analysis</li>
                                            <li>Scope Assessment</li>
                                        </ul> */}

                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>02</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Strategic Planning</h3>
                                        <p className="white">After requirements analysis, we create a strategic plan outlining the development approach, timeline, and objectives.</p>
                                        {/* <p className="white mt-3 mb-3">This strategic plan describes the best app development approach that our app development company in Dubai will take and the time that will be required to develop your application. In a nutshell, here's what you can expect in this phase:</p>
                                        <ul className={styles.newlong}>
                                            <li>Identifying Product's Objective</li>
                                            <li>TAM Finalization</li>
                                            <li>Product Development & Designing</li>
                                            <li>Product Delivery & Launch</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>03</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Design Phase</h3>
                                        <p className="white">Our expert designers craft the initial app design, including UI/UX, visuals, and aesthetics, with room for client feedback.</p>
                                        {/* <p className="white mt-3 mb-3">Any suggestions, feedback, or recommendations are recorded during this process, and corrections are made before moving on to the next phase, which is development. Like any other app development phase, this phase also includes various stages, i.e.:</p>
                                        <ul className={styles.newlong}>
                                            <li> Designing Sketches</li>
                                            <li> Wireframing</li>
                                            <li>Design Mock-ups</li>
                                            <li>  Prototyping & Designing</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>04</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Development Phase</h3>
                                        <p className="white mb-3">Our skilled developers start building the app, beginning with the Android version and moving to iOS while ensuring custom development, integration of the latest technologies, robustness, and scalability.</p>
                                        {/* 
                                        <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
                                            <li>Integrating Latest Technologies</li>
                                            <li>Ensuring Robustness Scalability</li>
                                            <li>Completing Source Codes IP Rights</li>
                                        </ul> */}

                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>05</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Feedback & Iterations</h3>
                                        <p className="white mb-3">Our Mobile app development company in Dubai presents the app to clients for feedback and iterates on it until it reaches a 70% approval mark.</p>
                                        {/* <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
                                            <li>Integrating Latest Technologies</li>
                                            <li>Ensuring Robustness Scalability</li>
                                            <li>Completing Source Codes IP Rights</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>06</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Incorporating Content</h3>
                                        <p className="white mb-3">Clients provide content to be incorporated into the app, aligning it with the design for an enhanced user experience.</p>
                                        {/* <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
                                            <li>Integrating Latest Technologies</li>
                                            <li>Ensuring Robustness Scalability</li>
                                            <li>Completing Source Codes IP Rights</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>07</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Quality Assurance Phase</h3>
                                        <p className="white mb-3">Our QA engineers thoroughly test the app for usability, performance, functionality, and more, ensuring the highest quality standards.</p>
                                        {/* <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
                                            <li>Integrating Latest Technologies</li>
                                            <li>Ensuring Robustness Scalability</li>
                                            <li>Completing Source Codes IP Rights</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>08</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Launch & Deployment</h3>
                                        <p className="white mb-3">Upon client approval, our Mobile app development company in Dubai submits the app to the respective app stores for publishing and launch.</p>
                                        {/* <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
                                            <li>Integrating Latest Technologies</li>
                                            <li>Ensuring Robustness Scalability</li>
                                            <li>Completing Source Codes IP Rights</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                        <div className={styles.high}>
                            <Row>
                                <Col xl={12}>
                                    <div className={styles.solved}>09</div>
                                    <div className={styles.deter}>
                                        <h3 className="white fw800">Ongoing Support</h3>
                                        <p className="white mb-3">Post-launch, we offer ongoing support and updates to keep the app up-to-date and optimize its presence.</p>
                                        <p className="white mb-3">Our mobile app development process combines industry expertise with a client-centric approach, ensuring the creation of user-friendly, high-quality applications that make an impact in today's dynamic market.</p>
                                        {/* <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
                                            <li>Integrating Latest Technologies</li>
                                            <li>Ensuring Robustness Scalability</li>
                                            <li>Completing Source Codes IP Rights</li>
                                        </ul> */}
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Process