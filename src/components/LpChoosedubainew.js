import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubainew.module.css";
//images
import layoff from "@/public/dubailp/layoff.webp";

const LpChoosedubai = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4 gx-5">
            <Col lg={6} className={styles.walk}>
              <h3 className="black font-bold f-700">Bitswits More Than A Mere Mobile Application Development Company In Dubai</h3>

              <p>
                The ingenious and disruptive mobile app solutions delivered by Bitswits skilled professionals have earned recognition, awards, and accolades globally, and this aspect primarily sets us apart from the rest of the mobile application development companies in Dubai. Utilizing the art of individualistic collectivism as fuel to empower our quest to revolutionize and disrupt, we aim to develop and deliver solutions that are scalable and designed to help businesses achieve their objectives.
              </p>
              <p>
                In addition to leveraging the art of collectivism, our experience of working with multiple industries plays an imperative role in enabling us to craft high-performing applications. With our work being backed by multiple awards and appreciation, you'll always have peace of mind that your mobile application is in the hands of professional app developers in Dubai. Moreover, we've won a lot of awards over the years, but here are the ones that we're proud of:
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
