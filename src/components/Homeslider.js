import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import styles from "@/styles/Homeslider.module.css";
//
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { register } from "swiper/element/bundle";
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Autoplay]);


const MySwiperComponent = () => {

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
  const slides = [
    {
      avatar: "images/logoservices/loop/1.webp",
    },
    {
      avatar: "images/logoservices/loop/2.webp",
    },
    {
      avatar: "images/logoservices/loop/3.webp",
    },
    {
      avatar: "images/logoservices/loop/4.webp",
    },
    {
      avatar: "images/logoservices/loop/5.webp",
    },
    {
      avatar: "images/logoservices/loop/6.webp",
    },
    {
      avatar: "images/logoservices/loop/7.webp",
    },
    {
      avatar: "images/logoservices/loop/1.webp",
    },
    {
      avatar: "images/logoservices/loop/2.webp",
    },
    {
      avatar: "images/logoservices/loop/3.webp",
    },
    {
      avatar: "images/logoservices/loop/4.webp",
    },
    {
      avatar: "images/logoservices/loop/5.webp",
    },
    {
      avatar: "images/logoservices/loop/6.webp",
    },
    {
      avatar: "images/logoservices/loop/7.webp",
    },
  ];
  return (
    <>
      <section className={`${styles.peace} homvibes newbird`}>
        <Container>
          <Row>
            <Col xl={12}>
              <h3 className="black f-20 f-700 center mb-4">
                SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!
              </h3>
              <h2 className="black f-40 f-700 center mb-5">
                We Love Transfoming Product ideas into <br></br> Digital Reality{" "}
              </h2>
            </Col>
          </Row>
        </Container>
        <div className={styles.slider}>
          <swiper-container
            init={false}
            ref={swiperElRef}
            centered-slides="false"
            autoplay-delay="3000"
            loop="true"
          >
            {slides &&
              slides.map((testimonial, index) => (
                <swiper-slide className='newfold newtown' key={index}>
                  <div>
                    <div className="w-[90%] m-auto py-10">
                      <div className="card">
                        <img quality={95}
                          src={testimonial.avatar}
                          alt='bitswits'
                        />
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              ))}
          </swiper-container>
        </div>
      </section>
      <section className={styles.view1sec}>
        <Container>
          <Row>
            <Col xl={12}>
              <Link href="#" className={styles.view}>
                View All Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default MySwiperComponent;