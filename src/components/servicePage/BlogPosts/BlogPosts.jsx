import React from 'react'
import styles from "@/styles/servicepage/BlogPosts.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
// Image
import BlogImage1 from "media/newblogs/blog-1.png"
import BlogImage2 from "media/newblogs/blog-2.png"
import BlogImage3 from "media/newblogs/blog-3.png"
import profile from "media/newblogs/blog-client.svg"
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"

const BlogPosts = () => {
    return (
        <section className={styles.readSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className=' manrope mb-5 text-center'>Our Related Blog Posts</h2>
                    </Col>
                    <Col md={6} lg={4} className='p-2'>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src={BlogImage1} alt='Bitswits' className='img-fluid w-100' />
                            </div>
                            <div className={styles.cardContent}>
                                <p className='fontsfregular manrope font-regular'>Blockchain</p>
                                <h5 className='fontsfregular manrope'>Conquer Tech With Bitswits: <br />
                                    Your Path To Unstoppable Progress!</h5>
                                <p className='fontsfregular manrope font-regular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain,  Their Comprehensive Work, From Requirement Analysis</p>
                                <div className={styles.btn}>
                                    <a href="javascript:;" className='text-black manrope font-bold'>
                                        Read More
                                        <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.cardBottom}>
                                <div className={styles.cardBottomImg}>
                                    <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className={styles.cardbottomContent}>
                                    <div className='d-flex align-items-center gap-2 pb-1'>
                                        <h3 className='fontsfregular manrope font-bold'>Nick Willford</h3>
                                        <Image src={verifies} alt='bitswits' width={13} height={13} />
                                    </div>
                                    <p className='fontsfregular manrope font-regular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className='p-2'>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src={BlogImage2} alt='Bitswits' className='img-fluid w-100' />
                            </div>
                            <div className={styles.cardContent}>
                                <p className='fontsfregular manrope font-regular'>Mobile Application</p>
                                <h5 className='fontsfregular manrope'>Conquer Tech With Bitswits: <br />
                                    Your Path To Unstoppable Progress!</h5>
                                <p className='fontsfregular manrope font-regular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain,  Their Comprehensive Work, From Requirement Analysis</p>
                                <div className={styles.btn}>
                                    <a href="javascript:;" className='text-black manrope font-bold'>
                                        Read More
                                        <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.cardBottom}>
                                <div className={styles.cardBottomImg}>
                                    <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className={styles.cardbottomContent}>
                                    <div className='d-flex align-items-center gap-2 pb-1'>
                                        <h3 className='fontsfregular manrope font-bold'>Nick Willford</h3>
                                        <Image src={verifies} alt='bitswits' width={13} height={13} />
                                    </div>
                                    <p className='fontsfregular manrope font-regular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='p-2'>
                        <div className={styles.card}>
                            <div className={styles.cardImg}>
                                <Image src={BlogImage3} alt='Bitswits' className='img-fluid w-100' />
                            </div>
                            <div className={styles.cardContent}>
                                <p className='fontsfregular manrope font-regular'>General</p>
                                <h5 className='fontsfregular manrope'>Conquer Tech With Bitswits: <br />
                                    Your Path To Unstoppable Progress!</h5>
                                <p className='fontsfregular manrope font-regular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain,  Their Comprehensive Work, From Requirement Analysis</p>
                                <div className={styles.btn}>
                                    <a href="javascript:;" className='text-black manrope font-bold'>
                                        Read More
                                        <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.cardBottom}>
                                <div className={styles.cardBottomImg}>
                                    <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className={styles.cardbottomContent}>
                                    <div className='d-flex align-items-center gap-2 pb-1'>
                                        <h3 className='fontsfregular manrope font-bold'>Nick Willford</h3>
                                        <Image src={verifies} alt='bitswits' width={13} height={13} />
                                    </div>
                                    <p className='fontsfregular manrope font-regular'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogPosts
