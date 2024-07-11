import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubai.module.css";
//images
import banImg1 from "/public/images/lp-images/icon1.png";
import banImg2 from "/public/images/lp-images/icon2.png";
import banImg3 from "/public/images/lp-images/icon3.png";
import banImg4 from "/public/images/lp-images/icon4.png";
import banImg5 from "/public/images/lp-images/icon5.png";
import banImg6 from "/public/images/lp-images/icon6.png";
import banImg7 from "/public/images/lp-images/icon7.png";
import banImg8 from "/public/images/lp-images/icon8.png";
import banImg9 from "/public/images/lp-images/icon9.png";
import layoff from "/public/dubailp/layoff.png";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const LpChoosedubai = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4 gx-5 w-100">
            <Col lg={6} className={styles.walk}>
              <h3 className="white newchoose font-bold f-700">The Apex of Disruptive Mobile App Solutions by a Mobile App Development Company in Dubai</h3>

              <p>
                At BitsWits, we pride ourselves on being more than just another Mobile app development company in Dubai. Our team of skilled professionals has earned global recognition, awards, and accolades for creating ingenious and disruptive mobile app solutions. This distinction sets us apart in the industry.
              </p>
              <p>
                Mobile app developers in Dubai thrive on the philosophy of individualistic collectivism, using it as a driving force to revolutionize and disrupt the mobile app landscape. Our aim is to develop scalable solutions that empower businesses to achieve their objectives seamlessly.
              </p>
              <p>
                Our extensive experience across various industries plays a pivotal role in our ability to create high-performing applications. With a portfolio backed by numerous awards and appreciation, you can trust that your mobile application is in the capable hands of professional app developers in Dubai.
              </p>
              <p>
                While we've garnered numerous awards over the years, here are the ones that make us particularly proud:
              </p>

              <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
                Let’s Get Started
              </a>
            </Col>
            <Col lg={6}>
              <Image className="img-fluid" src={layoff} />
            </Col>


          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubai;
