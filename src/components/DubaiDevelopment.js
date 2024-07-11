import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Delivered.module.css";
// Images
import AppStore from "/public/newdubai/app-store.png"
import PlayStore from "/public/newdubai/play-store.png"
import VS from "/public/newdubai/vs.png"

const DubaiDevelopment = ({ content }) => {
    const { title, desc } = content
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='d-flex align-items-center justify-content-center gap-4 mb-4'>
                                <Image src={AppStore} width={60} height={60} alt='BitsWits' />
                                <Image src={VS} width={54} height={30} alt='BitsWits' />
                                <Image src={PlayStore} width={54} height={60} alt='BitsWits' />
                            </div>
                            <h2>{title}</h2>
                            {desc.map((item, index) => (
                                <div key={index}>
                                    <p className='fontsfregular'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                            <a href="javascript:$zopim.livechat.window.show();">Get in Touch with our Experts Now!</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DubaiDevelopment