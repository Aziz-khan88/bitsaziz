import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubaishipnewdubai.module.css";
//images
import ship from "@/public/newdubai/ship.png";

const LpChoosedubaiship = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4">
            <Col lg={6} className={styles.walk}>
              <h3 className="black font-bold f-700">
                Join Our Expansion for Business Growth
              </h3>
              <p className="fontsfregular">
                At BitsWits, we offer a wide range of services and solutions across diverse sectors and industries. Our app development company in Dubai work hand in hand with clients to create spectacular apps that drive results and generate revenue.
              </p>
              <div className="mt-4">
                <a href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
                  Let’s Get Connected Today!
                </a>
              </div>
            </Col>
            <Col lg={6} className={styles.work}>
              <Image className="img-fluid" width={650} height={680} src={ship} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubaiship;
