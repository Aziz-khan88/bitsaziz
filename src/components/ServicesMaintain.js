import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ServicesMaintain.module.css";


const ServicesMaintain = (props) => {
  return (
    <>
      <section
        className={` ${styles.newHomeBg} ${
          styles[props.assignClass]
        } combo d-none d-md-block`}
      >
        <Container>
          <Row className="g-3">
            <Col lg={12} className="mx-auto mb-4">
              <h2 className={`font24 newfycolr font-bold text-center mb-2 ling15`}>
                {props.subtitle}
              </h2>
              <h2 className="text-white newchoose f-700 text-center mb-2">
                {props.title0}
                <span className="newfycolr font50 f-700 text-center d-block mb-2">
                  {props.title}
                </span>
                {props.title1}
                <span className="newfycolr fontpink100 font-bold text-center d-block mb-2">
                  {props.title2}
                </span>
                {props.title3}
                <span className="font50 f-700 text-center d-block mb-2">
                  {props.title4}
                </span>
              </h2>
              <p className="font14 white center mb-0">{props.text}</p>
            </Col>
            {props.appContent.map((content, index) => (
              <Col key={index} sm={6} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold text-center">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent1.map((content, index) => (
              <Col key={index} sm={6} lg={4} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold">
                      {content.title}
                    </h3>
                    <p className={styles.para}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent2.map((content, index) => (
              <Col key={index} sm={6} lg={12} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <Row className="align-items-center">
                    <Col xl={6} key={index}>
                      <div className={styles.paraThreeContent}>
                        <h3 className="text-white font25 font-bold ">
                          {content.title}
                        </h3>
                        <p className={styles.para1}>{content.text}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
            {props.appContent3.map((content, index) => (
              <Col key={index} sm={6} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold text-center">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent4.map((content, index) => (
              <Col key={index} md={8} sm={6} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold text-center">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent5.map((content, index) => (
              <Col key={index} md={4} sm={6} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent6.map((content, index) => (
              <Col key={index} sm={6} lg={4} className={styles.earn}>
                <div
                  className={`${styles[content.appclass]} ${
                    styles[content.addclass]
                  }`}
                >
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold">
                      {content.title}
                    </h3>
                    <p className={styles.para}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent7.map((content, index) => (
              <Col key={index} sm={6} md={6} className={styles.earn}>
                <div
                  className={`${styles[content.appclass]} ${
                    styles[content.addclass]
                  }`}
                >
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold text-center">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ============================ */}

      <section
        className={` ${styles.newHomeBg} ${
          styles[props.assignClass]
        } combo d-block d-md-none`}
      >
        <Container>
          <Row className="g-3">
            <Col lg={10} className="mx-auto">
              <h3 className={`f-20 font-bold text-white text-center mb-0`}>
                {props.subtitle}
              </h3>
              <h2 className="text-white font50 font-bold text-center">
                {props.title0}
                <span className="newfycolr font55 font-bold text-center d-block mb-2">
                  {props.title}
                </span>
                {props.title1}
                <span className="newfycolr font55 font-bold text-center d-block mb-2">
                  {props.title2}
                </span>
                {props.title3}
                <span className="newfycolr font50 font-bold text-center d-block mb-2">
                  {props.title4}
                </span>
              </h2>
              <p className="font14 white center">{props.text}</p>
            </Col>
            <div className={styles.mblBuild}>
              {props.appContent.map((content, index) => (
                <Col key={index} sm={6} className={styles.earn}>
                  <div className={styles[content.appclass]}>
                    <div className={styles.cardContent}>
                      <h3 className="text-white font25 font-bold text-center">
                        {content.title}
                      </h3>
                      <p className={styles.possibilities}>{content.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            <div className={styles.mblBuild1}>
              {props.appContent1.map((content, index) => (
                <Col key={index} sm={6} lg={4} className={styles.earn}>
                  <div className={styles[content.appclass]}>
                    <div className={styles.cardContent}>
                      <h3 className="text-white font25 font-bold">
                        {content.title}
                      </h3>
                      <p className={styles.para}>{content.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            {props.appContent2.map((content, index) => (
              <Col key={index} lg={12} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <Row className="align-items-center">
                    <Col xl={6} key={index}>
                      <div className={styles.paraThreeContent}>
                        <h3 className="text-white font25 font-bold ">
                          {content.title}
                        </h3>
                        <p className={styles.para1}>{content.text}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
            <div className={styles.mblBuild2}>
              {props.appContent3.map((content, index) => (
                <Col key={index} sm={6} className={styles.earn}>
                  <div className={styles[content.appclass]}>
                    <div className={styles.cardContent}>
                      <h3 className="text-white font25 font-bold text-center">
                        {content.title}
                      </h3>
                      <p className={styles.possibilities}>{content.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            {props.appContent4.map((content, index) => (
              <Col key={index} md={8} sm={6} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold text-center">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            {props.appContent5.map((content, index) => (
              <Col key={index} md={4} sm={6} className={styles.earn}>
                <div className={styles[content.appclass]}>
                  <div className={styles.cardContent}>
                    <h3 className="text-white font25 font-bold text-center">
                      {content.title}
                    </h3>
                    <p className={styles.possibilities}>{content.text}</p>
                  </div>
                </div>
              </Col>
            ))}
            <div className={styles.mblBuild3}>
              {props.appContent6.map((content, index) => (
                <Col key={index} sm={6} lg={4} className={styles.earn}>
                  <div
                    className={`${styles[content.appclass]} ${
                      styles[content.addclass]
                    }`}
                  >
                    <div className={styles.cardContent}>
                      <h3 className="text-white font25 font-bold">
                        {content.title}
                      </h3>
                      <p className={styles.para}>{content.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            <div className={styles.mblBuild}>
              {props.appContent7.map((content, index) => (
                <Col key={index} sm={6} className={styles.earn}>
                  <div
                    className={`${styles[content.appclass]} ${
                      styles[content.addclass]
                    }`}
                  >
                    <div className={styles.cardContent}>
                      <h3 className="text-white font25 font-bold text-center">
                        {content.title}
                      </h3>
                      <p className={styles.possibilities}>{content.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesMaintain;
