import React from 'react'
import Image from 'next/image';
import styles from "@/styles/HireLogoSlider.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon20 from '/public/newHomePageImages/nexticon/1.png'
import icon30 from '/public/newHomePageImages/nexticon/2.png'
import icon40 from '/public/newHomePageImages/nexticon/3.png'
import icon50 from '/public/newHomePageImages/nexticon/5.png'
import icon60 from '/public/newHomePageImages/nexticon/6.png'
import icon70 from '/public/newHomePageImages/nexticon/7.png'
import icon80 from '/public/newHomePageImages/nexticon/8.png'


const HireLogoSlider = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 5,
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
            <section className={styles.newHomeBg}>
                <div>
                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition`}>

                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon20} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon30} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon80} className="img-fluid w-25" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon40} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon50} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon60} className="img-fluid w-50" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="BitsWits" src={icon70} className="img-fluid w-25" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default HireLogoSlider
