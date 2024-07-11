import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/Whowearenew.module.css";
//
import ban1 from "media/newdubai/ban4.png"
import ban2 from "media/newdubai/ban2.png"
import ban3 from "media/newdubai/ban5.png"

const HomeNewWhoWeAre = ({ content, contentTwo, onAnchorClick }) => {
    const variantOne = {
        initial: {
            y: 200,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChild: 0.1,
            }
        },
    };
    const variantTwo = {
        initial: {
            y: 260,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChild: 0.1,
            }
        },
    };
    const variantThree = {
        initial: {
            y: 300,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                staggerChild: 0.1,
            }
        },
    };

    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, {
            threshold: 0.5 // Change this value according to your preference
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startCounters = () => {
        const counterElements = document.querySelectorAll('.counter');

        counterElements.forEach((item) => {
            let counterInnerText = parseInt(item.textContent);
            let startingPoint = Math.floor(counterInnerText * 0.998);
            let count = startingPoint;
            let speed = parseInt(item.dataset.speed) / (counterInnerText - startingPoint);
            const stop = setInterval(() => {
                item.textContent = count++;
                if (count > counterInnerText) {
                    clearInterval(stop);
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };

    const { title, desc } = content
    return (
        <>
            <section ref={sectionRef} className={`${styles.counterSec} overflow-hidden`}>
                <Container>
                    <Row className={`${styles.android} mx-auto`}>
                        <h2 className='center'>{title}</h2>
                        <p className='center'>
                            {desc}
                        </p>
                    </Row>
                </Container>
                <Container fluid className='px-0'>
                    <Row className='align-items-center w-100 mt-4'>
                        <Col md={4} className='p-0'>
                            <motion.div className={`${styles.ImageDiv}`} variants={variantOne} initial="initial" whileInView="animate">
                                <Image src={ban1} className={`img-fluid mx-auto d-block`} />
                            </motion.div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <motion.div className={`${styles.ImageDiv}`} variants={variantTwo} initial="initial" whileInView="animate">
                                <Image src={ban2} className={`img-fluid mx-auto d-block`} />
                            </motion.div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <motion.div className={`${styles.ImageDiv}`} variants={variantThree} initial="initial" whileInView="animate">
                                <Image src={ban3} className={`img-fluid mx-auto d-block`} />
                            </motion.div>
                        </Col>
                    </Row>
                    <div className={styles.counterBack}>
                        <Row className={`align-items-center ${styles.counterRow} mx-auto`}>
                            <Col lg={6} className='p-0'>
                                <Row className={styles.counterdigit}>
                                    <Col md={4} className={`col-6 ${styles.borderOne}`}>
                                        <h5>
                                            <span className='mb-0 d-inline'>93</span><span>%</span>
                                        </h5>
                                        <p>Satisfied <br /> Customers</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderTwo}`}>
                                        <h5>
                                            <span className='mb-0 d-inline'>90,000</span><span>+</span>
                                        </h5>
                                        <p>Development <br /> Hours</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderThree}`}>
                                        <h5>
                                            <span className='mb-0 d-inline'>2,500</span><span>+</span>
                                        </h5>
                                        <p>App <br /> Launched</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderFour}`}>
                                        <h5 className='pt-2'>
                                            <span className='mb-0 d-inline'>100</span><span>+</span>
                                        </h5>
                                        <p className='mb-0'>Countries <br /> Served</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderFive}`}>
                                        <h5 className='pt-2'>
                                            <span className='mb-0 d-inline'>24</span><span>/7</span>
                                        </h5>
                                        <p className='mb-0'>Post Launch<br /> Support</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderSix}`}>
                                        <h5 className='pt-2'>
                                            <span className='mb-0 d-inline'>167</span><span>%</span>
                                        </h5>
                                        <p className='mb-0'>Average ROI <br /> Return</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} className='p-0'>
                                <div className={styles.intransition}>
                                    <h6>Our Value Additions for Clients</h6>
                                    <h3>Progress By <br /> Numbers</h3>
                                    <div className={`${styles.btn}`}>
                                        <a href="javascript:$zopim.livechat.window.show();" className='blackPulse' onClick={onAnchorClick}>
                                            Time to Execute
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HomeNewWhoWeAre