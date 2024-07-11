import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "@/styles/ServicesPortfolio.module.css";
//
import folio1 from "@/public/newMobilePageImages/portfolio/folio1.png";
import folio2 from "@/public/newMobilePageImages/portfolio/folio2.png";
import folio3 from "@/public/newMobilePageImages/portfolio/folio3.png";
import folio4 from "@/public/newMobilePageImages/portfolio/folio4.png";
import folio5 from "@/public/newMobilePageImages/portfolio/folio5.png";
import folio6 from "@/public/newMobilePageImages/portfolio/folio6.png";
import folio7 from "@/public/newMobilePageImages/portfolio/folio7.png";
import folio8 from "@/public/newMobilePageImages/portfolio/folio8.png";
import folio9 from "@/public/newMobilePageImages/portfolio/folio9.png";
import folio10 from "@/public/newMobilePageImages/portfolio/folio10.png";
import folio11 from "@/public/newMobilePageImages/portfolio/folio11.png";
import folio12 from "@/public/newMobilePageImages/portfolio/folio12.png";
import folio13 from "@/public/newMobilePageImages/portfolio/folio13.png";


const ServicesPortfolio = (props) => {

    const [showAll, setShowAll] = useState(false);
    const isTab = useMediaQuery({ maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const portfolioItems = [
        { id: 1, image: folio1, link: '/travel-app-development-case-study' },
        { id: 2, image: folio2, link: '/real-estate-app-development-case-study' },
        { id: 3, image: folio3, link: '/clothing-marketplace-app-development-case-study' },
        { id: 4, image: folio4, link: '/social-app-development-case-study' },
        { id: 5, image: folio5, link: '/automobile-repair-app-development-case-study' },
        { id: 6, image: folio6, link: '/marketing-partnership-app-development-case-study' },
        { id: 7, image: folio7, link: '/healthcare-app-development-case-study' },
        { id: 8, image: folio8, link: '/ride-app-development-case-study' },
        { id: 9, image: folio9, link: '/fitness-app-development-case-study' },
        { id: 10, image: folio10, link: '/hiring-app-development-case-study' },
        { id: 11, image: folio11, link: '/food-delivery-app-development-case-study' },
        { id: 12, image: folio12, link: '/handyman-on-demand-app-development-case-study' },
        { id: 13, image: folio13, link: '/music-app-development-case-study' },
    ];

    const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, isMobile ? 2 : isTab ? 4 : 6);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <section className={`${styles.newHomeBg} ${styles[props.assignClass]}`}>
                <Container>
                    <Row className="g-3">
                        <Col lg={12}>
                            <h2 className="text-white newchoose f-700 text-center pb-sm-4">{props.title}</h2>
                        </Col>
                        {visibleItems.map((item) => (
                            <Col lg={4} md={6} key={item.id}>
                                <div className={`${styles.poliBox} ${styles[`poliBox${item.id}`]}`}>
                                    <Image quality={75} src={item.image} alt="BitsWits" className={`img-fluid`} />
                                    <div className={styles.polioTxt}>
                                        <Link href={item.link} className={styles.sucssBtn}>
                                            View case study
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        <Col lg={12} className='d-none d-lg-block'>
                            <div className="d-flex justify-content-center mt-5">
                                <button onClick={toggleShowAll} className={`${styles.sucssBtn} ${styles.sucssBtn2}`}>
                                    {showAll ? "Show Less" : "Show More"}
                                </button>
                            </div>
                        </Col>
                        <Col lg={12} className='d-block d-lg-none'>
                            <div className="d-flex justify-content-center mt-3">
                                <Link href="/our-work" className={`${styles.sucssBtn} ${styles.sucssBtn2}`}>Show More</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ServicesPortfolio;
