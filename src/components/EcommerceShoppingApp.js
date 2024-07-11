import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/EcommerceShoppingApp.module.css'
///
import RightArrow from '/public/ecommerce/r-arrow.svg'


const EcommerceShoppingApp = () => {
    return (
        <>
            <section className={styles.shoppingApp}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <video autoPlay loop muted src='https://player.vimeo.com/progressive_redirect/playback/961574886/rendition/720p/file.mp4?loc=external&log_user=0&signature=063a165d67c17955d4718a2ee6438d073a4c5d047aafe0f10e9bad668ad27a1b' className='w-100 h-100'></video>
                        </Col>
                        <Col lg={6}>
                            <p className='text-white font18 font-bold mb-0 mt-4 mt-lg-0'>Swipe, Shop, Smile with Our</p>
                            <h2 className='font50 grdiant font-bold mb-2 line45'>Custom Shopping App Development</h2>
                            <p className='font15 text-white'>Discover the power of BitsWits’ shopping app expertise! Our skilled eCommerce app developers focus on creating smooth user experience, personalized features, and secured payments to satisfy clients and provide extraordinary app experiences.</p>

                            <p className='font15 text-white'>Say goodbye to the genie in a lamp – our eCommerce app solutions grant all your wishes with just a tap!</p>

                            <a href="javascript:$zopim.livechat.window.show();" className={`text-white font16 font-semibold ${styles.BtnBrightness}`}>
                                Begin Now!
                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceShoppingApp