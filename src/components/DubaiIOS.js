import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiIOS.module.css"
// Images 
import AppleStore from "/public/newdubai/app-store.png"
import IOSmobile from "/public/newdubai/iosMobile.png"

const DubaiIOS = ({ content }) => {
    const { title, desc } = content
    return (
        <>
            <section className={styles.iosSec}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <Image src={AppleStore} width={60} height={60} alt='Bitswits' />
                            <h2>{title}</h2>
                            {desc.map((item, index) => (
                                <div key={index}>
                                    <p className='fontsfregular'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </Col>
                        <Col lg={5}>
                            <div className={styles.iosImage}>
                                <Image src={IOSmobile} width={627} height={555} alt='Bitswits' className='d-lg-block d-none' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiIOS
