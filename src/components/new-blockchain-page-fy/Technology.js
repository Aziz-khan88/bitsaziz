import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Technology.module.css";
//
import icon1 from "/public/newiconimg/1.png";
import icon2 from "/public/newiconimg/2.png";
import icon3 from "/public/newiconimg/3.png";
import icon4 from "/public/newiconimg/4.png";
import icon5 from "/public/newiconimg/5.png";
import icon6 from "/public/newiconimg/6.png";
import icon7 from "/public/newiconimg/7.png";
import icon8 from "/public/newiconimg/8.png";
//
import database1 from "/public/newHomePageImages/tech/stack/1.png";
import database2 from "/public/newHomePageImages/tech/stack/2.png";
import database3 from "/public/newHomePageImages/tech/stack/3.png";
import database4 from "/public/newHomePageImages/tech/stack/4.png";
import database5 from "/public/newHomePageImages/tech/stack/5.png";
import database6 from "/public/newHomePageImages/tech/stack/6.png";
import database7 from "/public/newHomePageImages/tech/stack/7.png";
import database8 from "/public/newHomePageImages/tech/stack/8.png";


const Technology = (props) => {

  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }

  return (
    <>
      <section
        className={`${styles[props.addresClass]}`}
      >
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className={`${styles.work} newchoose`}>
                <span className="newchoose">Blockchain Technology Integrations </span>
              </h2>
            </Col>
            <Col xl={12} className="mb-5 d-none d-lg-block">
              <div className={styles.analpost}>
                <div
                  className={activeTab1 == "tab1" ? styles.active : ""}
                  onClick={() => fun1("tab1")}
                  href="#"
                >
                  Blockchain Technology Platforms
                </div>
                <div
                  className={activeTab1 == "tab2" ? styles.active : ""}
                  onClick={() => fun1("tab2")}
                  href="#"
                >
                  Technology Stack
                </div>
              </div>
            </Col>

            <Col xl={12} className="mb-5 d-block d-lg-none">
              <div className={styles.analpost}>
                <select onChange={(e) => setActiveTab1(e.target.value)}>
                  <option className={styles.selOpt} value="tab1" label="Blockchain Technology Platforms">
                    Blockchain Technology Platforms
                  </option>
                  <option
                    className={styles.selOpt}
                    value="tab2"
                    label="Technology Stack"
                  >
                    Technology Stack
                  </option>


                </select>
              </div>
            </Col>

            <Col xl={12}>
              {activeTab1 == "tab1" && (
                <div className={styles.newyork}>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon1}
                      className="img-fluid"
                    />
                    <p>stellar</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon2}
                      className="img-fluid"
                    />
                    <p>ethereum</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon3}
                      className="img-fluid"
                    />
                    <p>hyperledger</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon4}
                      className="img-fluid"
                    />
                    <p>eos</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon5}
                      className="img-fluid"
                    />
                    <p>bitcoin</p>
                  </div>

                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon6}
                      className="img-fluid"
                    />
                    <p>echo</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon7}
                      className="img-fluid"
                    />
                    <p>r3-corda</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={icon8}
                      className="img-fluid"
                    />
                    <p>quorum</p>
                  </div>
                </div>
              )}

              {activeTab1 == "tab2" && (
                <div className={styles.newyork}>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database1}
                      className="img-fluid"
                    />
                    <p>python</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database2}
                      className="img-fluid"
                    />
                    <p>solidity</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database3}
                      className="img-fluid"
                    />
                    <p>c-sharp</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database4}
                      className="img-fluid"
                    />
                    <p>c-plus-plus</p>
                  </div>
                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database5}
                      className="img-fluid w-75"
                    />
                    <p>react</p>
                  </div>

                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database6}
                      className="img-fluid"
                    />
                    <p>express-js</p>
                  </div>

                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database7}
                      className="img-fluid"
                    />
                    <p>angular</p>
                  </div>

                  <div>
                    <Image
                      quality={75}
                      alt="BitsWits"
                      src={database8}
                      className="img-fluid"
                    />
                    <p>javascript</p>
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

export default Technology;
