import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/Footerlp.module.css'
//images
import fb from '/public/images/icons//fb-icon.webp'
import inta from '/public/images/icons/insta-icon.webp'
import tweet from '/public/images/icons/twitter-icon.webp'
import linkedin from '/public/images/icons/linkedin-icon.webp'
import youtube from '/public/images/icons/youtube-icon.webp'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon1 from '/public/images/awards/award1.png'
import icon2 from '/public/images/awards/award2.png'
import icon3 from '/public/images/awards/award3.png'
import icon4 from '/public/images/awards/award4.png'
import icon5 from '/public/images/awards/award5.png'
import icon6 from '/public/images/awards/award6.png'
import icon7 from '/public/images/awards/award7.png'
import icon8 from '/public/images/awards/award8.png'
import icon9 from '/public/images/awards/award9.png'
import icon10 from '/public/images/awards/award10.png'
import icon11 from '/public/images/awards/award11.png'


const FooterNewLps = () => {

  const icons = [
    icon1, icon2, icon3, icon4, icon5, icon6,
    icon7, icon8, icon9, icon10, icon11
  ];

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };


  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row className={styles.project}>
            <Col lg={12}>
              <h2 className='font30 fontf font-bold white mb-0 text-center'>
                <span className='grdiant'>Our Partnerships </span>
                and Appraisals!
              </h2>
            </Col>
            <Col lg={12} className={`${styles.trstCol} ${styles.newFooter}`}>
              <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
                {icons.map((icon, index) => (
                  <div key={index} className={`${styles.strpImg} ${icon === icon7 ? styles.minImg : styles.strpImg}`}>
                    <Image alt="BitsWits" src={icon} className="img-fluid" />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
        <div className={styles.footNotes}>
          <Container>
            <Row className="align-items-md-center">
              <Col md={4} lg={3} className="mt-md-0 mt-4">
                <ul className={`${styles.socials} mb-0 p-0`}>
                  <li>
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={fb} loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={inta} loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={tweet} loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={linkedin} loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={youtube} loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} lg={6}>
                <p className={`${styles.trmCon} f-montserrat f-12 white f-500 mb-0`}>
                  Copyright © 2024 BitsWits. |
                  <Link href="javascript:;" className="white ps-1">
                    Brand Of Bhaoo Incorporation Company
                  </Link>
                </p>
              </Col>
              <Col md={4} lg={3}>
                <div className={styles.termsMain}>
                  <ul className={`${styles.termsCo} p-0 mb-0`}>
                    <li>
                      <Link target='_blank' href="/term-and-condition">Terms of Use</Link>
                    </li>
                    <li>
                      <p className="f-montserrat f-12 white f-500 mb-0 white"> | </p></li>
                    <li>
                      <Link target='_blank' href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default FooterNewLps