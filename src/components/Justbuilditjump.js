import React from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import styles from '@/styles/Justbuilditjump.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '/public/images/banner/bannerImg1.png'
import banImg2 from '/public/images/banner/bannerImg2.png'
import banImg3 from '/public/images/banner/bannerImg1.png'
import banImg4 from '/public/images/banner/bannerImg2.png'
import banImg5 from '/public/images/banner/bannerImg1.png'

const Justbuildit = () => {
   const router = usePathname();
    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className={router == '/mobile-application-duplicate' ? styles.slide1 : styles.slide}>
                <Slider {...bannerslider} className='mt-5'>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg1} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg2} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg3} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg4} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg5} className="img-fluid" />
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Justbuildit