import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Sucess.module.css";

import scr4 from '/public/dubailp/dem/1.png';
import scr5 from '/public/dubailp/dem/2.png';
import scr6 from '/public/dubailp/dem/3.png';
import arrow from '/public/dubailp/dem/arrow.png';
import arrow2 from '/public/dubailp/dem/arrow2.png';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Succes = (props) => {

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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={`${styles[props.tale]}`}>
        <Container>
          <Row className={styles.super}>
            <Col xl={12}>
              <h2 className="white font50 f-700  mb-3">Exploring Success Stories of Our Mobile App  <br></br>
                Development Company in Dubai</h2>
              <p className="font16 font-normal white  mb-5">BitsWits has transformed ideas into powerful applications, driving growth and excellence. Their journeys, challenges, and achievements have made them a trusted partner in app development. Explore their success stories and envision what we can create together to inspire startups and enterprises worldwide.</p>
            </Col>
          </Row>
          {isSliderActive ?
            <Row className="gy-5">
              <Col xl={4} >
                <div className={styles.newimg}>
                  <div >
                    <Image className="img-fluid" src={scr4} />
                  </div>
                  <div className={styles.dumpost}>
                    <h4>Bliss Travel</h4>
                    <p>Equitrip is a digital platform for horse owners, horse transportation companies, and other...</p>
                    <Link href="/travel-app-development-case-study">Our Case Studies  <Image className="img-fluid" src={arrow} /> </Link>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className={styles.newimg}>
                  <div >
                    <Image className="img-fluid" src={scr5} />
                  </div>
                  <div className={styles.dumpost1}>
                    <h4 >Music App</h4>
                    <p>Music App, the world's most distinguished music and audio platform, allows people to explore...</p>
                    <Link href="/music-app-development-case-study">Our Case Studies  <Image className="img-fluid" src={arrow2} /> </Link>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className={styles.newimg}>
                  <div >
                    <Image className="img-fluid" src={scr6} />
                  </div>
                  <div className={styles.dumpost}>
                    <h4>Find Food</h4>
                    <p>The increasing inclination towards technology has changed almost every facet of life...Succes</p>
                    <Link href="/food-delivery-app-development-case-study">Our Case Studies  <Image className="img-fluid" src={arrow} /> </Link>
                  </div>
                </div>
              </Col>
            </Row>
            :
            <>
              <Slider
                {...awardslogo}
                className={` ${styles.startup1}  startposition`}
              >
                <div className={styles.newimg}>
                  <div >
                    <Image className="img-fluid" src={scr4} />
                  </div>
                  <div className={styles.dumpost}>
                    <h4>Bliss Travel</h4>
                    <p>Equitrip is a digital platform for horse owners, horse transportation companies, and other...</p>
                    <Link href="#">Our Case Studies  <Image className="img-fluid" src={arrow} /> </Link>
                  </div>
                </div>


                <div className={styles.newimg}>
                  <div >
                    <Image className="img-fluid" src={scr5} />
                  </div>
                  <div className={styles.dumpost1}>
                    <h4 >Music App</h4>
                    <p>Music App, the world's most distinguished music and audio platform, allows people to explore...</p>
                    <Link href="#">Our Case Studies  <Image className="img-fluid" src={arrow2} /> </Link>
                  </div>
                </div>


                <div className={styles.newimg}>
                  <div >
                    <Image className="img-fluid" src={scr6} />
                  </div>
                  <div className={styles.dumpost}>
                    <h4>Find Food</h4>
                    <p>The increasing inclination towards technology has changed almost every facet of life...Succes</p>
                    <Link href="#">Our Case Studies  <Image className="img-fluid" src={arrow} /> </Link>
                  </div>
                </div>
              </Slider>

            </>

          }



        </Container>
      </section>
    </>
  )
}

export default Succes