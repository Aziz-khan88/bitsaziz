import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Experance.module.css";

import scr4 from '/public/dubailp/dem/1.png';
import scr5 from '/public/dubailp/dem/2.png';
import scr6 from '/public/dubailp/dem/3.png';
import arrow from '/public/dubailp/dem/arrow.png';
import arrow2 from '/public/dubailp/dem/arrow2.png';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experiance = (props) => {

  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // slider 
  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={`${styles[props.tale]}`}>
        <Container className={styles.startups}>
          <Row className={styles.super}>
            <Col xl={12}>
              <h2 className="white font50 f-700  mb-3 center">From Vision to Reality: Leading Mobile Application Development Company in Dubai</h2>
              <p className="font16 font-normal white center">At BitsWits, we excel in creating digital products that help big companies stand out and empower startups to make a quick and meaningful difference. Our secret to success lies in the passion and dedication of our handpicked team of app developers and designers in Dubai. We do not just execute tasks; we share our clients' visions and collaborate to refine, test, and cultivate ideas that drive success.</p>
              <p className="font16 font-normal white  mb-5 center">Our team is driven by a shared passion to help clients discover unique pathways to triumph in the competitive market. We have carefully curated a group of in-house developers, designers, and other professionals who are not just skilled but also deeply committed to every project they undertake.</p>
              <p className="font16 font-normal white  mb-5 center">With a collaborative approach at the core of our work, we ensure that every aspect of app development is a shared journey toward achieving your goals. At BitsWits, we are more than just a mobile application development company in Dubai; we are your partners in innovation and success.</p>
            </Col>
          </Row>
          {isSliderActive ?

            <Row className={styles.dust}>
              <Col xl={4}>
                <div className={styles.dustpost}>
                  <h4>300+</h4>
                  <p>Apps Developed</p>
                </div>
              </Col>
              <Col xl={4} className={styles.moutn}>
                <div className={styles.dustpost}>
                  <h4>65+</h4>
                  <p>Clutch Reviews</p>
                </div>
              </Col>
              <Col xl={4}>
                <div className={styles.dustpost}>
                  <h4>35+</h4>
                  <p>Industries Served</p>
                </div>
              </Col>
            </Row>

            :
            <Slider
              {...awardslogo}
              className={` ${styles.startup1}  startposition d-block m-auto text-center`}
            >


              <div className={styles.dustpost}>
                <h4>300+</h4>
                <p>Apps Developed</p>
              </div>


              <div className={styles.dustpost}>
                <h4>65+</h4>
                <p>Clutch Reviews</p>
              </div>


              <div className={styles.dustpost}>
                <h4>35+</h4>
                <p>Industries Served</p>
              </div>


            </Slider>

          }

        </Container>
      </section>
    </>
  )
}

export default Experiance