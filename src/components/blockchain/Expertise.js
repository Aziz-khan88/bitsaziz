import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/Expertise.module.css';
import Slider from "react-slick";
// 
import Polygon from '@/public/blockchain/images/Polygon.png';
import Binance from '@/public/blockchain/images/binance.png';
import Hyperledger from '@/public/blockchain/images/hyperledger.png';
import Corda from '@/public/blockchain/images/Corda.png';
import Substrate from '@/public/blockchain/images/Substrate.png';
import Avalanche from '@/public/blockchain/images/Avalanche.png';
import Polkadot from '@/public/blockchain/images/Polkadot.png';
import Ethereum from '@/public/blockchain/images/Ethereum.png';
import NearProtocol from '@/public/blockchain/images/NearProtocol.png';


const Expertise = (props) => {

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
                    <Row>
                        <Col lg={9} className='pb-4'>
                            <h4 className="fw300 text-white mb-2">{props.exTitle}</h4>
                            <p className='text-white fw300'>{props.exPara}</p>  
                        </Col>
                    </Row>
                    <Row className={`${style.border1} ${style.experts} justify-content-center align-items-center text-center position-relative`}>

                        <Col lg={6} className={`${style.border} pt-4 pb-4`}>
                            <div className='d-none d-lg-block'>
                                <Row className='justify-content-center align-items-center text-center mt-5'>

                                    <Col lg={4} className='mb-5 position-relative'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Ethereum} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Ethereum</h4>
                                        <div className={style.borderX}></div>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Polygon} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Polygon</h4>

                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Binance} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Binance</h4>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Hyperledger} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Hyperledger</h4>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Corda} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Corda</h4>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Substrate} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Substrate</h4>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Avalanche} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Avalanche</h4>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={Polkadot} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Polkadot</h4>
                                    </Col>
                                    <Col lg={4} className='mb-5'>
                                        <div className={style.feature}>
                                            <Image quality={75} src={NearProtocol} alt="Blockchain" width={57} className='img-fluid' />
                                        </div>
                                        <h4 className='f20 fw700 text-white'>Near Protocol</h4>
                                    </Col>

                                </Row>
                            </div>
                            <div className='d-block d-lg-none text-center mx-auto'>
                                <Row className='justify-content-center align-items-center text-center mt-5'>
                                    <Slider {...settings} className='d-flex justify-content-center align-items-center text-center'>
                                        <Col lg={4} className='mb-5 position-relative'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Ethereum} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Ethereum</h4>
                                            <div className={style.borderX}></div>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Polygon} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Polygon</h4>

                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Binance} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Binance</h4>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Hyperledger} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Hyperledger</h4>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Corda} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Corda</h4>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Substrate} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Substrate</h4>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Avalanche} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Avalanche</h4>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={Polkadot} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Polkadot</h4>
                                        </Col>
                                        <Col lg={4} className='mb-5'>
                                            <div className={style.feature}>
                                                <Image quality={75} src={NearProtocol} alt="Blockchain" width={57} className='img-fluid' />
                                            </div>
                                            <h4 className='f20 fw700 text-white'>Near Protocol</h4>
                                        </Col>
                                    </Slider>
                                </Row>

                            </div>
                        </Col>

                        <Col lg={6} className='position-relative'>
                            <div className={style.exborder}>
                                <div className={style.bottomBanner}>
                                    <h3 className='fw400 f20 mb-5'>A decentralized blockchain platform designed for building decentralized applications with high transaction throughput, low latency, and flexible governance mechanisms.</h3>
                                </div>
                            </div>
                            <div className={style.vborder}></div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Expertise