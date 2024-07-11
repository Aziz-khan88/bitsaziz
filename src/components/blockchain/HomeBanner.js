import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '@/styles/HomeBanner.module.css'


function HomeBanner() {

    return (
        <>
            <div className={style.HomeBanner}>
                <Row>
                    <Col lg={6}>
                        <div>
                            <div className={style.leftcolums}>
                                <h1>Complete
                                    Blockchain Development</h1>
                                <p>Everything you need to connect with your games or apps to
                                    decentralize Networks</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='position-relative'>
                            <div className={style.FormHo}></div>
                            <form className={`${style.ctaForm} mt-5`}>
                                <h3 className='font-30 fw-900 text-center mb-5 text-white'> Contact us </h3>
                                <Row className='px-4'>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="name"> Name *</label>
                                        <input className='form-control' type="text" placeholder="Type Name" required />
                                    </Col>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="phone">Phone *</label>
                                        <input className='form-control' type="text" placeholder="(000) 000-000" required />
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="email">Email  *</label>
                                        <input className='form-control' type="email" placeholder="Type Your Email" required />
                                    </Col>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="web">Your Website *</label>
                                        <input className='form-control' type="text" placeholder="Type Your Website" />
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={12} className=" pb-4">
                                        <div>
                                            <textarea type="textarea" placeholder="Type Your Message"  >
                                            </textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={12} className=" mt-4">

                                        <button className={`bitsForm ${style.btnprimary}`}>Submit</button>

                                    </Col>
                                </Row>
                            </form>
                            <div className={style.FormHoo}></div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div>
        </>
    );
}
export default HomeBanner;