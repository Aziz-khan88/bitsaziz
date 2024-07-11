import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubaiship.module.css";
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
import ship from "/public/dubailp/ship.png";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const LpChoosedubaiship = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4 w-100">
            <Col lg={6} className={styles.walk}>
              <h3 className="white newchoose font-bold f-700">We're Growing In Dubai & We Want Your Business
                To Grow With Us</h3>

              <div className="mt-4">
                <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
                  Join Us on the Journey to Growth in Dubai!
                </a>
              </div>
            </Col>
            <Col lg={6} className={styles.work}>
              <Image className="img-fluid" src={ship} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubaiship;
