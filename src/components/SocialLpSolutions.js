import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/SocialLpSolutions.module.css";
//
import SocialLpCarousel from '../components/SocialLpCarousel';


const SocialLpSolutions = () => {
    return (
        <>
            <section className={styles.socialSolution} >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.smTxt}>
                                <h3>Types of Social Media App Development</h3>
                                <h2 className='newchoose'>Social Media App Development Solutions</h2>
                                <p>Our comprehensive services cover everything from design to development, ensuring your journey to create an app is smooth and successful. With our support, the process of app-making is not just easy. It's a journey of innovation.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.smSolTxt}>
                                <h4>Community Building App Development</h4>
                                <p>Creating social media platforms with features like user profiles, friend systems, and community forums to encourage user engagement and community building.</p>
                                <h4>Instant Messaging App Development</h4>
                                <p>Crafting instant messaging apps that offer real-time messaging, voice and video calls, and group chat functionalities, all while focusing on user-friendly interfaces and secure communication protocols.</p>
                                <h4>Professional Networking App Development</h4>
                                <p>We can tailor solutions for professional networking, including features like job postings, professional profile creation, and industry news.</p>
                                <h4>Dating App Development</h4>
                                <p>Creating dating apps that provide safe and engaging platforms for dating and building relationships. Our features include profile matching, privacy controls, and in-app messaging.</p>
                                <h4>Event Planning App Development</h4>
                                <p>Developing apps that facilitate event discovery, planning, and management with integrated social networking features.</p>
                                <h4>Content Sharing Platform Development</h4>
                                <p>Creating apps for sharing various media types such as photos, videos, and blogs. We focus on media management, high-quality content display, and interactive features.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <SocialLpCarousel />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SocialLpSolutions
