import React, { useState } from 'react'
import Image from 'next/image';
import { animate, motion } from "framer-motion";
import { Row, Col, Modal } from 'react-bootstrap'
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
import styles from "@/styles/DubaiDelivered.module.css"
// Images
import ParticleOne from "/public/newDubaiPagev1/particale-1.png"
import ParticleTwo from "/public/newDubaiPagev1/particale-2.png"
import ParticleThree from "/public/newDubaiPagev1/particale-3.png"
import ParticleFour from "/public/newDubaiPagev1/particale-4.png"

const DubaiDelivered = ({ content }) => {
    const { title, desc, btntext } = content;
    const variantOne = {
        initial: {
            x: "-75%",
            y: "-24%",
            opacity: 0,
        },
        animate: {
            x: 0,
            y: "-16%",
            opacity: 1,
            transition: {
                duration: 1,
                staggerChild: 0.1,
            }
        },
    };
    const variantTwo = {
        initial: {
            x: "-95%",
            y: "90%",
            opacity: 0,
        },
        animate: {
            x: "-68%",
            y: "68%",
            opacity: 1,
            transition: {
                duration: 1,
                staggerChild: 0.1,
            }
        },
    };
    const variantThree = {
        initial: {
            x: "111%",
            y: "-43%",
            opacity: 0,
        },
        animate: {
            x: "90%",
            y: "-15%",
            opacity: 1,
            transition: {
                duration: 1,
                staggerChild: 0.1,
            }
        },
    };
    const variantFour = {
        initial: {
            x: "40%",
            y: "80%",
            opacity: 0,
        },
        animate: {
            x: "-23%",
            y: "60%",
            opacity: 1,
            transition: {
                duration: 1,
                staggerChild: 0.1,
            }
        },
    };
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
            <section className={styles.DubaiDelivered}>
                <motion.div
                    variants={variantOne} initial="initial" whileInView="animate" className='h-100 w-100 d-lg-block d-none'>
                    <Image sizes="100vw" loading='lazy' src={ParticleOne} alt='Bitswits' className={styles.secImage} />
                </motion.div>
                <motion.div
                    variants={variantTwo} initial="initial" whileInView="animate" className='h-100 w-100 d-lg-block d-none'>
                    <Image sizes="100vw" loading='lazy' src={ParticleTwo} alt='Bitswits' className={styles.secImageTwo} />
                </motion.div>
                <motion.div
                    variants={variantThree} initial="initial" whileInView="animate" className='h-100 w-100 d-lg-block d-none'
                >
                    <Image sizes="100vw" loading='lazy' src={ParticleThree} alt='Bitswits' className={styles.secImageThree} />
                </motion.div>
                <motion.div
                    variants={variantFour} initial="initial" whileInView="animate" className='h-100 w-100 d-lg-block d-none'>
                    <Image sizes="100vw" loading='lazy' src={ParticleFour} alt='Bitswits' height={420} width={400} className={styles.secImageFour} />
                </motion.div>
                <div className='container'>
                    <Row>
                        <Col sm={12}>
                            <motion.div className={styles.txt}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}>
                                <h2>{title}</h2>
                                <p className='fontsfregular'>
                                    {desc}
                                </p>
                                <div className={styles.btn}>
                                    <button onClick={modal} className='pink'>
                                        {btntext}
                                    </button>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
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

export default DubaiDelivered
