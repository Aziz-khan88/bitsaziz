import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "@/styles/NewBannerlp.module.css";
//images
import banImg1 from '/public/newHomePage/images/slider1.png';
import banImg2 from '/public/newHomePage/images/slider2.png';
import banImg3 from '/public/newHomePage/images/slider3.png';
import banImg4 from '/public/newHomePage/images/slider4.png';
import banImg5 from '/public/newHomePage/images/slider5.png';
import banImg6 from '/public/newHomePage/images/slider6.png';
import banImg7 from '/public/newHomePage/images/slider7.png';
import banImg8 from '/public/newHomePage/images/slider8.png';


export default function HomeBannerSlider(props) {
  return (
    <>
      <section
        className={`${styles.BannerSlider} ${styles[props.assignClass]} pt-5 pb-5`}
      >
        <div className="slider">
          <div className="slideTrack">
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg1}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg2}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg3}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg4}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg5}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg6}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg7}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg8}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg1}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg2}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg3}
                className="img-fluid"
              />
            </div>
            <div className="slide">
              <Image
                quality={100}
                alt="BitsWits"
                src={banImg4}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
