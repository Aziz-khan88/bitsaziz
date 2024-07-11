import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiAndrios.module.css"
// Images 
import PlayStore from "/public/newdubai/play-store.png"
import Andriodmobile from "/public/newdubai/andriodMobile.png"

const DubaiAndriod = ({ content }) => {
    const { title, desc } = content
    return (
        <>
            <section className={styles.iosSec}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={styles.iosImage}>
                                <Image src={Andriodmobile} width={650} height={508} alt='Bitswits' className='d-lg-block d-none' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Image src={PlayStore} width={60} height={60} alt='Bitswits' />
                            <h2>{title}</h2>
                            {desc.map((item, index) => (
                                <div key={index}>
                                    <p className='fontsfregular'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiAndriod