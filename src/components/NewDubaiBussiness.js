import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewDubaiBussiness.module.css"
// Images
import Bussiness from "/public/newdubai/bussinessImage.png"

const NewDubaiBussiness = ({ content }) => {
    const { title, desc, subContent } = content
    return (
        <>
            <section className={styles.bussinessSec}>
                <div className='container'>
                    <Row>
                        <Col lg={10}>
                            <h4 className={`${styles.firstPara} fontsfregular`}>What Will</h4>
                            <h2>{title}</h2>
                            <p className={`${styles.secondPara} fontsfregular`}>
                                {desc}
                            </p>
                            {subContent.map((content, index) => (
                                <div key={index}>
                                    <h3>{content.subTitle}</h3>
                                    <p className={` fontsfregular`}>
                                        {content.subdesc}
                                    </p>
                                </div>
                            ))}
                            <div>
                                <Link href="javascript:;" className={styles.btn}>
                                    Talk To Our Experts
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.bussinessImage}>
                                <Image src={Bussiness} alt='Bitswits' width={579} height={488} className='img-fluid d-xl-block d-none' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default NewDubaiBussiness
