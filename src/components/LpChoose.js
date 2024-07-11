import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoose.module.css";
//images
import banImg1 from '/public/images/lp-images/icon1.png';
import banImg2 from '/public/images/lp-images/icon2.png';
import banImg3 from '/public/images/lp-images/icon3.png';
import banImg4 from '/public/images/lp-images/icon4.png';
import banImg5 from '/public/images/lp-images/icon5.png';
import banImg6 from '/public/images/lp-images/icon6.png';
import banImg7 from '/public/images/lp-images/icon7.png';
import banImg8 from '/public/images/lp-images/icon8.png';
import banImg9 from '/public/images/lp-images/icon9.png';
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const items = [
  {
    image: banImg1,
    text: (
      <>
        {" "}
        Experienced <br /> Professionals{" "}
      </>
    ),
  },
  {
    image: banImg2,
    text: (
      <>
        {" "}
        On-Time <br /> Delivery{" "}
      </>
    ),
  },
  {
    image: banImg3,
    text: (
      <>
        {" "}
        Cost-Effective <br /> Solutions{" "}
      </>
    ),
  },
  {
    image: banImg4,
    text: (
      <>
        {" "}
        Scalable and <br /> Secure Apps{" "}
      </>
    ),
  },
  {
    image: banImg5,
    text: (
      <>
        {" "}
        User-Centric <br /> Design{" "}
      </>
    ),
  },
  {
    image: banImg6,
    text: (
      <>
        {" "}
        Customized <br /> Development{" "}
      </>
    ),
  },
  {
    image: banImg7,
    text: (
      <>
        {" "}
        Error-Free <br /> Delivery{" "}
      </>
    ),
  },
  {
    image: banImg8,
    text: (
      <>
        {" "}
        Transparent <br /> Communication{" "}
      </>
    ),
  },
  {
    image: banImg9,
    text: (
      <>
        {" "}
        Support and <br /> Maintenance{" "}
      </>
    ),
  },
];

const LpChoose = (props) => {
  const mblSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4">
            <Col lg={6} className={styles.walk}>
              <h3 className="white newchoose font-bold f-700">Why Choose Us</h3>
              <h2 className="white f-500 my-2 my-lg-3">
                For Your Mobile App <br className="d-lg-block d-none" />{" "}
                Development Needs?
              </h2>
              <p>
                Our <span>mobile app development services</span> turn your
                innovative ideas into success stories by crafting apps that
                stand out in the market. While you{" "}
                <span>focus on your business</span>, Bitswits will handle the
                technical aspects of developing your app.
              </p>
              <p>
                Did you know that a <span>poorly developed app</span> can
                negatively impact your brand's reputation? That's a risk you
                don't want to take. But with Bitswits, there's no need to worry.
                We ensure your app functions seamlessly and enhances your
                brand's digital presence.
              </p>
              <p>
                Unlike <span>Mobile app development firms</span>, we don't
                believe in a one-size-fits-all approach. We understand that the
                reason behind an underperforming app often lies in its
                development and user experience. That's where our expertise
                comes into play. With a{" "}
                <span>team of seasoned mobile app developers</span>, the latest
                technological resources, and a bespoke development strategy.
              </p>
              <p className="mt-4 mb-4">
                Every app we develop undergoes thorough quality checks to ensure{" "}
                <span>IT'S NOT JUST GOOD, BUT GREAT</span>.
              </p>
              <a href="javascript:$zopim.livechat.window.show();" className={`pink ${styles.dus}`}>
                Choose Expertise, Choose Bitswits – Let's Get Started
              </a>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className={styles.cart}>
                <Row className="gy-4">
                  {items.map((item, index) => (
                    <Col key={index} lg={4} sm={4}>
                      <div className={styles.post}>
                        <Image
                          alt="BitsWits"
                          src={item.image}
                          className="img-fluid mb-3"
                        />
                        <p>{item.text}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            {/* For Mobile */}
            <Col lg={6} className="d-block d-lg-none">
              <Slider
                {...mblSlider}
                className={`mblSlider ${styles.mblSlider}`}
              >
                {items.map((item, index) => (
                  <div className={styles.cart} key={index}>
                    <div className={styles.post}>
                      <Image
                        alt="BitsWits"
                        src={item.image}
                        className="img-fluid mb-3"
                      />
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoose;
