import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/industry/banner.module.css"
import Link from 'next/link'
import IMG from "media/industry/benifits_img.svg"
import Image from 'next/image'


const Benefits = () => {
    const data = [
        {
            title: "Mental & Physical Health Solution",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Symptom Tracker",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Mental & Physical Health Solution",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Symptom Tracker",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Mental & Physical Health Solution",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Symptom Tracker",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Mental & Physical Health Solution",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },
        {
            title: "Symptom Tracker",
            txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized Med Tech systems, healthcare organizations can streamline their operations,"
        },

    ]
    return (
        <section className={styles.benefitsSec}>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={6}>
                        <h2 className="manrope font-bold mb-xl-3">Benefits Of Software Development</h2>
                        <p className="font16 fw500 manrope">e bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using comprehensive We bring your iOS app ideas</p>
                        <Link href='#' className={`${styles.button_main}`}>Let’s Discuss Your Project</Link>
                        <div className={styles.ImgBox}>
                            <Image src={IMG} alt='Bitswits' className='img-fluid' />
                        </div>

                    </Col>
                    <Col xl={6} lg={6} md={6}>
                        <div className={styles.benefit_main}>
                            {data.map((item, index) => (
                                <div className={styles.benefit_item} key={index} >
                                    <h4 className="manrope font-bold mb-xl-3">{item?.title}</h4>
                                    <p className="font16 fw500 manrope">{item?.txt}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Benefits