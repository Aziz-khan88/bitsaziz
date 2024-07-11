import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/CaseGlamic.module.css";


const CaseGlamic = (props) => {
  return (
    <>
      <section className={`${styles.glamic}`}>
        <Container>
          <Row className="justify-content-between gy-3 gy-md-5">
            <Col lg={12}>
              {props.textArray1.map((item, index) => (
                <div className={styles.left} key={index}>
                  <h2 className="newchoose">{item.title}</h2>
                  {item.text.map((text, pIndex) => (
                    <p key={pIndex}>{text}</p>
                  ))}
                </div>
              ))}
            </Col>
            <Col lg={12} className="pt-2 pt-lg-4 mb-4 mb-lg-0">
              {props.textArray2.map((item, index) => (
                <div className={styles.right} key={index}>
                  <Row className="align-items-center justify-content-between">
                    <Col lg={7}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </Col>
                    <Col lg={4}>
                      <div className={styles.caseBtn}>
                        <a href="tel:8335006007">BOOK A CALL</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
            {/* {isMobile ? (
              <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                <div className={styles.SecImg}>
                  <Image quality={90} src={props.slide1} alt="BitsWits" className={`img-fluid`} />
                </div>
                <div className={styles.SecImg}>
                  <Image quality={90} src={props.slide2} alt="BitsWits" className={`img-fluid`} />
                </div>
                <div className={styles.SecImg}>
                  <Image quality={90} src={props.slide3} alt="BitsWits" className={`img-fluid`} />
                </div>
                <div className={styles.SecImg}>
                  <Image quality={90} src={props.slide4} alt="BitsWits" className={`img-fluid`} />
                </div>
              </Slider>
            ) : (
              <Col lg={12}>
                <div className={styles.SecImg}>
                  <Image
                    quality={90}
                    src={props.slide1}
                    alt="BitsWits"
                    className={`img-fluid`}
                  />
                  <Image
                    quality={90}
                    src={props.slide2}
                    alt="BitsWits"
                    className={`img-fluid`}
                  />
                  <Image
                    quality={90}
                    src={props.slide3}
                    alt="BitsWits"
                    className={`img-fluid`}
                  />
                  <Image
                    quality={90}
                    src={props.slide4}
                    alt="BitsWits"
                    className={`img-fluid`}
                  />
                </div>
              </Col>
            )} */}
            <Col lg={12} className="d-none d-lg-block">
              <div className={styles.SecImg}>
                <Image
                  quality={90}
                  src={props.slide1}
                  alt="BitsWits"
                  className={`img-fluid`}
                />
                <Image
                  quality={90}
                  src={props.slide2}
                  alt="BitsWits"
                  className={`img-fluid`}
                />
                <Image
                  quality={90}
                  src={props.slide3}
                  alt="BitsWits"
                  className={`img-fluid`}
                />
                <Image
                  quality={90}
                  src={props.slide4}
                  alt="BitsWits"
                  className={`img-fluid`}
                />
              </div>
            </Col>
            <Col lg={11} className="mx-auto">
              {props.textArray3.map((item, index) => (
                <div className={styles.leftText} key={index}>
                  <h3 className="newchoose">{item.title}</h3>
                  {item.text.map((para, pIndex) => (
                    <p key={pIndex}>{para}</p>
                  ))}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CaseGlamic;
