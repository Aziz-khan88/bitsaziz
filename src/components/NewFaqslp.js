import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/NewhomeFaqslp.module.css";
//images
import arrow from '/public/newHomePageImages/pick.png';
import close from '/public/newHomePageImages/close.png';
import open from '/public/newHomePageImages/open.png';

const NewFaqslp = () => {
  const [faq1show, setfaq1] = useState(false);
  const [faq2show, setfaq2] = useState(false);
  const [faq3show, setfaq3] = useState(false);
  const [faq4show, setfaq4] = useState(false);
  const [faq5show, setfaq5] = useState(false);
  const [faq6show, setfaq6] = useState(false);
  function faq1() {
    setfaq1(!faq1show);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
  }
  function faq2() {
    setfaq1(false);
    setfaq2(!faq2show);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
  }
  function faq3() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(!faq3show);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
  }
  function faq4() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(!faq4show);
    setfaq5(false);
    setfaq6(false);
  }
  function faq5() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(!faq5show);
    setfaq6(false);
  }
  function faq6() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(!faq6show);
  }

  return (
    <>
      <section className={`${styles.faqs} newfaqsgloble`}>
        <Container>
          <Row className={styles.comfort}>
            <Col lg={12}>
              <h2 className="white font50 f-700">
                FAQs
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className={`${faq1show ? "touchFaq" : ""} mb-4 mb-lg-0 mt-4 mt-lg-5`}>
                <div onClick={faq1} className={styles.heading}>
                  <h3>
                    What is mobile application development?{" "}
                    {faq1show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq1show ? "d-block" : "d-none"}>
                  <p>
                    Mobile application development creates software applications that run on mobile devices and other connected devices, such as wearables, automotive systems, cameras, and more. It requires skill sets in design, development, testing, deployment, and maintenance to create innovative user experiences across multiple platforms. With that being said, businesses hire mobile app developers to stay ahead of the competition and deliver market-leading products to their customers.
                  </p>
                  <div className="mt-2">
                    <a href="javascript:$zopim.livechat.window.show();">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${faq2show ? "touchFaq" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq2} className={styles.heading}>
                  <h3>
                    Does BitsWits offer hybrid and native app development?{" "}
                    {faq2show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq2show ? "d-block" : "d-none"}>
                  <p>
                    BitsWits has a team of the best mobile app developers expert in providing customized development solutions, whether Hybrid or Native mobile application development is required. Our developers always come up with creative and innovative app ideas that are best in your interest.
                  </p>
                  <div className="mt-2">
                    <a href="javascript:$zopim.livechat.window.show();">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${faq3show ? "touchFaq" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq3} className={styles.heading}>
                  <h3>
                    Why choose BitsWits as a mobile app development company?{" "}
                    {faq3show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq3show ? "d-block" : "d-none"}>
                  <p>
                    BitsWits is a top mobile app development company due to its decent clientele, commitment to excellence, and innovative mobile app development solutions. We enjoy the top spot in the application development industry with affordable packages and professional services.
                  </p>
                  <div className="mt-2">
                    <a href="javascript:$zopim.livechat.window.show();">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${faq4show ? "touchFaq" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq4} className={styles.heading}>
                  <h3>
                    Is there any customer support available?{" "}
                    {faq4show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq4show ? "d-block" : "d-none"}>
                  <p>
                    Yes, BitsWits offers 24/7 incredible customer support, even post-mobile apps development USA. We do not let our customers hang in the middle with any query that may bring trouble to them.
                  </p>
                  <div className="mt-2">
                    <a href="javascript:$zopim.livechat.window.show();">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${faq5show ? "touchFaq" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq5} className={styles.heading}>
                  <h3>
                    How to choose a mobile app development company?{" "}
                    {faq5show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq5show ? "d-block" : "d-none"}>
                  <p>
                    Checking client portfolios, communicating your requirements clearly, and considering the development cost will help you choose the best mobile app development agency. BitsWits practices open communication so that the solution to your query is answered adequately to provide you with the utmost satisfaction.
                  </p>
                  <div className="mt-2">
                    <a href="javascript:$zopim.livechat.window.show();">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={faq6show ? "touchFaq" : ""}>
                <div onClick={faq6} className={styles.heading}>
                  <h3>
                    What industries does BitsWits cater to?{" "}
                    {faq6show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq6show ? "d-block" : "d-none"}>
                  <p>
                    At BitsWits, we specialize in developing innovative and efficient mobile applications for various industries across the United States. We offer customized mobile solutions from e-commerce to healthcare and gaming to meet each client's specific requirements and business. We are a mobile application development company dedicated to creating apps that cater to each client's unique needs.
                  </p>
                  <div className="mt-2">
                    <a href="javascript:$zopim.livechat.window.show();">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewFaqslp;
