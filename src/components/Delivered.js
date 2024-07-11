import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Delivered.module.css";
// Images
import SecImage from "/public/newdubai/deliveredIcon.png"

const Delivered = ({ content }) => {
    const { title, desc, cta } = content
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Image src={SecImage} width={58} height={60} alt='BitsWits' sizes="100vw" loading='lazy' className='mx-auto d-block mb-3' />
                            <h2>{title}</h2>
                            {desc.map((item, index) => (
                                <div key={index}>
                                    <p className='fontsfregular'>
                                        {item.para}
                                    </p>
                                    <ul className="p-0 m-0">
                                        <li className='text-center'>{item.list}</li>
                                    </ul>
                                </div>
                            ))}
                            <a href="javascript:$zopim.livechat.window.show();" className={`pink ${styles.btn}`}>
                                {cta}
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Delivered