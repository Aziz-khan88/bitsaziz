import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/Standing.module.css';
import Slider from "react-slick";
//
import ecommerce from '@/public/blockchain/images/ecommerce.png';
import Banking from '@/public/blockchain/images/Banking.png';
import health from '@/public/blockchain/images/health.png';
import supply from '@/public/blockchain/images/supply.png'
import realestate from '@/public/blockchain/images/realestate.png'
import retail from '@/public/blockchain/images/retail.png'
import FullView from '@/public/blockchain/images/FullView.png'


const Standing = (props) => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section className={style.secPad}>
                <Container>
                    <Row className='justify-content-center text-center align-items-center mb-lg-5'>
                        <Col lg={12} >
                            <h2 className="text-white newchoose fw700 mb-2">Delivering <span className='fw700'>Outstanding</span> <span>Outstanding</span> <span className='grdiant'>Blockchain Development Services</span> Across Industry</h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.nextsub}</h4>
                            <p className='text-white fw300'>{props.nextPara}</p>
                        </Col>
                    </Row>
                    <div className='d-none d-lg-block'>
                        <Row className={`${style.standing} justify-content-center align-items-center mb-5 pb-5`}>

                            <Col lg={4} className={`${style.br1} ${style.bb1} ${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={health} width={200} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>
                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Healthcare</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={Banking} width={200} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Banking</h4>
                            </Col>
                            <Col lg={4} className={`${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={ecommerce} width={200} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>E-Commerce</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1}  position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={supply} width={200} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Supply Chain</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1}  position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={realestate} width={200} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Reat Estate</h4>
                            </Col>
                            <Col lg={4} className='position-relative'>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={retail} width={200} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Retail</h4>
                            </Col>

                        </Row>
                    </div>
                    <div className='d-block d-lg-none'>
                        <Row className={`${style.standing} justify-content-center align-items-center mb-lg-5 pb-lg-5`}>
                            <Slider {...settings}>
                                <Col lg={4} className={`${style.br1} ${style.bb1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={health} width={200} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Healthcare</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={Banking} width={200} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Banking</h4>
                                </Col>
                                <Col lg={4} className={`${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={ecommerce} width={200} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>E-Commerce</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={supply} width={200} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Supply Chain</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={realestate} width={200} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Reat Estate</h4>
                                </Col>
                                <Col lg={4} className='position-relative'>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={retail} width={200} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Retail</h4>
                                </Col>
                            </Slider>
                        </Row>
                    </div>

                    <div className='d-none d-lg-block mt-5 pt-5'>
                        <Row className='mt-5 mb-5'>
                            <Col lg={12} className='position-relative'>
                                <Image quality={75} src={FullView} className='img-fluid' alt="Blockchain" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Standing