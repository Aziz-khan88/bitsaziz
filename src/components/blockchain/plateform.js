import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/Revolution.module.css';
//
import CTA from '../components/cta';
//
import poster from "/public/images/cube.png'


const Expertise = (props) => {
    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={8} className='pt-4 pb-4 border-top border-bottom'>
                            <h2 className="text-white f40 mb-2">{props.nextTtitle1}</h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.nextsub}</h4>
                            <p className='text-white fw300'>{props.nextPara}</p>
                            <CTA number="1-844-400-0025"
                                discuss="Hire Blockchain Developer" />
                        </Col>
                        <Col lg={4}>

                            {props.poster ?
                                <div>
                                    <video controls className={`${style.bgVideo}`} muted
                                        src="" type="video/mp4"></video>
                                </div>
                                :
                                ''
                            }
                            {props.poster1 ?
                                <div>
                                    <Image quality={75} src={poster} className='img-fluid' alt="Blockchain" />
                                </div>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Expertise