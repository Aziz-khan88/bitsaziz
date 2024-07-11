"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'
// 
import { getPostList } from "@/lib/posts";
import Date from "../components/Date";
import LoadMore from "../components/LoadMore";
import FeaturedImage from "../components/FeaturedImage";
//
import arrow from '/public/images/blogBanners/right-arrow.webp'

const Blogs = () => {
    const [posts, setPosts] = useState(false);
    const handlePost = async () => {
        const allPosts = await getPostList();
        setPosts(allPosts);
    }
    useEffect(() => {
        handlePost();
    }, [])
    return (
        <>
            <main>
                <section className={`${styles.postList} pt-3 pt-lg-5`}>
                    <Container>
                        <Row>
                            <Col lg={9}>
                                <div className={`${styles.blogCard}`}>
                                    {
                                        posts && posts.nodes.map((post) => (
                                            <Row key={post.slug} className={`${styles.blogRow} align-items-center mb-0 mb-lg-5`}>
                                                <Col md={5} className="text-center">
                                                    <FeaturedImage post={post} />
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.cardCntnt}>
                                                        <h4 className={`${styles.blogTitle} mb-0`}>
                                                            <Link href={`${post.slug}`}>
                                                                {post.title}
                                                            </Link>
                                                        </h4>

                                                        {
                                                            post.categories.nodes.map((category) => (
                                                                <h5 className={`${styles.blogCategory} mt-2`} key={category.slug}>
                                                                    {category.name} - Blog
                                                                </h5>
                                                            ))
                                                        }

                                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                        </div>

                                                        <h6 className={styles.detailDate}>
                                                            Published on <Date dateString={post.date} />
                                                        </h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </div>
                                <div className="pt-lg-0 pt-4 pb-4 text-center">
                                    {posts && <LoadMore posts={posts} setPosts={setPosts} />}
                                </div>
                            </Col>
                            <Col lg={3} className='mb-5 mb-lg-0'>
                                <div className={`${styles.cta}`}>
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
                                        <span className='white'>View Reviews</span>
                                        <Image className='img-fluid' src={arrow} alt="bitswits" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Blogs
