import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/Revolution.module.css';
//
import CTA from '../../components/blockchain/cta';
//
import poster from '@/public/blockchain/images/cube.png'


const NextGen = (props) => {

    return (
        <>
            <section className={style.secPad}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={8} className='pt-4 pb-4 border-top border-bottom'>
                            <h2 className="text-white mb-2">{props.nextTtitle1}</h2>
                            <h4 className="fw300 text-white mb-2">{props.nextsub}</h4>
                            <p className='text-white fw300'>{props.nextPara}</p>
                            <CTA number="1 312 379 5987" discuss="Hire Blockchain Developer" />
                        </Col>
                        <Col lg={4}>

                            {props.poster ?
                                <div className='text-center'>
                                    <video className={`${style.bgVideo} img-fluid`} width={450} autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/961508973/rendition/720p/file.mp4?loc=external&log_user=0&signature=e63f149b53ea2d73422b5f90304f9d87b322a46ad97c90263f53d702bcad525c" type="video/mp4"></video>
                                </div>
                                :
                                ''
                            }
                            {props.poster1 ?
                                <div className='text-center pt-sm-2 mt-5 mt-lg-0'>
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
export default NextGen