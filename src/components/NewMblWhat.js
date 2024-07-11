import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblWhat.module.css";
//
import WhatImage from "@/public/newMobilePageImages/what_Image.png"
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"


const NewHomeWhat = () => {

    return (
        <>
            <section className={styles.newHomeBg}>
                <div className={styles.mixColor1}></div>
                <Container>

                    <Row>
                        <Col lg={12}>
                            <h1 className='text-white f-60 font-bold'>What we do.</h1>
                            <p className={`${styles.wid} f-20 text-white`}>
                                BitsWits transforms businesses through technology.
                            </p>
                            <p className={`${styles.width} font14`}>
                                We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.
                            </p>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    Get to know us
                                    <span>
                                        <Image quality={75} alt='BitsWits' src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>

                <div className='sec_image text-center pt-5'>
                    <Image quality={75} alt='BitsWits' src={WhatImage} className={styles.secImage} />
                </div>

                <div className={styles.mixColor2}></div>

            </section>


        </>
    )
}

export default NewHomeWhat