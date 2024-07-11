import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Technology.module.css";
//Images
import icon1 from "/public/ui-ux-page/tech1.png";
import icon2 from "/public/ui-ux-page/tech2.png";
import icon3 from "/public/ui-ux-page/tech3.png";
import icon4 from "/public/ui-ux-page/tech4.png";
import database1 from "/public/ui-ux-page/tech5.png";
import database2 from "/public/ui-ux-page/tech6.png";
import database3 from "/public/ui-ux-page/tech7.png";
import database4 from "/public/ui-ux-page/tech8.png";
import database5 from "/public/ui-ux-page/tech9.png";
import database6 from "/public/ui-ux-page/tech10.png";
import database7 from "/public/ui-ux-page/tech11.png";
import database8 from "/public/ui-ux-page/tech12.png";


const UIUXTechnology = (props) => {

  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }

  return (
    <>
      <section
        className={`${styles[props.addresClass]} ${styles.UIUXTechnology}`}
      >
        <Container>
          <Row>
            <Col xl={12}>
              <p className="newfycolr font30 f-700 center mb-0 mb-sm-1">
                Technology
              </p>
              <h2 className={`${styles.work} newchoose`}>
                <span className="newchoose">
                  Bitswits UX/UI Technology Stack
                </span>
              </h2>
              <p className="white font16 f-400 center">
                We use multiple platforms and programming languages to ensure
                our desktop and mobile UI/UX design services are versatile and{" "}
                <br />
                leverage the full strength of these systems to provide computing
                power, enhanced graphics, robust security standards, and greater
                <br />
                sssss performance.
              </p>
            </Col>
            <Col xl={12} className="mb-5 d-none d-lg-block">
              <div className={styles.analpost}>
                <div
                  className={activeTab1 == "tab1" ? styles.active : ""}
                  onClick={() => fun1("tab1")}
                  href="#"
                >
                  Programming Languages & Technologies
                </div>
                <div
                  className={activeTab1 == "tab2" ? styles.active : ""}
                  onClick={() => fun1("tab2")}
                  href="#"
                >
                  Wireframe & Prototype
                </div>
                <div
                  className={activeTab1 == "tab3" ? styles.active : ""}
                  onClick={() => fun1("tab3")}
                  href="#"
                >
                  Visual Designs
                </div>
              </div>
            </Col>

            <Col xl={12} className="mb-5 d-block d-lg-none">
              <div className={styles.analpost}>
                <select onChange={(e) => setActiveTab1(e.target.value)}>
                  <option
                    className={styles.selOpt}
                    value="tab1"
                    label="Programming Languages & Technologies"
                  >
                    Programming Languages & Technologies
                  </option>
                  <option
                    className={styles.selOpt}
                    value="tab2"
                    label="Wireframe & Prototype"
                  >
                    Wireframe & Prototype
                  </option>
                  <option
                    className={styles.selOpt}
                    value="tab3"
                    label=" Visual Designs"
                  >
                    Visual Designs
                  </option>
                </select>
              </div>
            </Col>

            <Col xl={12}>
              {activeTab1 == "tab1" && (
                <div className={styles.newyork}>
                  <p className="white font16 f-400 center">
                    We use multiple platforms and programming languages to
                    ensure our desktop and mobile UI/UX design services are
                    versatile and <br className="d-xxl-block d-none" />
                    leverage the full strength of these systems to provide
                    computing power, enhanced graphics, robust security
                    standards, and greater
                    <br className="d-xxl-block d-none" />
                    sssss performance.
                  </p>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon1}
                      className="img-fluid"
                    />
                    <p>Bootstrap</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon2}
                      className="img-fluid"
                    />
                    <p>HTML5</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon3}
                      className="img-fluid"
                    />
                    <p>CSS3</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon4}
                      className="img-fluid"
                    />
                    <p>jQuery</p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div>
                  <p className="white font16 f-400 center d-block mb-4 pb-sm-4">
                    We utilize InVision, Adobe XD, Google Web Designer, and
                    Figma to create interactive mockups for designs, making{" "}
                    <br /> it quick and easy to receive real-time feedback
                    during the prototyping process.
                  </p>
                  <div className={styles.newyork}>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database1}
                        className="img-fluid"
                      />
                      <p>inVision</p>
                    </div>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database2}
                        className="img-fluid"
                      />
                      <p>Adobe XD</p>
                    </div>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database3}
                        className="img-fluid"
                      />
                      <p>Google Web designer</p>
                    </div>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database4}
                        className="img-fluid"
                      />
                      <p>Figma</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab1 == "tab3" && (
                <div>
                  <p className="white font16 f-400 center mb-4 pb-4">
                    Using Photoshop, InDesign, Illustrator, and Sketch, just to
                    name a few, we create complex, flexible, and intuitive{" "}
                    <br />
                    designs and wireframes that can be developed into clickable
                    prototypes.
                  </p>
                  <div className={styles.newyork}>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database5}
                        className="img-fluid"
                      />
                      <p>Photoshop</p>
                    </div>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database6}
                        className="img-fluid"
                      />
                      <p>InDesign</p>
                    </div>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database7}
                        className="img-fluid"
                      />
                      <p>Illustrator</p>
                    </div>
                    <div>
                      <Image
                        quality={75}
                        alt="BitsWits"
                        src={database8}
                        className="img-fluid"
                      />
                      <p>Sketch</p>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UIUXTechnology;
