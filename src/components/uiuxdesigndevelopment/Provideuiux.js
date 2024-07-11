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
      if (window.innerWidth > 480) {
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={`${styles[props.assignClass]}`}>
        <Container>
          <Row className="gx-5 align-items-center">
            <Col lg={6}>
              <div
                className={`${styles.video} ${styles[props.rowclas]} ${styles[props.rowClass]
                  } ${styles[props.particalAfter]}`}
              >
                {props.video ? props.video : ""}
              </div>
            </Col>

            {isSliderActive ? (
              <>
                {props.title2 ? props.title2 : ""}
                {props.para2 ? props.para2 : ""}
                <Slider {...awardslogo} className="pt-4">
                  {props.sec.map((item, index) => (
                    <div className={styles.blocknew} key={index}>
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
                lg={6}
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Provideservices;
