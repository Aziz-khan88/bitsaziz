import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaPhoneAlt } from "react-icons/fa";
import styles from "@/styles/NewMobileApp/Location.module.css"
import Link from 'next/link';

const Location = () => {
    return (
        <>
            <section className={styles.locationSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <h2 className='mb-4 mb-md-5'>
                                <span>Areas</span> We Serve
                            </h2>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.locations}>
                                <div className={styles.locate}>
                                    <h3>HOUSTON</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>2800 Post Oak Blvd STE 4100, <br className='d-none d-lg-block' /> Houston, TX 77056, United States 6</span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <a href="tel:1 833 500 6007">
                                            +1 833 500 6007
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>Chicago</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>141 W Jackson Blvd STE 300 A, <br className='d-none d-lg-block' /> Chicago, IL 60604, United States </span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <a href="tel:1 833 500 6007">
                                            +1 833 500 6007
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>Dallas</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>1341 W Mockingbird Ln, Dallas, <br className='d-none d-lg-block' /> TX 75247, United States </span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <a href="tel:1 833 500 6007">
                                            +1 833 500 6007
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>New york</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>26 Broadway Suite 934, New York, <br className='d-none d-lg-block' /> NY 10004, United States </span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <a href="tel:1 833 500 6007">
                                            +1 833 500 6007
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>Dubai</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>office #101 - 32 Street - Al Majarra -<br className='d-none d-lg-block' /> Mughaidir Suburb - Sharjah - United Arab Emirates </span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <a href="tel:(+971) 55 503 1266">
                                            (+971) 55 503 1266
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Location
