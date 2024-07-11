import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Banner.module.css";


const BlockchainBanner = (props) => {
  return (
    <>
      <section className={`${styles.newHomeBg} ${styles[props.assignClass]}`}>
        <Container>
          <Row>
            <Col xl={12}>
              <p
                className={`${styles.just} font28 letterspaceblock font-bold text-center mb-0 line35`}
              >
                {props.subtitle}
              </p>
              <h1
                className={`${styles.develop} text-center font55home letterspaceblock font-bold`}
              >
                {props.title}
              </h1>
              <p className={`fonttextblock white center ${styles.bannerText}`}>
                {props.text}
              </p>

              <div className={`${styles.banImg} mt-4`}>
                <Image
                  quality={75}
                  alt="BitsWits"
                  src={props.BannerImage}
                  className={`img-fluid`}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlockchainBanner;
