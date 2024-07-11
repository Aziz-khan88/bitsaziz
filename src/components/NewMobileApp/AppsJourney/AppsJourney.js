import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/AppsJourney.module.css"
import Link from 'next/link'
import Image from 'next/image'

import BannerImage from "media/newmobileapp/smal_banner.png"

const cardsContent = [
    "Unclear requirements leading to scope creep?",
    "Budget underestimation results in financial strain?",
    "Communication gaps cause delays and misunderstandings?",
    "nadequate testing leads to buggy applications?",
    "Missed deadlines harming business opportunities and client satisfaction?"
];

const Card = ({ content, isActive }) => {
    return (
        <div className={`${isActive ? styles.cardTwo : styles.card}`}>
            <p>{content}</p>
        </div>
    );
};

const CardContainer = ({ content, isActive }) => {
    return (
        <div className={styles.cardsMain}>
            <a href="tel:1 833 500 6007">
                <Card content={content} isActive={isActive} />
            </a>
        </div>
    );
};

const AppsJourney = ({ content, onAnchorClick }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % cardsContent.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={styles.appSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <p>Problems of Yesterday</p>
                                <h2>Time To Mobilize Your <span>App Idea</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        {cardsContent.slice(0, 2).map((content, index) => (
                            <div key={index} className="col-lg-6 col-xl-4">
                                <CardContainer content={content} isActive={index === activeIndex} />
                            </div>
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {cardsContent.slice(2).map((content, index) => (
                            <div key={index} className="col-lg-6 col-xl-4">
                                <CardContainer content={content} isActive={(index + 2) === activeIndex} />
                            </div>
                        ))}
                    </Row>
                </div>
            </section>
            {/* Small Banner Start */}
            <section className={styles.smallBanner}>
                <div className="container">
                    <div className={styles.bannerWrapper}>
                        <Row>
                            <Col lg={5}>
                                <h2>
                                    Explore New Horizons – Let Our App Experts Take Control!
                                </h2>
                                <div className={styles.btn}>
                                    <a href='javascript:;' className='blackPulse' onClick={onAnchorClick}>
                                        Make A Move!
                                    </a>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className={`d-none d-lg-block ${styles.secImage}`}>
                                    <Image src={BannerImage} alt='Bitswits' className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            {/* Small Banner End */}
        </>
    )
}

export default AppsJourney
