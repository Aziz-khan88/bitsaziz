"use client"
import React, { useEffect, useState } from "react";
// import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import styles from '@/styles/InnerBlog.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import { getSinglePost } from "../../../lib/posts";
import Date from "../../components/Date";
//
import arrow from '/public/images/blogBanners/right-arrow.webp'
import logo from '/public/images/icons/favicon.png'

export default function Post({ params }) {
    let featuredImageUrl = "https://inhouse.cryscampus.com/wordpress/bitswits/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

    const [postData, setPostData] = useState(false);
    const handlePost = async () => {
        const allPosts = await getSinglePost(params.postslug);
        setPostData(allPosts);
    }
    useEffect(() => {
        handlePost();
    }, [])
    if (postData) {
        return (
            <>
                {/* <Head>
                    <title key="title">{postData.title}</title>
                    <meta name="description" content={postData.metaDesc} key="metadesc" />
                    <meta property="og:title" content={postData.opengraphTitle} />
                    <meta key="og-description" property="og:description" content={postData.metaDesc} />
                    <meta property="og:url" content={postData.opengraphUrl} />
                    <meta property="og:type" content={postData.opengraphType} />
                    <meta property="og:locale" content="en_IN" />
                    <meta property="og:site_name" content={postData.opengraphSiteName} />
                </Head> */}
                <section className={styles.innerBlog}>
                    <Container>
                        <Row className="justify-content-between">
                            <Col lg={8}>
                                {postData &&
                                    <div className={styles.blogContent}>
                                        <div className={`${styles.contentHeading}`}>
                                            <h1>{postData.title}</h1>
                                            <h6 className={`${styles.detailDate} mt-5`}>
                                                <Image quality={75} src={logo} alt="BitsWits" width={25} height={25} />
                                                <span>By BitsWits Team in 2024</span>
                                            </h6>
                                            <h6 className="mt-3 mb-0 fw-bold font14">
                                                Published on  <Date dateString={postData.date} />
                                            </h6>
                                        </div>
                                        <div className="mt-4">
                                            {postData.featuredImage ?
                                                (
                                                    <Image quality={75} src={`https://inhouse.cryscampus.com/wordpress/bitswits/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`} alt="BitsWits" width={736} height={450} />
                                                )
                                                :
                                                (
                                                    <Image quality={75} src={featuredImageUrl} alt="BitsWits" width={736} height={450} />
                                                )
                                            }
                                        </div>
                                        <div className={`${styles.contentBody} mt-4`}
                                            dangerouslySetInnerHTML={{ __html: postData.content }}>
                                        </div>
                                    </div>
                                }
                            </Col>

                            <Col lg={3}>
                                <div className={`${styles.cta} mt-5 mt-lg-0`}>
                                    <div className={styles.ctaImg}>
                                        <Link href="/blog" className={`${styles.ctaBtn} mt-5`}>
                                            get custom web designs
                                        </Link>
                                    </div>
                                </div>

                                <div className={`${styles.platForm} mt-5`}>
                                    <h5 className={styles.subTitle}>
                                        Endorsements on different Platforms
                                    </h5>
                                    <h5 className={styles.title}>
                                        Awards And Recognition
                                    </h5>
                                    <p className={styles.para}>
                                        Thriving on accelerating the path to disruption and value creation in all directions has enabled
                                        us to receive acknowledgment and recognition by leading ratings and review platforms.
                                    </p>
                                    <Link href="/blog" className={`${styles.arrowBtn} mt-3`}>
                                        <span>View Reviews</span>
                                        <Image className='img-fluid' src={arrow} alt="BitsWits" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}