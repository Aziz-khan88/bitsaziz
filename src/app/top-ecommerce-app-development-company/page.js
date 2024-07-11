"use client"
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
// CSS
import styles from "../../../styles/new-home-page-fy.module.css";
// Slick Slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Components
import EcommercePLatform from "../../components/EcommercePLatform";
import EcommerceSlider from "../../components/EcommerceSlider";
import EcommerceShoppingApp from "../../components/EcommerceShoppingApp";
import EcommerceBenefits from "../../components/EcommerceBenefits";
import EcommerceService from "../../components/EcommerceService";
import EcommerceApp from "../../components/EcommerceApp";
import EcommerceExperience from "../../components/EcommerceExperience";
import EcommerceScale from "../../components/EcommerceScale";

const Ecommerce = () => {
  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Slider  
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
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {/* <EcommerceBanner /> */}
      <section className="overflow-hidden">
        <div className={`${styles.awardsFold}`}>
          <div className="container-fluid px-0">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-12 col-sm-12">
                <p
                  className={`font-bold fontawards25 mb-0 ${styles.textWhite}`}
                >
                  Endorsements on different Platforms
                </p>
                <h1
                  className={`fontawards font-bold mb-3 mb-lg-0 ${styles.textPink}`}
                >
                  Awards & <br />
                  Recognition
                </h1>
              </div>
              {isSliderActive ? (
                <div className={`${styles.appdev} col-7`}>
                  <div className="row">
                    <div className={`${styles.mobileapps} col-3`}>
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/1n.png"
                          alt="bitswits"
                          width={166}
                          height={129}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Developers
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/2n.png"
                          alt="bitswits"
                          width={120}
                          height={130}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Developers 2022
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/3n.png"
                          alt="bitswits"
                          width={148}
                          height={130}
                        />
                        <p className="white center pt-4 font16">
                          Top Application <br />
                          Development Company
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/4n.png"
                          alt="bitswits"
                          width={130}
                          height={129}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Development Company
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Slider
                  {...awardslogo}
                  className={` ${styles.startup1}  startposition mt-4`}
                >
                  <div className={`${styles.mobileapps} col-3`}>
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/1n.png"
                        alt="awards"
                        width={166}
                        height={129}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Developers
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/2n.png"
                        alt="awards"
                        width={120}
                        height={130}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Developers 2022
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/3n.png"
                        alt="awards"
                        width={148}
                        height={130}
                      />
                      <p className="white center pt-4 font16">
                        Top Application <br />
                        Development Company
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/4n.png"
                        alt="awards"
                        width={130}
                        height={129}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Development Company
                      </p>
                    </div>
                  </div>
                </Slider>
              )}
            </div>
          </div>
        </div>
      </section>
      {showFolds &&
        <>
          <EcommercePLatform />
          <EcommerceSlider />
          <EcommerceShoppingApp />
          <EcommerceBenefits />
          <EcommerceService />
          <EcommerceApp />
          <EcommerceExperience />
          <EcommerceScale />
        </>
      }
    </>
  );
};

export default Ecommerce;
