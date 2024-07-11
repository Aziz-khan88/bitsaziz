import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Bussiness.module.css";
//images
import clutch from "@/public/newdubai/clutch.png";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bussiness = () => {

  var clientsthink = {
    dots: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '150px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],



  };

  return (
    <>
      <section className={`${styles.transform}`}>
        <Container fluid>
          <Row className="">
            <Col lg={12} className="p-0">
              <h2 className={styles.qtech}>Our Business Associates on Working <br />
                with Bitswits</h2>

              <Slider {...clientsthink} className={`${styles.clintSlider}`}>
                <div className={styles.shoot}>
                  <div className={styles.qfind}>
                    <h4>Vivien Francis</h4>
                    <p>Digital Marketing Consultant of Asia School of Business</p>
                    <h3>"Everything has been flowing <br />
                      pretty smoothly."</h3>
                    <Link href="#">Check Review</Link>

                  </div>
                  <div className={styles.quotwe}>
                    <h5>5.0</h5>
                    <div className={styles.freepost}>
                      <h3>Quality</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Schedule</h3>
                      <h4>4.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Cost</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Willing to Refer</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost1}>
                      <Image src={clutch} className="img-fluid" />
                    </div>

                  </div>

                </div>

                <div className={styles.shoot}>
                  <div className={styles.qfind}>
                    <h4>Vivien Francis</h4>
                    <p>Digital Marketing Consultant of Asia School of Business</p>
                    <h3>"Everything has been flowing <br />
                      pretty smoothly."</h3>
                    <Link href="#">Check Review</Link>

                  </div>
                  <div className={styles.quotwe}>
                    <h5>5.0</h5>
                    <div className={styles.freepost}>
                      <h3>Quality</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Schedule</h3>
                      <h4>4.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Cost</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Willing to Refer</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost1}>
                      <Image src={clutch} className="img-fluid" />
                    </div>

                  </div>

                </div>

                <div className={styles.shoot}>
                  <div className={styles.qfind}>
                    <h4>Vivien Francis</h4>
                    <p>Digital Marketing Consultant of Asia School of Business</p>
                    <h3>"Everything has been flowing <br />
                      pretty smoothly."</h3>
                    <Link href="#">Check Review</Link>

                  </div>
                  <div className={styles.quotwe}>
                    <h5>5.0</h5>
                    <div className={styles.freepost}>
                      <h3>Quality</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Schedule</h3>
                      <h4>4.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Cost</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Willing to Refer</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost1}>
                      <Image src={clutch} className="img-fluid" />
                    </div>

                  </div>

                </div>

                <div className={styles.shoot}>
                  <div className={styles.qfind}>
                    <h4>Vivien Francis</h4>
                    <p>Digital Marketing Consultant of Asia School of Business</p>
                    <h3>"Everything has been flowing <br />
                      pretty smoothly."</h3>
                    <Link href="#">Check Review</Link>

                  </div>
                  <div className={styles.quotwe}>
                    <h5>5.0</h5>
                    <div className={styles.freepost}>
                      <h3>Quality</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Schedule</h3>
                      <h4>4.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Cost</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost}>
                      <h3>Willing to Refer</h3>
                      <h4>5.0</h4>
                    </div>

                    <div className={styles.freepost1}>
                      <Image src={clutch} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Bussiness;
