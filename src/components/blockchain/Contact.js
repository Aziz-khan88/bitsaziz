import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/Contact.module.css';
//
import Form from '@/components/blockchain//Form';
import barcode1 from '@/public/blockchain/images/barcode1.png'


const Contact = (props) => {
    return (
        <>
            <div className={`${style[props.whychooseclass]} secPad`}>
                <Container>
                    <Row className='justify-content-center align-items-center text-center mb-4'>
                        <Col lg={12}>
                            <h2 className="fw700 f50 text-white mb-2"><span className='fw700 grdiant'> Looking For </span>A Reliable Partner <span className='fw700'> To </span> Build <span className='fw700'>And</span> Maintain</h2>

                            <h4 className="fw700 f30 white mb-2"> Your Blockchain <span className='fw700'> Application</span>? We Are <span className='fw700'> Here To Help</span></h4>


                            <p className='f15 text-white mt-3'>{props.text}</p>
                            <Link href='#' className='btn btn-primary'>Hire Blockchain Developer </Link>
                        </Col>
                    </Row>
                    <Row className={`${style.middle} pt-5 justify-content-center align-items-center`}>
                        <Col lg={6}>
                            <h3 className='fw700 f50 text-white'>Have A <span className='grdiant'>Vision</span>?</h3>
                            <p className='text-white mb-4'>Share Your Idea Now & Step-Ahead With Innovative Blockchain Solutions.</p>
                            <Form formshome='formclass' />
                        </Col>
                        <Col lg={6} className={style.barcode}>
                           <Image quality={75} src={barcode1} alt="Blockchain" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact