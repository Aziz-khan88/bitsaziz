import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ServicesMaintainmobile.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServicesMaintainmobile = ({ severcedata }) => {

  const heading = severcedata[0].heading;
  const serdata = severcedata[0].serdata;
  const classlayout = severcedata[0].classlayout;

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  };

  return (
    <>

      <section className={`${styles[classlayout.newclass]}`}>
        <Container>
          <Row className="mb-3 mb-lg-5">
            <Col lg={12}>
              {heading.subtitle &&
                <h3 className={`font24 newfycolr font-bold text-center mb-0 mb-sm-2 ling15`}>
                  {heading.subtitle}
                </h3>
              }

              {heading.title1 &&
                <h2 className="text-white font50 f-700 text-center mb-0 mb-sm-2">
                  {heading.title1}
                </h2>
              }

              {heading.title2 &&
                <h2 className="newfycolr font55 font-bold text-center d-block mb-2">
                  {heading.title2}
                </h2>
              }
                {heading.title3 &&
                <h2 className="text-white font50 f-700 text-center mb-2">
                  {heading.title3}
                </h2>
              }

              {heading.text &&
                <p className="font14 white center mb-0">{heading.text}</p>
              }
            </Col>
          </Row>
          <Row className="g-3">
            <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
              {serdata.map((item, index) => (
                <Col key={index} lg={12} className={styles.earn}>
                  <div className={` ${styles.appclass}`}>
                    <div className={styles.cardimg}>
                      <Image src={item.imgservice} className='img-fluid' />
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className="text-white font25 font-bold text-center">
                        {item.title}
                      </h3>
                      <p className={styles.possibilities}>{item.text}</p>
                    </div>


                  </div>
                </Col>
              ))}
            </Slider>

          </Row>
        </Container>
      </section>




    </>
  );
};

export default ServicesMaintainmobile;
