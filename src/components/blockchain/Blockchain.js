import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "@/styles/blockchain/Blockchain.module.css";
// 
import Slider from "react-slick";


const Blockchain = (props) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <section className={style.secPad}>
        <Container>
          <Row className="justify-content-center align-items-center mb-5">
            <Col lg={12}>
              <h2 className="text-white f40 mb-2">{props.hireTile}</h2>
              <h4 className="fw300 txt-primary mb-2">
                {props.hireSubTile}
              </h4>
            </Col>
          </Row>
          <div className="d-none d-lg-block">
            <Row className="justify-content-center align-items-center ">
              <Col
                lg={4}
                className={`${style.br1} ${style.bb1} position-relative`}
              >
                <div className={`${style.feature}`}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>1</span>
                    <span className="text-white f14">
                      100% decentralized business structure
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                lg={4}
                className={`${style.br1} ${style.bb1} position-relative`}
              >
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>2</span>
                    <span className="text-white f14">Highly secure</span>
                  </div>
                </div>
              </Col>
              <Col lg={4} className={`${style.bb1} position-relative`}>
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>3</span>
                    <span className="text-white f14">
                      Better control over business data
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                lg={4}
                className={`${style.br1} ${style.bb1} position-relative`}
              >
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>4</span>
                    <span className="text-white f14">
                      Build trust between parties
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                lg={4}
                className={`${style.br1} ${style.bb1} position-relative`}
              >
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>5</span>
                    <span className="text-white f14">Improved privacy</span>
                  </div>
                </div>
              </Col>
              <Col lg={4} className={`${style.bb1} position-relative`}>
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>6</span>
                    <span className="text-white f14">Reduced costs</span>
                  </div>
                </div>
              </Col>
              <Col lg={4} className={`${style.br1} position-relative`}>
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>7</span>
                    <span className="text-white f14">
                      Highly efficient & scalable
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={4} className={`${style.br1}  position-relative`}>
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>8</span>
                    <span className="text-white f14">
                      Immutability & traceability
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={4} className={`position-relative`}>
                <div className={style.feature}>
                  <div
                    className={`${style.gap2} d-flex justify-content-left align-items-center`}
                  >
                    <span className={`${style.numbers} f50 fw900`}>9</span>
                    <span className="text-white f14">
                      Accelerated business processes
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-block d-lg-none">
            <Row className="justify-content-center align-items-center">
              <Slider {...settings}>
                <Col
                  lg={4}
                  className={`${style.br1} ${style.bb1} position-relative`}
                >
                  <div className={`${style.feature}`}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>1</span>
                      <span className="text-white f14">
                        100% decentralized business structure
                      </span>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={4}
                  className={`${style.br1} ${style.bb1} position-relative`}
                >
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>2</span>
                      <span className="text-white f14">Highly secure</span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className={`${style.bb1} position-relative`}>
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>3</span>
                      <span className="text-white f14">
                        Better control over business data
                      </span>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={4}
                  className={`${style.br1} ${style.bb1} position-relative`}
                >
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>4</span>
                      <span className="text-white f14">
                        Build trust between parties
                      </span>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={4}
                  className={`${style.br1} ${style.bb1} position-relative`}
                >
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>5</span>
                      <span className="text-white f14">Improved privacy</span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className={`${style.bb1} position-relative`}>
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>6</span>
                      <span className="text-white f14">Reduced costs</span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className={`${style.br1} position-relative`}>
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>7</span>
                      <span className="text-white f14">
                        Highly efficient & scalable
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className={`${style.br1}  position-relative`}>
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>8</span>
                      <span className="text-white f14">
                        Immutability & traceability
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className={`position-relative`}>
                  <div className={style.feature}>
                    <div
                      className={`${style.gap2} d-flex justify-content-left align-items-center`}
                    >
                      <span className={`${style.numbers} f50 fw900`}>9</span>
                      <span className="text-white f14">
                        Accelerated business processes
                      </span>
                    </div>
                  </div>
                </Col>
              </Slider>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Blockchain;
