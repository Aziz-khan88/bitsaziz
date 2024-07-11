import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Provideservices.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Provideservices = (props) => {
  
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
      <section className={`${styles[props.assignClass]}`}>
        <Container>
          <Row className="gx-5 align-items-center w-100">
            <Col lg={12}>
              {props.title ? props.title : ""}
              {props.bigtitle ? props.bigtitle : ""}
              {props.para ? props.para : ""}
            </Col>

            {isSliderActive ? (
              <>
                {props.title2 ? props.title2 : ""}
                {props.para2 ? props.para2 : ""}
                <Slider {...awardslogo} className="pt-sm-4 pt-2">
                  {props.sec.map((item, index) => (
                    <div
                      className={`${styles.blocknew} ${styles[props.bottomPadding]
                        }`}
                      key={index}
                    >
                      <div>
                        <Image src={item.img1} alt="bitswits" />
                      </div>
                      <div>
                        <h3 className="font_20 newfycolr font-bold pb-2 pt-3 mb-0">
                          {item.titl3}
                        </h3>
                        <p
                          className={`${styles.create} fontsfregular font_15 linehight_1 white`}
                        >
                          {item.para4}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </>
            ) : (
              <Col
                lg={7}
                className={`${styles[props.rowclas]} ${styles[props.newrowbussiness]
                  }`}
              >
                {props.title2 ? props.title2 : ""}
                {props.para2 ? props.para2 : ""}

                {props.sec.map((item, index) => (
                  <div
                    className={`${styles.blocknew} ${styles[props.bottomPadding]
                      }`}
                    key={index}
                  >
                    <div>
                      <Image src={item.img1} alt="bitswits" />
                    </div>
                    <div>
                      <h3 className="font_20 newfycolr font-bold pb-2 mb-0">
                        {item.titl3}
                      </h3>
                      <p
                        className={`${styles.create} fontsfregular font_15 linehight_1 white`}
                      >
                        {item.para4}
                      </p>
                    </div>
                  </div>
                ))}
              </Col>
            )}

            <Col lg={5}>
              <div
                className={`${styles.video} ${styles[props.rowclas]} ${styles[props.rowClass]
                  } ${styles[props.particalAfter]}`}
              >
                {props.video ? props.video : ""}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Provideservices;
