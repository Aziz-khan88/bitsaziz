import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Globalmap.module.css";

import Map from "media/newdubai/map1.png"

const Globalmap = ({ content }) => {
  const { address, number, href, image, link } = content;
  return (
    <>
      <section className={styles.mapGlobal}>
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={6} className="p-0">
              <div className={styles.newtimg}>
                <h2>Meet Our Experts <br></br>
                  One-on-One</h2>
                <a className={styles.address} href={link}>{address}</a>
                <a className={`pink ${styles.timr}`} href="javascript:$zopim.livechat.window.show();">
                  Let's Chat
                </a>
                <p className="black mb-0">Call us at <a className={styles.num} href={href}>{number}</a> </p>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <a href={link} target="_blank">
                <Image src={image} alt="Bitswits" loading="lazy" sizes="100vw" width={700} height={453} className="w-100" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Globalmap;
