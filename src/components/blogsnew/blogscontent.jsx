import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/BlogContent.module.css"
import Image from 'next/image';
// Images
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"
import BlogImage1 from "media/newblogs/blog-1.png"
import BlogImage2 from "media/newblogs/blog-2.png"
import BlogImage3 from "media/newblogs/blog-3.png"
import profile from "media/newblogs/blog-client.svg"
import Link from 'next/link';

const blogscontent = () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <>
            <section className={styles.blogcontent}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.form}>
                                <form action="javascript:;">
                                    <select className={styles.search}>
                                        <option value="Blockchain" className='fontsfregular'>Blockchain</option>
                                        <option value="Development" className='fontsfregular'>Development</option>
                                        <option value="Game Development" className='fontsfregular'>Game Development</option>
                                    </select>
                                    <input type="text" />
                                    <button type='submit' className='fontsfregular'>Search</button>
                                </form>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.tabs}>
                                <ul className='pt-5'>
                                    <li className={`${activeTab1 === 'tab1' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab1')}>
                                        All
                                    </li>
                                    <li className={`${activeTab1 === 'tab2' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab2')}>
                                        Blockchain
                                    </li>
                                    <li className={`${activeTab1 === 'tab3' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab3')}>
                                        eCommerce
                                    </li>
                                    <li className={`${activeTab1 === 'tab4' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab4')}>
                                        General
                                    </li>
                                    <li className={`${activeTab1 === 'tab5' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab5')}>
                                        Mobile Application
                                    </li>
                                    <li className={`${activeTab1 === 'tab6' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab6')}>
                                        News
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="tabs-body">
                                {activeTab1 == 'tab1' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2 order-3 order-lg-1'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-2 order-lg-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-first order-lg-3'>
                                                <div className={styles.cardTwo}>
                                                    <h2 className='fontsfregular'>Top-Quality Articles, Delivered Weekly.</h2>
                                                    <p className='fontsfregular text-center'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine</p>
                                                    <div className={styles.form}>
                                                        <form action="javascript:;">
                                                            <input type="email" name='email' placeholder='Enter Your Email' className='fontsfregular' />
                                                            <button type='submit' className='fontsfregular bitsForm'>Subscribe</button>
                                                        </form>
                                                    </div>
                                                    <p className='fontsfregular text-start pt-4'>By Entering Your Email, You Are Agreeing To Our Privacy <a href='javascript:;' className='text-white'>Policy.</a></p>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-4'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-5'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-6'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-7'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-8'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2 order-9'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12} className='order-10'>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab2' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab3' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab4' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab5' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab6' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Bitswits</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
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
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default blogscontent
