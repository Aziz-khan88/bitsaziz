import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/NewMobileApp/AppsLived.module.css"
import Image from 'next/image'
import Link from 'next/link'

// Images 
import rightArrow from "media/newmobileapp/right-arrow.png"
import clutch from "media/newDubaiPagev1/clutch.png"
import slider1 from "media/newmobileapp/slider-1.png"
import slider2 from "media/newmobileapp/slider-2.png"
import slider3 from "media/newmobileapp/slider-3.png"
import slider4 from "media/newmobileapp/slider-4.png"
import slider5 from "media/newmobileapp/slider-5.png"


const HomeCaseStudies = ({ content, onAnchorClick }) => {
    const sectionRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, {
            threshold: 0.5 // Change this value according to your preference
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startCounters = () => {
        const counterElements = document.querySelectorAll('.counter');

        counterElements.forEach((item) => {
            let counterInnerText = parseInt(item.textContent);
            let count = 1;
            let speed = parseInt(item.dataset.speed) / counterInnerText;
            const stop = setInterval(() => {
                item.textContent = count++;
                if (counterInnerText < count) {
                    clearInterval(stop);
                    if (counterInnerText === 1) {
                        item.textContent += "M +";
                    } else if (counterInnerText === 124) {
                        item.textContent += "%";
                    } else if (counterInnerText === 138) {
                        item.textContent += "%";
                    } else if (counterInnerText === 167) {
                        item.textContent += "%";
                    } else if (counterInnerText === 112) {
                        item.textContent += "%";
                    } else if (counterInnerText === 127) {
                        item.textContent += "%";
                    } else {
                        item.textContent += "K";
                    }
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };

    var appsSlider = {
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        beforeChange: (current, next) => {
            setActiveSlide(next);
        }
    };

    const contentData = [
        [
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: "1M+"
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: "124%"
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: "250K"
            },

        ],
        [
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: "1M+"
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: "138%"
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: "470K"
            },

        ],
        [
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: "1M+"
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: "167%"
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: "500K"
            },
        ],
        [
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: "1M+"
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: "112%"
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: "300K"
            },
        ],
        [
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: "1M+"
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: "127%"
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: "280K"
            },
        ],
    ];

    const SliderContent = [
        {
            image: slider3,
            title: "Soul Scribe",
            desc: "A social networking digital diary to share with friends and family and rejoice memories.",
            href: "/social-app-development-case-study"
        },
        {
            image: slider5,
            title: "Crave Cuisine",
            desc: "Select from local eateries, place your order, and savor quality dishes brought straight to you.",
            href: "/food-delivery-app-development-case-study"
        },
        {
            image: slider4,
            title: "Fit Now",
            desc: "Select your workout, set your goals, and work under the direction of renowned fitness experts. ",
            href: "/fitness-app-development-case-study"
        }
    ]
    return (
        <>
            <section id='casestudies' ref={sectionRef} className={styles.appStyles}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className={styles}>
                                <h2>Our <span>Apps</span> that Left an <span>Indelible</span> Mark!</h2>
                                <p>BitsWits has launched some of the leading mobile applications on Google Play Store and Apple App Store. Our iOS app development services and Android app development services have geared businesses to take the market by storm. Our work is a testimony to the quality of our full-cycle development processes. </p>
                            </div>
                        </Col>
                        <Col lg={5} className='px-1'>
                            <div className={styles.featured}>
                                <div>
                                    <div className={styles.btn}>
                                        <a href="javascript:;">
                                            FEATURED WORKS
                                        </a>
                                    </div>
                                    <h3>Prized Offerings That Made A Splash</h3>
                                    <p>We aim to provide the best value for money through quality provisions. ROI’s that far exceed expectations.</p>

                                    <div className={styles.blackBtn}>
                                        <a href="tel:1 833 500 6007" className='d-flex align-items-center gap-4 blackPulse'>
                                            Free Consultation
                                            <Image src={rightArrow} alt='Bitswits' width={24} height={12} />
                                        </a>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-5 pt-2'>
                                    {contentData[activeSlide] && (
                                        <div className={styles.counterMain}>
                                            {contentData[activeSlide].map((data, index) => (
                                                <div className="downloads" key={index}>
                                                    <img src={data.icon} alt='Bitswits' />
                                                    <h4>{data.title}</h4>
                                                    <h5>
                                                        <span className='mb-0 d-inline'>
                                                            {data.number}
                                                        </span>
                                                    </h5>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="clutch d-none d-xl-block">
                                        <Image src={clutch} alt='Bitswits' width={127} height={60} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className='px-1'>
                            <Slider {...appsSlider} className={`${styles.appsSlider} appsSlider`}>
                                {SliderContent.map((content, index) => (
                                    <div className=''>
                                        <div key={index} className={styles.slider}>
                                            <div className={styles.sliderImage}>
                                                <Image src={content.image} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <div className="txt">
                                                    <h2>{content.title}</h2>
                                                    <p>{content.desc}</p>
                                                </div>
                                                <div className={styles.sliderBtn}>
                                                    <a href={content.href} onClick={onAnchorClick} className='d-flex align-items-center gap-4 black'>
                                                        View Case Study
                                                        <Image src={rightArrow} alt='Bitswits' width={24} height={12} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default HomeCaseStudies
