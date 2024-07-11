import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/DeliveredBlack.module.css";
// Images
import SecImage from "/public/newdubai/deliveredIcon.png"

const DeliveredBlack = ({ content }) => {
    const { title, desc } = content
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Image src={SecImage} width={58} height={60} alt='BitsWits' className='mx-auto d-block mb-3' />
                            <h2>{title}</h2>
                            {desc.map((item, index) => (
                                <div key={index}>
                                    <p className='fontsfregular'>
                                        {item.para}
                                    </p>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DeliveredBlack