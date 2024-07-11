import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/Blognavigations.module.css"
import { FaAngleDown } from 'react-icons/fa';

const Blognavigations = () => {
    const [isNavVisible, setIsNavVisible] = useState(true); // Initially visible
    const [activeHeading, setActiveHeading] = useState('#heading1');

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleHeadingClick = (heading) => {
        setActiveHeading(heading);
    };

    useEffect(() => {
        const handleScroll = () => { 
            const isSticky = window.scrollY > 1000; // Example condition
            if (isSticky) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <section className={styles.sidebar}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.navigations}>
                                <div className={styles.mainHeading} onClick={toggleNavVisibility}>
                                    <h3 className='fontsfregular'>
                                        Navigation
                                        <FaAngleDown className='ms-3' />
                                    </h3>
                                </div>
                                {isNavVisible && (
                                    <ul className={styles.navHeadings}>
                                        <li>
                                            <a
                                                href='#heading1'
                                                className={`fontsfregular ${activeHeading === '#heading1' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading1')} >
                                                Conquer Tech With Bitswits: <br />
                                                Your Path To Unstoppable Progress!
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#heading2'
                                                className={`fontsfregular ${activeHeading === '#heading2' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading2')} >
                                                Development Of A Crypto Exchange  <br />Platform App
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#heading3'
                                                className={`fontsfregular ${activeHeading === '#heading3' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading3')} >
                                                Tech Stack For Development
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#heading4'
                                                className={`fontsfregular ${activeHeading === '#heading4' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading4')} >
                                                Security Measurements
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='javascript:;'
                                                className={`fontsfregular ${activeHeading === 'javascript:;' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('javascript:;')} >
                                                Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='javascript:;'
                                                className={`fontsfregular ${activeHeading === 'javascript:;' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('javascript:;')} >
                                                Development Of A Crypto Exchange <br /> Platform App
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='javascript:;'
                                                className={`fontsfregular ${activeHeading === 'javascript:;' ? styles.active : 'text-black'}`} onClick={() => handleHeadingClick('javascript:;')} >
                                                Tech Stack For Development
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className={styles.articles}>
                                <h3 className='fontsfregular'>Relevant Articles</h3>
                                <ul className='mt-4'>
                                    <li>
                                        <p className='fontsfregular'>Blockchain</p>
                                        <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</h6>
                                    </li>
                                    <li>
                                        <p className='fontsfregular'>Mobile Application</p>
                                        <h6 className='fontsfregular'>Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software</h6>
                                    </li>
                                    <li>
                                        <p className='fontsfregular'>General</p>
                                        <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</h6>
                                    </li>
                                    <li>
                                        <p className='fontsfregular'>Mobile Application</p>
                                        <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.services}>
                                <h3 className='fontsfregular mb-4'>
                                    See Our Relsted Services
                                </h3>
                                <ul>
                                    <li>
                                        Mobile App Development
                                    </li>
                                    <li>
                                        Blockchain App Development
                                    </li>
                                    <li>
                                        React Native
                                    </li>
                                    <li>
                                        Game App Development
                                    </li>
                                    <li>
                                        Artificial Intelligence
                                    </li>
                                    <li>
                                        Android App Development
                                    </li>
                                    <li>
                                        iOS App Development
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Blognavigations
