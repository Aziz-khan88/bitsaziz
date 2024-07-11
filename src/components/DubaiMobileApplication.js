import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiMobileApplication.module.css"
// Images 
import DubaiImage from "/public/newdubai/review-main.png"
import review1 from "/public/newdubai/review1.png"
import review2 from "/public/newdubai/review2.png"

const DubaiMobileApplication = ({ content }) => {
    const { title, desc } = content
    return (
        <>
            <section className={styles.mobileApplicationSec}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h2>{title}</h2>
                            {desc.map((item, index) => (
                                <div key={index}>
                                    <p className='fontsfregular'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                            <div className={styles.btn}>
                                <Link href="javascript:;" className='text-white'>
                                    Let’s Get Started
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.reviewMain}>
                                <Image src={DubaiImage} alt='Bitswits' width={743} height={610} className='img-fluid' />
                                <Image src={review1} alt='Bitswits' className={`${styles.review1} img-fluid`} />
                                <Image src={review2} alt='Bitswits' className={`${styles.review2} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiMobileApplication 
