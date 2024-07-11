import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap';
import styles from '@/styles/Industries.module.css';
// Images
import realState from "media/newdubai/real-state.jpg"
import gaming from "media/newdubai/gaming-industries.jpg"
import information from "media/newdubai/information-technology.jpg"
import SliderOne from 'media/newdubai/slider-bg-5.webp';
import SliderTwo from 'media/newdubai/slider-bg-6.jpg';
import SliderThree from 'media/newdubai/slider-bg-7.jpg';
import SliderFour from 'media/newdubai/slider-bg-10.jpg';
import SliderFive from 'media/newdubai/slider-bg-9.jpeg';
import SliderSix from 'media/newdubai/slider-bg-10.jpg';
import SliderSeven from 'media/newdubai/slider-bg-1.jpg';
import SliderArrow from 'media/newdubai/slider-btn-arrow.png';

const Industries = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isSliderHovered, setIsSliderHovered] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(null);

    const sliderContent = [
        {
            title: 'Real Estate',
            desc: 'We ensure property listings, virtual tours, and essential features for real estate.',
            href: '#',
        },
        {
            title: 'Sports',
            desc: 'Our sports solutions meet evolving needs with fan engagement, performance tracking, and management systems.',
            href: '#',
        },
        {
            title: 'E-commerce',
            desc: 'We optimize e-commerce for better UX, streamlined workflow, and increased revenue.',
            href: '#',
        },
        {
            title: 'Healthcare & Medical',
            desc: 'We enhance patient care, expedite procedural work, and adhere to regulatory standards.',
            href: '#',
        },
        {
            title: 'Automotive',
            desc: 'We create automotive apps enhancing UX, efficiency, and driving business growth.',
            href: '#',
        },
        {
            title: 'Manufacture',
            desc: 'We offer adaptive solutions, enhancing productivity and efficiency through process automation.',
            href: '#',
        },
        {
            title: 'Logistics',
            desc: 'Our logistics solutions precisely suit your needs, optimizing efficiency and customer service.',
            href: '#',
        },
        {
            title: 'Food & Beverage',
            desc: 'We innovate food delivery, restaurant management, keeping businesses competitive and thriving',
            href: '#',
        },
        {
            title: 'E-learning',
            desc: 'Our e-learning solutions replace traditional education, delivering robustness and stimulating growth.',
            href: '#',
        },
        {
            title: 'Agriculture',
            desc: 'In agriculture, we deploy cutting-edge tech to enhance farm operations, monitoring, and yield optimization.',
            href: '#',
        },
    ];

    const sliderImages = [realState, gaming, SliderOne, SliderTwo, SliderThree, SliderFour, SliderSeven, SliderFive, SliderSix];

    useEffect(() => {
        setBackgroundImage(sliderImages[activeSlide]);
    }, [activeSlide]);

    const handleMouseEnter = (index) => {
        setActiveSlide(index);
        setIsSliderHovered(true);
    };

    const handleMouseLeave = () => {
        setIsSliderHovered(false);
    };

    var industriesSlider = {
        infinite: false,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            <section className={styles.industriesSec}>
                <Row>
                    <Col lg={12}>
                        <div className={styles.txt}>
                            <h2>Industries We’ve Conquered</h2>
                        </div>
                        <div
                            className={styles.sliderBackground}
                            onMouseEnter={() => setIsSliderHovered(true)}
                            onMouseLeave={() => setIsSliderHovered(false)}>
                            {isSliderHovered || backgroundImage ? (
                                <Image src={backgroundImage || sliderImages[0]} width={1532} height={842} alt='Bitswits' loading='lazy' sizes="100vw" />
                            ) : null}
                        </div>
                        <Slider {...industriesSlider} className={`${styles.industriesSlider} industriesSlider`}>
                            {sliderContent.map((content, index) => (
                                <div key={index} className={`${styles.mainDiv} mainDiv`}>
                                    <div
                                        className={`px-3 ${styles.sliderDiv}`}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}>
                                        <div className={`${styles.cardHeading} cardHeading`}>
                                            <h3>{content.title}</h3>
                                        </div>
                                        <div className={`card ${styles.card}`}>
                                            <h3>{content.title}</h3>
                                            <p>{content.desc}</p>
                                            <Link href={content.href} className={styles.btn}>
                                                Learn More
                                                <span>
                                                    <Image src={SliderArrow} alt='Bitswits' loading='lazy' sizes="100vw" width={17} height={11} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default Industries;
