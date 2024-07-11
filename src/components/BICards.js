import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/LpForm.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BICards = (props) => {

  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
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

  var awardslogo = {
    dots: false,
    arrows: false,
    loop: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <>
      <section className={`${styles.datapost} ${styles.biCard}`}>
        <Container>
          {isSliderActive ? (
            <Slider {...awardslogo} className="pt-sm-4 pt-2">
              {props.data.map((item, index) => (
                <div>
                  <div className={`${styles.deve} ${styles[props.flexRow]}`}
                    key={index}>
                    <div>
                      <h4 className="fontgilroybold white font_15">
                        {item.title}
                      </h4>
                      <p className="font_15 white fontsfregular linehight_2 mb-0">
                        {item.text}
                      </p>
                    </div>
                    <Image src={item.img2} className="img-fluid" alt="bitswits" />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <Row className="gx-3 gy-3">
              {props.data.map((item, index) => (
                <Col lg={4}>
                  <div
                    className={`${styles.deve} ${styles[props.flexRow]}`}
                    key={index}
                  >
                    <div>
                      <h4 className="fontgilroybold white font_15">
                        {item.title}
                      </h4>
                      <p className="font_15 white fontsfregular linehight_2 mb-0">
                        {item.text}
                      </p>
                    </div>
                    <Image src={item.img2} className="img-fluid" alt="bitswits" />
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default BICards;
