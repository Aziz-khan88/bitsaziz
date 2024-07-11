import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import styles from '@/styles/AboutIntro.module.css'


const AboutIntro = () => {

    return (
        <>
            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>

                    <div className={styles.para}>
                        <p className='text-white'>Our mobile app developers and designers' goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</p>
                        <p className='text-white mb-0'>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
                        <a className={styles.justNow} href='tel:8335006007'>Call Now!</a>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutIntro