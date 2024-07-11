import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Latestblog.module.css";

const Latestblog = (props) => {
    return (
        <>
            <section className={styles.ourBlogs}>
                <Container>
                    <Row className='gy-4 gy-lg-5'>
                        <Col lg={12}>
                            <h4 className='font40 text-black f-500 center'>Our Latest Blog Posts</h4>
                        </Col>
                        {props.blogBox.map((blog, index) => (
                            <Col md={4} className='mb-lg-3'>
                                <div key={index} className={`${styles.blogBox} d-flex flex-column gap-2 gap-lg-4 pb-3 pb-lg-5`}>
                                    <Image loading='lazy' sizes="100vw" src={blog.img} alt='BitsWits' className='img-fluid mb-2' />
                                    <div className='px-3'>
                                        <h4 className='text-black f-500'>{blog.title}</h4>
                                        <p className='fw300 m-0'>{blog.content}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        <Col lg={12}>
                            <Link href="/blog" className={`${styles.blogBtn} pink mt-3 mt-lg-0`}>
                                View All
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Latestblog
