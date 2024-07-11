import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ServiceEngage.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServiceEngage = (props) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var awardslogo = {
    dots: false,
    arrows: false,
    loop: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        className={`${styles.engage} ${styles.paddingTop} ${styles[props.addClass]
          } overflow-hidden`}
      >
        <Container>
          <Row className={styles.forget}>
            <Col xl={12}>
              <p className="font24 font-bold text-center mb-0">
                {props.subTitle}
              </p>
              <h2 className="newchoose">{props.title}</h2>
            </Col>
          </Row>

          {isMobile ? (
            <div className={`${styles.cont}`}>
              <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                <div className={styles.longline}>
                  <div className={styles.bring}>
                    <h3>{props.heading1}</h3>
                    <p>{props.text1}</p>
                  </div>
                </div>
                <div className={styles.longline1}>
                  <div className={styles.bring1}>
                    <h3>{props.heading3}</h3>
                    <p>{props.text3}</p>
                  </div>
                </div>
                <div className={`${styles.longline}`}>
                  <div className={styles.bring}>
                    <h3>{props.heading2}</h3>
                    <p>{props.text2}</p>
                  </div>
                </div>
                <div className={`${styles.longline1}`}>
                  <div className={styles.bring1}>
                    <h3>{props.heading4}</h3>
                    <p>{props.text4}</p>
                  </div>
                </div>
              </Slider>
            </div>
          ) : (
            <Row className={` ${styles.cont} gx-3`}>
              <Col xl={4}>
                <div className={styles.longline}>
                  <div className={styles.expertise}>
                    <Image
                      alt="BitsWits"
                      quality={80}
                      src={props.engIcon1}
                      className="img-fluid"
                    />
                  </div>
                  <div className={styles.bring}>
                    <h3>{props.heading1}</h3>
                    <p>{props.text1}</p>
                  </div>
                </div>
                <div className={styles.longline2}>
                  <div className={styles.expertise}>
                    <Image
                      alt="BitsWits"
                      quality={80}
                      src={props.engIcon3}
                      className="img-fluid"
                    />
                  </div>
                  <div className={styles.bring}>
                    <h3>{props.heading3}</h3>
                    <p>{props.text3}</p>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className={`${styles.offers} ${props.css}`}>
                  <Image
                    alt="BitsWits"
                    quality={80}
                    src={props.main}
                    className={`img-fluid  `}
                  />
                </div>
              </Col>
              <Col xl={4}>
                <div className={`${styles.longline3}`}>
                  <div className={styles.expertise1}>
                    <Image
                      alt="BitsWits"
                      quality={80}
                      src={props.engIcon2}
                      className="img-fluid"
                    />
                  </div>
                  <div className={styles.bring1}>
                    <h3>{props.heading2}</h3>
                    <p>{props.text2}</p>
                  </div>
                </div>
                <div className={`${styles.longline1}`}>
                  <div className={styles.expertise1}>
                    <Image
                      alt="BitsWits"
                      quality={80}
                      src={props.engIcon4}
                      className="img-fluid"
                    />
                  </div>
                  <div className={styles.bring1}>
                    <h3>{props.heading4}</h3>
                    <p>{props.text4}</p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default ServiceEngage;
