import React from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Justbuilditlp.module.css'
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


const Justbuildit = (props) => {
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
            <section className={styles[props.slide]}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            {props.title}
                            {props.para}

                            <div className={styles.pont}>
                                <a className={`blueShade ${styles.about1}`} href="tel:8335006007">Book A Call</a>
                                <a className={`pink ${styles.about}`} href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
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