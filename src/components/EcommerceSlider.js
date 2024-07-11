import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "@/styles/EcommerceSlider.module.css";
//
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { register } from "swiper/element/bundle";

SwiperCore.use([Navigation, Autoplay]);


const EcommerceSlider = () => {

    const slides = [
        { img1fold: '../../ecommerce/1.webp' },
        { img1fold: '../../ecommerce/2.webp' },
        { img1fold: '../../ecommerce/3.webp' },
        { img1fold: '../../ecommerce/4.webp' },
        { img1fold: '../../ecommerce/5.webp' },
        { img1fold: '../../ecommerce/6.webp' },
        { img1fold: '../../ecommerce/7.webp' },
        { img1fold: '../../ecommerce/2.webp' },
        { img1fold: '../../ecommerce/3.webp' },
        { img1fold: '../../ecommerce/4.webp' },
        { img1fold: '../../ecommerce/5.webp' },
        { img1fold: '../../ecommerce/6.webp' },
        { img1fold: '../../ecommerce/7.webp' },
    ];


    const swiperElRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerView: 9,
            injectStyles: [
                `.swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background: #00C0E4;
          }
        `,
            ],

        };


        Object.assign(swiperElRef.current, params);
        swiperElRef.current.initialize();
    }, []);


    return (
        <section className={`${styles.slider} homvibes`}>
            <Row className='ecommerceslide'>
                <Col lg={12}>
                    <swiper-container
                        init={false}
                        ref={swiperElRef}
                        centered-slides="false"
                        autoplay-delay="3000"
                        loop="true"
                    >
                        {slides &&
                            slides.map((testimonial, index) => (
                                <swiper-slide className='newfold' key={index}>
                                    <div>
                                        <div className="w-[90%] m-auto py-10">
                                            <div className="card testimonialscard">
                                                <img quality={95}
                                                    src={testimonial.img1fold}
                                                    alt='bitswits'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            ))}
                    </swiper-container>
                </Col>
            </Row>
        </section>
    );
};

export default EcommerceSlider;