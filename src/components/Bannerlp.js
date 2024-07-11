import React from 'react'
import styles from "@/styles/bannerlp.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import LpCarousel from '../components/LpCarousel';


const AndriodBanner = (props) => {

    return (
        <>
            <section className={styles[props.newHomeBgprops]} >
                <Container>
                    <Row>
                        <Col xl={12}>
                            {props.title}
                            {props.para}
                            {props.btn2}
                            <div className='mt-5 center'>
                                <LpCarousel />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AndriodBanner