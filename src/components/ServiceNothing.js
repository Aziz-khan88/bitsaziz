import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/ServiceNothing.module.css";
//images
import banImg1 from "/public/images/nothing/map.png";
//
import Clutch from "media/newmobileapp/clutch-black.png"
import news1 from "/public/images/nothing/1.png";
import news2 from "/public/images/nothing/1.png";
import news3 from "/public/images/nothing/1.png";
import news4 from "/public/images/nothing/1.png";
import news5 from "/public/images/nothing/1.png";
import verified from "/public/newHomePage/images/pageLp6/verified.png";
//
import { register } from "swiper/element/bundle";
import "swiper/css/effect-coverflow";

export default function ServiceNothing(props) {

    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            speed: 500,
            loop: true,
            injectStyles: [
                `
                .swiper {
                  position: relative;
                }
                .swiper::after {
                  content: "";
                  position: absolute;
                  background: rgb(112, 112, 112);
                  width: 63%;
                  height: 3px;
                  bottom: 7px;
                  left: 0px;
                }
                .swiper-pagination {
                    bottom: 0px !important ;
                }
                .swiper-pagination-bullet {
                    width: 16px;
                    height: 16px;
                    text-align: center;
                    line-height: 16px;
                    font-size: 8px;
                    color: #292929;
                    opacity: 1;
                    background: #292929;
                }
                .swiper-pagination-bullet-active {
                    color: #f32f53;
                    background: #f32f53;
                }
                .swiper-pagination {
                  text-align: right ;
                }
                @media screen and (max-width: 1280px) {
                    .swiper::after {
                      width: 56%;
                  }
                }
                @media screen and (max-width: 991px) {
                    .swiper::after {
                      width: 79%;
                  }
                }
                @media screen and (max-width: 767px) {
                  .swiper::after {
                    width: 56%;
                }
              }
            `,
            ],
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            paginationType: "progressbar",
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <>
            <section className={styles[props.Nothing]} id="newtown">
                <Container className="newfoldlp">
                    <Row className="  align-items-center">
                        <Col lg={12}>
                            <h3 className="text-black f-30 f-700 center mb-0 mb-sm-1">
                                Our Client’s Feedback Has Been
                            </h3>
                            <h2 className="text-black newchoose f-700 center mb-2 mb-lg-5">
                                Nothing Short Of Amazing!
                            </h2>
                        </Col>
                        <Col lg={8}>
                            <Image
                                width={869}
                                height={855}
                                src={banImg1}
                                alt="BitsWits"
                                className={`${styles.mapImg} img-fluid`}
                            />
                        </Col>
                        <Col lg={4}>
                            <div>
                                <swiper-container ref={swiperRef} init={false}>
                                    <swiper-slide>
                                        <div className={styles.strpImg}>
                                            <Image
                                                alt="BitsWits"
                                                src={Clutch}
                                                className="img-fluid  "
                                            />
                                            <p className="text-black font14 mt-4 mb-2 fontf font-regular">
                                                Bitswits' development of the ProEYE project, a wallet
                                                analytics and search engine platform on blockchain, was
                                                exceptional. Their comprehensive work, from requirement
                                                analysis to deployment, resulted in a highly functional,
                                                user-friendly platform with advanced analytics and
                                                robust data integration. Their attention to detail in
                                                every phase ensured ProEYE's success in the blockchain
                                                arena.
                                            </p>
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <h4 className="text-black font20 mb-0">Joseph</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                                <p className="text-black font12 mb-0">
                                                    CTO / Pronftdesign.com
                                                </p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image
                                                        src={verified}
                                                        width={15}
                                                        height={15}
                                                        alt="BitsWits"
                                                        className={`img-fluid ${styles.verifiedImage}`}
                                                    />
                                                    <p className="text-black font12 mb-0">Verified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className={styles.strpImg}>
                                            <Image
                                                alt="BitsWits"
                                                src={Clutch}
                                                className="img-fluid  "
                                            />
                                            <p className="text-black font14 mt-4 mb-2">
                                                Bitswits excelled in developing our custom CRM system,
                                                perfectly aligning it with our SEO firm's workflow.
                                                Their team delivered an efficient, user-friendly
                                                solution with impressive attention to detail. We highly
                                                recommend Bitswits for their professionalism and app
                                                development expertise.
                                            </p>
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <h4 className="text-black font20 mb-1">Daniel Gonzalez</h4>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                                <p className="text-black font12 mb-0">
                                                    CTO / Pronftdesign.com
                                                </p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image
                                                        src={verified}
                                                        width={15}
                                                        height={15}
                                                        alt="BitsWits"
                                                        className={`img-fluid ${styles.verifiedImage}`}
                                                    />
                                                    <p className="text-black font12 mb-0">Verified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className={styles.strpImg}>
                                            <Image
                                                alt="BitsWits"
                                                src={Clutch}
                                                className="img-fluid "
                                            />
                                            <p className="text-black font14 mt-4 mb-2">
                                                Bitswits delivered an efficient solution that
                                                significantly improved processing speed, productivity,
                                                and accuracy. Their proactive engagement, soliciting of
                                                feedback, and implementing improvements ensured a
                                                successful partnership. The team's versatility and
                                                adaptability were commendable.
                                            </p>
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <h4 className="text-black font20 mb-1">Ryan Jaden</h4>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                                <p className="text-black font12 mb-0">iTRans.ai</p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image
                                                        src={verified}
                                                        width={15}
                                                        height={15}
                                                        alt="BitsWits"
                                                        className={`img-fluid ${styles.verifiedImage}`}
                                                    />
                                                    <p className="text-black font12 mb-0">Verified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className={styles.strpImg}>
                                            <Image
                                                alt="BitsWits"
                                                src={Clutch}
                                                className="img-fluid  "
                                            />
                                            <p className="text-black font14 mt-4 mb-2">
                                                We decided to hire app developers from Bitswits on their
                                                hourly package and it turned out to be a perfect fit for
                                                our project's needs. Their team's expertise and
                                                efficiency were impressive, delivering high-quality work
                                                within our budget. The app they developed is exactly
                                                what we envisioned, both innovative and user-friendly.
                                            </p>
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <h4 className="text-black font20 mb-1">Jordan</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                                <p className="text-black font12 mb-0">
                                                    Tech Startup Founder
                                                </p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image
                                                        src={verified}
                                                        width={15}
                                                        height={15}
                                                        alt="BitsWits"
                                                        className={`img-fluid ${styles.verifiedImage}`}
                                                    />
                                                    <p className="text-black font12 mb-0">Verified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className={styles.strpImg}>
                                            <Image
                                                alt="BitsWits"
                                                src={Clutch}
                                                className="img-fluid  "
                                            />
                                            <p className="text-black font14 mt-4 mb-2">
                                                Bitswits' development of the ProEYE project, a wallet
                                                analytics and search engine platform on blockchain, was
                                                exceptional. Their comprehensive work, from requirement
                                                analysis to deployment, resulted in a highly functional,
                                                user-friendly platform with advanced analytics and
                                                robust data integration. Their attention to detail in
                                                every phase ensured ProEYE's success in the blockchain
                                                arena.
                                            </p>
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <h4 className="text-black font20 mb-0">Joseph</h4>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                                <p className="text-black font12 mb-0">
                                                    CTO / Pronftdesign.com
                                                </p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image
                                                        src={verified}
                                                        width={15}
                                                        height={15}
                                                        alt="BitsWits"
                                                        className={`img-fluid ${styles.verifiedImage}`}
                                                    />
                                                    <p className="text-black font12 mb-0">Verified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div className={styles.strpImg}>
                                            <Image
                                                alt="BitsWits"
                                                src={Clutch}
                                                className="img-fluid  "
                                            />
                                            <p className="text-black font14 mt-4 mb-2">
                                                Working with Bitswits was a game-changer for our retail
                                                chain. They developed an AI-assisted inventory
                                                management system that automates stock level tracking
                                                and predictive ordering. The accuracy and efficiency it
                                                brings to our supply chain management are phenomenal.
                                                It's a prime example of how AI can transform traditional
                                                retail operations.
                                            </p>
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <h4 className="text-black font20 mb-1">Emily</h4>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                                <p className="text-black font12 mb-0">
                                                    Retail Chain Manager
                                                </p>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image
                                                        src={verified}
                                                        width={15}
                                                        height={15}
                                                        alt="BitsWits"
                                                        className={`img-fluid ${styles.verifiedImage}`}
                                                    />
                                                    <p className="text-black font12 mb-0">Verified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper-container>
                                <div className="mt-4 mt-md-5">
                                    <a href="javascript:$zopim.livechat.window.show();" className={`pink ${styles.btnpost}`}>
                                        Begin Your Success Story : Connect Now
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
