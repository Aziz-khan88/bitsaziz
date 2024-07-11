import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/GlobalmapDuplicate.module.css";

const GlobalmapDuplicate = () => {

    return (
        <>
            <section className={styles.mapGlobal}>
                <Container fluid>
                    <Row className="align-items-center">
                        <Col lg={6} className="p-0">
                            <div className={styles.newtimg}>
                                <h3>Meet Our Experts <br></br>
                                    One-on-One</h3>
                                <a className={styles.address} href='https://maps.app.goo.gl/ebo8RKEPUPVkDfZu9'>Office #101, 32 Street, Al Mujarrah, Sharjah</a>
                                <a className={styles.timr} href="javascript:$zopim.livechat.window.show();">Let's Chat</a>
                                <p className="black mb-0">Call us at <a className={styles.num} href="tel:+971551659060">+971 551 659060</a> </p>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.2030876727467!2d55.43093617444632!3d25.330965326271304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f593062f1ec89%3A0xbc77b4e02b99cac3!2s101%2032%20Street%20-%20Al%20Shahba%20-%20Mughaidir%20Suburb%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1711614171393!5m2!1sen!2s" ></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default GlobalmapDuplicate;
