"use client"
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/industry/banner.module.css"
import Link from 'next/link'
import TabArrowIcon from "@/src/components/industryPage/app-constants"


const ExpertiseIndustry = () => {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const handleClick1 = (index) => {
        setActiveIndex1(index === activeIndex1 ? null : index);
    };
    const handleClick2 = (index) => {
        setActiveIndex2(index === activeIndex2 ? null : index);
    };
    const expertItems1 = [
        {
            title: "IOT Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Data Science Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Cloud And Devops Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Business-Specific RPA Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Cybersecurity Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Data Analytics Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        }
    ];


    const expertItems2 = [


        {
            title: "Big Data Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "AI Development Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Machine Learning Development",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Blockchain Software Development",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "UI/UX Design Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Performance Testing Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Business Intelligence Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
        {
            title: "Data Engineering Services",
            content: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve",
        },
    ];
    return (
        <section className={styles.ExpertiseSec}>
            <Container>
                <Row>
                    <Col xxl={7} xl={8} lg={12} md={12} className="text-center m-auto">
                        <h2 className="manrope font-bold mb-xl-3">Expertise And Competencies</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xxl={4} xl={4} lg={4} md={12}>
                        <div className={styles.techExpert}>
                            <h3 className="manrope font-bold">Technology Excellence</h3>
                            <p className="font16 font-medium manrope">We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater</p>
                            <Link href='#' className={`${styles.button_main}`}>Let’s Discuss Your Project</Link>
                        </div>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={6}>
                        {expertItems1.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.expert_item} ${index === activeIndex1 ? styles.active : ''}`}
                                onClick={() => handleClick1(index)}
                            >
                                <h5 className={`manrope text-white font-medium`}>
                                    {item.title} <TabArrowIcon />
                                </h5>
                                <p className="font16 font-medium manrope text-white">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={6}>
                        {expertItems2.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.expert_item} ${index === activeIndex2 ? styles.active : ''}`}
                                onClick={() => handleClick2(index)}
                            >
                                <h5 className={`manrope text-white font-medium`}>
                                    {item.title} <TabArrowIcon />
                                </h5>
                                <p className="font16 font-medium manrope text-white">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExpertiseIndustry