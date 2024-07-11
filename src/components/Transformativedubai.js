import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Transformativedubai.module.css";
//images
import ship1 from "@/public/newdubai/1.png";
import ship2 from "@/public/newdubai/2.png";
import ship3 from "@/public/newdubai/3.png";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Transformativedubai = (props) => {

  var clientsthink = {
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className={styles.trandubai}>
        <Container>
          <Row className={`${styles.newtsl} gy-5`}>
            <Col lg={6}>
              <div>
                <h2 className="font40 white f-700">Bitswits Transformative Impact
                  On Myriad Industry Verticals</h2>
                <p className="font16 white pb-2">Being the top app development company in Dubai, we offer solutions to several industries and aid them in overcoming complex business challenges.</p>
                <p className="font16 white">We know that being technologically advanced in the post-pandemic era is the only viable way to stay relevant for decades, and we consider ourselves as the technology vendor in Dubai that provides businesses with the solutions they need to pivot to a whole new level. Here's a list of the industries we serve:</p>
              </div>

            </Col>
            <Col lg={6} className={`${styles.post} p-0`}>
              <Slider {...clientsthink} className={`${styles.clintSlider}`}>
                <div className={styles.shoot}>
                  <Image alt="BitsWits" className='img-fluid' src={ship1} />
                  <h3>E-Commerce</h3>
                </div>
                <div className={styles.shoot}>
                  <Image alt="BitsWits" className='img-fluid' src={ship2} />
                  <h3>Banking & Finance </h3>
                </div>
                <div className={styles.shoot}>
                  <Image alt="BitsWits" className='img-fluid' src={ship3} />
                  <h3>Healthcare</h3>
                </div>
                <div className={styles.shoot}>
                  <Image alt="BitsWits" className='img-fluid' src={ship2} />
                  <h3>Healthcare</h3>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Transformativedubai;
