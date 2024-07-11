import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ProjectProcesshome.module.css'
//images
import banImg1 from '/public/images/projectprocess/process.svg'


const ProjectProcesshome = (props) => {

    return (
        <>
            <section className={styles[props.processclass]}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='black font20 f-700'>Let's work together</h3>
                            <h2 className='black f-40 f-700'>Project Process</h2>
                            <p className='black font16 f-500'>Our work speaks for us. See how we create powerful, customer-centric <br></br> mobile applications for various industry verticals to help them achieve <br></br> their business objectives.</p>
                            <Image src={banImg1} alt='BitsWits' className='img-fluid mt-3' />
                        </Col>
                    </Row>
                </Container>
                <div className={styles.nomad}></div>
            </section>
        </>
    )
}

export default ProjectProcesshome