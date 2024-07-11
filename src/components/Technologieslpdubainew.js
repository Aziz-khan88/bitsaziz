import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Technologieslpdubainew.module.css'
import Link from 'next/link'
// 
import icon2 from '@/public/dubailp/technology/native.png'
import icon3 from '@/public/dubailp/technology/native1.png'
import icon4 from '@/public/dubailp/technology/native2.png'
import icon5 from '@/public/dubailp/technology/native3.png'
import icon6 from '@/public/dubailp/technology/native4.png'

const Technologieslpdubai = ({ content }) => {
    const { title, desc } = content
    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12} className={styles.york}>
                            <h2 className={styles.work}>
                                {title} </h2>
                            <p className='font-normal black fontsfregular'>{desc}</p>
                        </Col>
                        <Col xl={12} className='mb-5 d-block'>
                            <div className={styles.analpost}>
                                {/* <div className={activeTab1 == 'tab1' ? styles.active : styles.new1} onClick={() => fun1('tab1')} href="#">Mobile App</div> */}
                                <div className={activeTab1 == 'tab1' ? styles.active : styles.new1} onClick={() => fun1('tab1')} href="#">Native App</div>
                                <div className={activeTab1 == 'tab2' ? styles.active : styles.new1} onClick={() => fun1('tab2')} href="#">Hybrid App</div>
                                <div className={activeTab1 == 'tab3' ? styles.active : styles.new1} onClick={() => fun1('tab3')} href="#">Product Strategy</div>
                                <div className={activeTab1 == 'tab4' ? styles.active : styles.new1} onClick={() => fun1('tab4')} href="#">E-commerce App</div>
                                <div className={activeTab1 == 'tab5' ? styles.active : styles.new1} onClick={() => fun1('tab5')} href="#">B2B App</div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            {activeTab1 == 'tab1' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6} className='mt-3'>
                                            <h3 className={styles.stook}>Native App Development</h3>
                                            <p className='fontsfregular'>
                                                We are well-versed in developing native applications programmed exclusively for a specific platform, such as iOS or Android. This method equally utilizes each platform's distinctive traits and strengths, resulting in the same optimized user interface.
                                            </p>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn}>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                            </a>
                                        </Col>
                                        <Col lg={5}>
                                            <Image priority className='img-fluid mx-auto d-block' alt='Bitswits' quality={85} src={icon3} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab2' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6} className='mt-3'>
                                            <h3 className={styles.stook}>
                                                Hybrid App Development</h3>
                                            <p className='fontsfregular'>
                                                We develop hybrid mobile applications capable of working on different platforms with a single codebase that allows you to get a wider audience coverage of the target market. Hybrid apps cost less and aren’t tied to a specific platform, meaning performance isn’t compromised when they run on different devices.
                                            </p>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn}>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                            </a>
                                        </Col>
                                        <Col lg={5}>
                                            <Image priority className='img-fluid mx-auto d-block' alt='Bitswits' quality={85} src={icon4} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab3' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6} className='mt-3'>
                                            <h3 className={styles.stook}>Product Strategy</h3>
                                            <p className='fontsfregular'>
                                                The product strategy services offered by us assist you in deciding the goals of your app, the target audience as well as the key features of your app. Our team will work with you to agree on the best approach for your app, making sure that it helps achieve your business objectives and is appealing to your target audience.
                                            </p>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn}>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                            </a>
                                        </Col>
                                        <Col lg={5}>
                                            <Image priority className='img-fluid mx-auto d-block' alt='Bitswits' quality={85} src={icon6} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab4' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6} className='mt-3'>
                                            <h3 className={styles.stook}>E-Commerce App </h3>
                                            <p className='fontsfregular'>
                                                We excel in creating e-commerce applications that offer your customers a flawless online purchasing process. We go beyond doing the job that matters and deliver an e-commerce app with intelligent navigation, safe payment gateways, and every other feature that helps you increase sales and income.
                                            </p>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn}>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                            </a>
                                        </Col>
                                        <Col lg={5}>
                                            <Image priority className='img-fluid mx-auto d-block' alt='Bitswits' quality={85} src={icon5} />
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {activeTab1 == 'tab5' &&
                                <div className={styles.newyork}>
                                    <Row className={`gy-5 ${styles.colpont}`}>
                                        <Col lg={6} className='mt-3'>
                                            <h3 className={styles.stook}>B2B App</h3>
                                            <p className='fontsfregular'>
                                                Our B2B app development services are crafted to accommodate the business specifications of any company that strives to reduce manual work and amplify processing Be it a custom-made CRM or sales management app, we are proficient in developing sophisticated solutions for any type of business.
                                            </p>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn}>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                                <span>
                                                    Talk Our Experts
                                                </span>
                                            </a>
                                        </Col>
                                        <Col lg={5}>
                                            <Image priority className='img-fluid mx-auto d-block' alt='Bitswits' quality={85} src={icon6} />
                                        </Col>
                                    </Row>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Technologieslpdubai